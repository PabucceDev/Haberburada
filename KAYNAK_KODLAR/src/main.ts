import { supabase } from "./supabaseClient";


const girisBtn = document.getElementById("sayfaGiris") as HTMLElement;
const cikisBtn = document.getElementById("sayfaCikis") as HTMLElement;
const sayfalarUl = document.getElementById("sayfalar") as HTMLElement;

window.onload = function() {
    checkSession();
};

async function checkSession() {
    const oturum = await sessionCheck();

    if(oturum == true){
        girisBtn.style.display = "none";
        cikisBtn.style.display = "block";
        sayfalarUl.innerHTML += `<a href="/admin/"><li>Admin Paneli</li></a>`;

    }else{
        girisBtn.style.display = "block";
        cikisBtn.style.display = "none";
    }
}
async function sessionCheck(): Promise<boolean>{
    const session = await supabase.auth.getSession();
    const sessionData = session.data.session;

    if(sessionData){
        return true;
    }

    return false;
}