import{s}from"./supabaseClient-C8U0DxkL.js";const n=window.location.pathname,t=document.getElementById("sayfaCikis");window.addEventListener("DOMContentLoaded",async()=>{(n=="/admin/"||n=="/admin/index"||n=="/admin/index.html")&&(window.location.href="./haberler")});window.onload=function(){a()};async function a(){await i()==!1?window.location.href="/":t.style.display="block"}const o=document.createElement("style");o.innerHTML=`
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
`;document.head.appendChild(o);async function i(){return!!(await s.auth.getSession()).data.session}
