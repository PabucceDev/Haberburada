import { supabase } from "./supabaseClient";

const sayfa = window.location.pathname;
const cikisBtn = document.getElementById("sayfaCikis") as HTMLElement;


window.addEventListener("DOMContentLoaded", async () => {
    if(sayfa == "/admin/" || sayfa == "/admin/index" || sayfa == "/admin/index.html"){
        window.location.href = "./haberler";
    }    
});

window.onload = function() {
    checkSession();
};

async function checkSession() {
    const oturum = await sessionCheck();

    if(oturum == false){
        window.location.href = "/";
    }else{
        cikisBtn.style.display = "block";
    }
}

const adminScroll = document.createElement('style');
adminScroll.innerHTML = `
  ::selection {
    background-color:rgb(255, 102, 102);
    color: white;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color:rgb(221, 102, 102);
  }

  ::-webkit-scrollbar-thumb:hover {
    box-shadow: 0 0 30px 0 #000;
  }
`;

document.head.appendChild(adminScroll);


async function sessionCheck(): Promise<boolean>{
    const session = await supabase.auth.getSession();
    const sessionData = session.data.session;

    if(sessionData){
        return true;
    }

    return false;
}