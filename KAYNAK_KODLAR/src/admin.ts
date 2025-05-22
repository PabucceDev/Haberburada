import { supabase } from "./supabaseClient";

window.addEventListener("DOMContentLoaded", async () => {
    const sayfa = window.location.pathname;

    if(sayfa === "/admin/" || sayfa === "/admin/index" || sayfa === "/admin/index.html"){
        window.location.href = "./haberler";
        return;
    }

    const oturum = await supabase.auth.getSession();
    const oturumData = oturum.data.session;

    if(!oturumData){
        window.location.href = "/";
    }else{
        const cikisBtn = document.getElementById("sayfaCikis") as HTMLElement;
        if(cikisBtn){
            cikisBtn.style.display = "block";
        }
    }

    const adminScroll = document.createElement('style');
    adminScroll.innerHTML = `
      ::selection{
        background-color:rgb(255, 102, 102);
        color:white;
      }

      ::-webkit-scrollbar{
        width:7px;
      }

      ::-webkit-scrollbar-thumb{
        background-color:rgb(221, 102, 102);
      }

      ::-webkit-scrollbar-thumb:hover{
        box-shadow:0 0 30px 0 #000;
      }
    `;

    document.head.appendChild(adminScroll);
});
