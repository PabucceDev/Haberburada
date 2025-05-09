import{s as k}from"./supabaseClient-C8U0DxkL.js";/* empty css              */import"./admin-DphCXgaD.js";const D=document.getElementById("yenihaber");window.addEventListener("DOMContentLoaded",async()=>{const e=new URLSearchParams(window.location.search).get("id");if(e)E("haber","haber_id",`${e}`);else{window.location.href="/admin/";return}});async function E(r,e,l){const{data:a,error:i}=await k.from(r).select("*").eq(e,l);a&&a.length>0?a.forEach(t=>{let s="",d="",u="",p="";switch(t.tur){case 1:s="selected";break;case 2:d="selected";break;case 3:u="selected";break;case 4:p="selected";break}D.innerHTML+=`
                <select name="tur" id="tur">
                    <option value disabled>Haber Türü</option>
                    <option value="1" ${s}>Gündem</option>
                    <option value="2" ${d}>Ekonomi</option>
                    <option value="3" ${u}>Spor</option>
                    <option value="4" ${p}>Magazin</option>
                </select>
                <input value="${t.imageURL}" type="text" id="image" placeholder="Haber Resmi (URL)">
                <input value="${t.baslik}" type="text" id="baslik" placeholder="Haber Başlığı">
                <textarea placeholder="İçerik" id="icerik">${t.icerik}</textarea>  
                <button id="duzenle">Düzenle</button>
            `;const g=document.getElementById("tur"),m=document.getElementById("image"),b=document.getElementById("baslik"),h=document.getElementById("icerik"),n=document.getElementById("errorBox"),c=document.getElementById("duzenle");c==null||c.addEventListener("click",async()=>{if(!(parseInt(g.value)>0)||!(m.value.length>0)||!(b.value.length>0)||!(h.value.length>0)){n.style.display="block",n.textContent="Boş alan bırakmayınız.";return}const o=new Date,y=o.getDate().toString().padStart(2,"0"),$=(o.getMonth()+1).toString().padStart(2,"0"),I=o.getFullYear(),v=o.getHours().toString().padStart(2,"0"),w=o.getMinutes().toString().padStart(2,"0"),f=`${y}.${$}.${I} ${v}:${w}`,S={baslik:`${b.value}`,icerik:`${h.value}`,tur:parseInt(g.value),imageURL:`${m.value}`,tarih:`${f}`},B=new URLSearchParams(window.location.search).get("id");x("haber",S,"haber_id",`${B}`).then(()=>{n.style.display="block",n.style.backgroundColor="#50ad5c",n.textContent="Haber düzenlendi."})})}):window.location.href="/admin/",i&&console.error("Supabase hatası:",i)}async function x(r,e,l,a){const{data:i,error:t}=await k.from(r).update(e).eq(l,a);return t?null:i}
