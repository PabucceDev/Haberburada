import { supabase } from "./supabaseClient";


window.onload = function() {
    checkSession();
};

async function checkSession() {
    const oturum = await sessionCheck();

    if(oturum == true){
        const {} = await supabase.auth.signOut();
        window.location.href = "/giris";
    }else{
        window.location.href = "/";
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