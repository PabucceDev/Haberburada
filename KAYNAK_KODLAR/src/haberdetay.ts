import { supabase } from "./supabaseClient";

const haberDetayDiv = document.getElementById("haber-detay") as HTMLElement;

window.addEventListener("DOMContentLoaded", async () => {
    const gelenID = new URLSearchParams(window.location.search);
    const haberID = gelenID.get('id');
    
    if (!haberID) {
        window.location.href = "/";
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
            document.title += ` - ${veri.baslik}`;
            haberDetayDiv.innerHTML = `
                <h1>${veri.baslik}</h1>
                <span>${veri.tarih}</span>
                <p>${veri.icerik}</p>
            `;

        });
    }else{
        window.location.href = "/";
    }
    if(error){
        console.error('Supabase hatası:', error)
    }
}
    