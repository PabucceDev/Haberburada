import { supabase } from "./supabaseClient";


const girisBtn = document.getElementById("sayfaGiris") as HTMLElement;
const cikisBtn = document.getElementById("sayfaCikis") as HTMLElement;
const sayfalarUl = document.getElementById("sayfalar") as HTMLElement;

window.onload = async function () {
    const oturum = await supabase.auth.getSession();
    const oturumData = oturum.data.session;

    if(oturumData){
        girisBtn.style.display = "none";
        cikisBtn.style.display = "block";
        sayfalarUl.innerHTML += `<a href="/admin/"><li>Admin Paneli</li></a>`;
    }else{
        girisBtn.style.display = "block";
        cikisBtn.style.display = "none";
    }
};