import { supabase } from "./supabaseClient";

const sayfa = window.location.pathname;
const haberlerDiv = document.getElementById("haberler") as HTMLElement;

window.addEventListener("DOMContentLoaded", async () => {
    if(sayfa == "/" || sayfa == "/index" || sayfa == "index.html"){
        await sonHaberler();
    }
    if(sayfa == "/gundem" || sayfa == "/gundem.html"){
        await kosulluHaberler("haber", "tur", "1");
    }
    if(sayfa == "/ekonomi" || sayfa == "/ekonomi.html"){
        await kosulluHaberler("haber", "tur", "2");
    }
    if(sayfa == "/spor" || sayfa == "/spor.html"){
        await kosulluHaberler("haber", "tur", "3");
    }
    if(sayfa == "/magazin" || sayfa == "/magazin.html"){
        await kosulluHaberler("haber", "tur", "4");
    }
});

function turkceUpperCase(str: string): string{
    return str.replace(/[iı]/g, (match: string) => {
        if (match === 'ı') return 'I';
        if (match === 'i') return 'İ';
        return match;
    }).toUpperCase();
}

async function sonHaberler(){
    const { data, error } = await supabase
        .from("haber")
        .select('*')
        .order('haber_id', { ascending: false })
        .limit(6);

    if(data){
        data.forEach((haber) => {
            switch(haber.tur){
                case 1:
                    haber.tur = "Gündem";
                    break;
                
                case 2:
                    haber.tur = "Ekonomİ";
                    break;
                
                case 3:
                    haber.tur = "Spor";
                    break;
                
                case 4:
                    haber.tur = "Magazİn";
                    break;
            }

            haberlerDiv.innerHTML += `
            <a href="/haber?id=${haber.haber_id}">
                <div class="haber-box">
                    <img src="${haber.imageURL}">
                    <h2>${turkceUpperCase(haber.baslik)}</h2>
                    <p>${haber.tur}</p>
                </div>
            </a>
            `;

        });
    }
    if(error){
        console.error('Supabase hatası:', error)
    }
}

async function kosulluHaberler(tableName: string, where: string, whereValue: string){
    const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('haber_id', { ascending: false })
        .eq(where, whereValue)

    if(data){
        data.forEach((haber) => {

            switch(haber.tur){
                case 1:
                    haber.tur = "Gündem";
                    break;
                
                case 2:
                    haber.tur = "Ekonomİ";
                    break;
                
                case 3:
                    haber.tur = "Spor";
                    break;
                
                case 4:
                    haber.tur = "Magazİn";
                    break;
            }

            haberlerDiv.innerHTML += `
            <a href="/haber?id=${haber.haber_id}">
                <div class="haber-box">
                    <img src="${haber.imageURL}">
                    <h2>${turkceUpperCase(haber.baslik)}</h2>
                    <p>${haber.tur}</p>
                </div>
            </a>
            `;

        });
    }
    if(error){
        console.error('Supabase hatası:', error)
    }
}