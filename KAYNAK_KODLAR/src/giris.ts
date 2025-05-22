import { supabase } from "./supabaseClient";

const emailInput = document.getElementById("email") as HTMLInputElement;
const sifreInput = document.getElementById("sifre") as HTMLInputElement;
const girisBtn = document.getElementById("girisBtn") as HTMLButtonElement;
const errorBox = document.getElementById("errorBox") as HTMLElement;

window.onload = async function () {
    const oturum = await supabase.auth.getSession();
    const oturumData = oturum.data.session;

    if(oturumData){
        window.location.href = "/";
    }
};

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        girisBtn.click();
    }
});

girisBtn?.addEventListener("click", async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput.value,
        password: sifreInput.value,
    });

    if(error){
        let hata: string = "";

        switch (error.message) {
            case "missing email or phone":
                hata = "Email veya şifre boş bırakılamaz!";
                break;

            case "Invalid login credentials":
                hata = "Email veya şifre yanlış!";
                break;

            default:
                hata = error.message;
        }

        errorBox.style.display = "block";
        errorBox.textContent = `${hata}`;
    }else if(data.session){
        window.location.href = "/admin/haberler";
    }
});