import { supabase } from "./supabaseClient";

const haberDiv = document.getElementById("yenihaber") as HTMLElement;

window.addEventListener("DOMContentLoaded", async () => {
    const gelenID = new URLSearchParams(window.location.search);
    const haberID = gelenID.get('id');
    
    if (!haberID) {
        window.location.href = "/admin/";
        return;
    }else{
        kosulluVeriCek("haber", "haber_id", `${haberID}`);
    }
});


async function kosulluVeriCek(tableName: string, where: string, whereValue: string){
    const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq(where, whereValue)


    if(data && data.length > 0){
        data.forEach((veri) => {
            let option1 = "";
            let option2 = "";
            let option3 = "";
            let option4 = "";

            switch(veri.tur){
                case 1:
                    option1 = "selected";
                    break;
                
                case 2:
                    option2 = "selected";
                    break;

                case 3:
                    option3 = "selected";
                    break;

                case 4:
                    option4 = "selected";
                    break;
            }

            haberDiv.innerHTML += `
                <select name="tur" id="tur">
                    <option value disabled>Haber Türü</option>
                    <option value="1" ${option1}>Gündem</option>
                    <option value="2" ${option2}>Ekonomi</option>
                    <option value="3" ${option3}>Spor</option>
                    <option value="4" ${option4}>Magazin</option>
                </select>
                <input value="${veri.imageURL}" type="text" id="image" placeholder="Haber Resmi (URL)">
                <input value="${veri.baslik}" type="text" id="baslik" placeholder="Haber Başlığı">
                <textarea placeholder="İçerik" id="icerik">${veri.icerik}</textarea>  
                <button id="duzenle">Düzenle</button>
            `;

            const selectTur = document.getElementById("tur") as HTMLSelectElement;
            const inputImage = document.getElementById("image") as HTMLInputElement;
            const inputBaslik = document.getElementById("baslik") as HTMLInputElement;
            const textareaIcerik = document.getElementById("icerik") as HTMLTextAreaElement;
            const errorBox = document.getElementById("errorBox") as HTMLElement;
        

            const duzenleBtn = document.getElementById("duzenle") as HTMLButtonElement;

            duzenleBtn?.addEventListener("click", async () => {

                if(!(parseInt(selectTur.value) > 0) || !(inputImage.value.length > 0) || !(inputBaslik.value.length > 0) || !(textareaIcerik.value.length > 0)){
                    errorBox.style.display = "block";
                    errorBox.textContent = `Boş alan bırakmayınız.`;
                    return;
                }


                const tarih = new Date();

                const gun = tarih.getDate().toString().padStart(2, '0');
                const ay = (tarih.getMonth() + 1).toString().padStart(2, '0');
                const yil = tarih.getFullYear();
                
                const saat = tarih.getHours().toString().padStart(2, '0');
                const dakika = tarih.getMinutes().toString().padStart(2, '0');
                
                const tarihSaat = `${gun}.${ay}.${yil} ${saat}:${dakika}`;

                const yeniHaber = {
                    baslik: `${inputBaslik.value}`,
                    icerik: `${textareaIcerik.value}`,
                    tur: parseInt(selectTur.value),
                    imageURL: `${inputImage.value}`,
                    tarih: `${tarihSaat}`
                }

                const gelenID = new URLSearchParams(window.location.search);
                const haberID = gelenID.get('id');

                veriGuncelle("haber", yeniHaber, "haber_id", `${haberID}`).then(() => {
                    errorBox.style.display = "block";
                    errorBox.style.backgroundColor = "#50ad5c";
                    errorBox.textContent = `Haber düzenlendi.`;
                });
                

            });


        });
    }else{
        window.location.href = "/admin/";
    }
    if(error){
        console.error('Supabase hatası:', error)
    }
}


async function veriGuncelle(tableName: string, veri: object, where: string, whereDeger: string) {
    const { data, error } = await supabase
        .from(tableName)
        .update(veri)
        .eq(where, whereDeger);

    if(error){
        return null;
    }

    return data;
}