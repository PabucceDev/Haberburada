import { supabase } from "./supabaseClient";

window.addEventListener("DOMContentLoaded", async () => {
    const gelenID = new URLSearchParams(window.location.search);
    const haberID = gelenID.get('id');

    if(!haberID){
        window.location.href = "/admin/";
        return;
    }else{
        await veriSil("haber", "haber_id", haberID);
    }
});

async function veriSil(tableName: string, where: string, whereDeger: string) {
    const { error } = await supabase
        .from(tableName)
        .delete()
        .eq(where, whereDeger);

    if(error){
        console.error('Silme hatası:', error);
        window.location.href = "/admin/";
    }else{
        window.location.href = "/admin/";
    }
}