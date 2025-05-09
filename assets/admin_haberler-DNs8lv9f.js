import{s as o}from"./supabaseClient-C8U0DxkL.js";/* empty css              */import"./admin-DphCXgaD.js";const s=document.getElementById("haberler"),c=document.getElementById("h1"),i=document.createElement("style");i.innerHTML=`
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
`;document.head.appendChild(i);d();l();async function l(){const{count:t,error:r}=await o.from("haber").select("*",{count:"exact",head:!0});if(r)return 0;if(t!==null)c.innerHTML+=` (${t})`;else return 0}async function d(){const{data:t,error:r}=await o.from("haber").select("*").order("haber_id",{ascending:!1});t&&t.forEach((e,n)=>{switch(e.tur){case 1:e.tur="Gündem";break;case 2:e.tur="Ekonomi";break;case 3:e.tur="Spor";break;case 4:e.tur="Magazin";break}let a;n%2===0?a="cift":a="tek",s.innerHTML+=`
                <tr class="${a}">
                    <td>${e.baslik}</td>
                    <td>${e.tur}</td>
                    <td>${e.tarih}</td>
                    <td>
                        <div class="buttons">
                            <a href="./haber-duzenle?id=${e.haber_id}"><button><i class="fa-solid fa-pen"></i></button></a>
                            <a href="./haber-sil?id=${e.haber_id}"><button><i class="fa-solid fa-trash"></i></button></a>
                        </div>
                    </td>
                </tr>
            `}),r&&console.error("Supabase hatası:",r)}
