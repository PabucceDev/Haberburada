import{s as i}from"./supabaseClient-C8U0DxkL.js";/* empty css              */import"./main-BUKjjlze.js";const s=document.getElementById("haber-detay");window.addEventListener("DOMContentLoaded",async()=>{const e=new URLSearchParams(window.location.search).get("id");if(e)c("haber","haber_id",`${e}`);else{window.location.href="/";return}});async function c(t,e,r){const{data:n,error:o}=await i.from(t).select("*").eq(e,r);n&&n.length>0?n.forEach(a=>{document.title+=` - ${a.baslik}`,s.innerHTML=`
                <h1>${a.baslik}</h1>
                <span>${a.tarih}</span>
                <p>${a.icerik}</p>
            `}):window.location.href="/",o&&console.error("Supabase hatası:",o)}
