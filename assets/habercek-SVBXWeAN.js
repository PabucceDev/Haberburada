import{s as c}from"./supabaseClient-C8U0DxkL.js";const e=window.location.pathname,u=document.getElementById("haberler");window.addEventListener("DOMContentLoaded",async()=>{(e=="/"||e=="/index"||e=="index.html")&&await l(),(e=="/gundem"||e=="/gundem.html")&&await n("haber","tur","1"),(e=="/ekonomi"||e=="/ekonomi.html")&&await n("haber","tur","2"),(e=="/spor"||e=="/spor.html")&&await n("haber","tur","3"),(e=="/magazin"||e=="/magazin.html")&&await n("haber","tur","4")});function d(t){return t.replace(/[iı]/g,i=>i==="ı"?"I":i==="i"?"İ":i).toUpperCase()}async function l(){const{data:t,error:i}=await c.from("haber").select("*").order("haber_id",{ascending:!1}).limit(6);t&&t.forEach(a=>{switch(a.tur){case 1:a.tur="Gündem";break;case 2:a.tur="Ekonomİ";break;case 3:a.tur="Spor";break;case 4:a.tur="Magazİn";break}u.innerHTML+=`
            <a href="/haber?id=${a.haber_id}">
                <div class="haber-box">
                    <img src="${a.imageURL}">
                    <h2>${d(a.baslik)}</h2>
                    <p>${a.tur}</p>
                </div>
            </a>
            `}),i&&console.error("Supabase hatası:",i)}async function n(t,i,a){const{data:s,error:o}=await c.from(t).select("*").order("haber_id",{ascending:!1}).eq(i,a);s&&s.forEach(r=>{switch(r.tur){case 1:r.tur="Gündem";break;case 2:r.tur="Ekonomİ";break;case 3:r.tur="Spor";break;case 4:r.tur="Magazİn";break}u.innerHTML+=`
            <a href="/haber?id=${r.haber_id}">
                <div class="haber-box">
                    <img src="${r.imageURL}">
                    <h2>${d(r.baslik)}</h2>
                    <p>${r.tur}</p>
                </div>
            </a>
            `}),o&&console.error("Supabase hatası:",o)}
