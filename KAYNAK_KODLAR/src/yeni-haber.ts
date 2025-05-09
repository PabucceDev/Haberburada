import { supabase } from "./supabaseClient";

const yayinlaBtn = document.getElementById("yayinla") as HTMLButtonElement;
const selectTur = document.getElementById("tur") as HTMLSelectElement;
const inputImage = document.getElementById("image") as HTMLInputElement;
const inputBaslik = document.getElementById("baslik") as HTMLInputElement;
const textareaIcerik = document.getElementById("icerik") as HTMLTextAreaElement;
const errorBox = document.getElementById("errorBox") as HTMLElement;


yayinlaBtn.addEventListener("click", async () => {

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

    veriEkle("haber", yeniHaber).then(() => {
        errorBox.style.display = "block";
        errorBox.style.backgroundColor = "#50ad5c";
        errorBox.textContent = `Haber yayınlandı.`;
    });
    

});

async function veriEkle(tableName: string, veri: object) {
    const { data, error } = await supabase
        .from(tableName)
        .insert([veri]);

    if(error){
        return null;
    }

    return data;
}