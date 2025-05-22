import { supabase } from "./supabaseClient";

window.onload = async () => {
    const oturum = await supabase.auth.getSession();
    const oturumData = oturum.data.session;

    if(oturumData){
        await supabase.auth.signOut();
        window.location.href = "/giris";
    }else{
        window.location.href = "/";
    }
};
