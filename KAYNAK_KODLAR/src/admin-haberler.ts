import { supabase } from "./supabaseClient";

const haberlerTable = document.getElementById("haberler") as HTMLElement;
const haberlerH1 = document.getElementById("h1") as HTMLElement;

const adminScroll = document.createElement('style');
adminScroll.innerHTML = `
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
`;

document.head.appendChild(adminScroll);


haberleriYazdir();
haberSay();

async function haberSay() {
	const { count, error } = await supabase
        .from("haber")
        .select('*', { count: 'exact', head: true }); 

	if(error){
		return 0;
	}else if(count !== null){
        haberlerH1.innerHTML += ` (${count})`
    }else{
        return 0;
    }
}

async function haberleriYazdir() {
	const { data, error } = await supabase
        .from("haber")
        .select('*')
        .order('haber_id', { ascending: false });

    if(data){
        data.forEach((haber, index) => {

            switch(haber.tur){
                case 1:
                    haber.tur = "Gündem";
                    break;
                
                case 2:
                    haber.tur = "Ekonomi";
                    break;
                
                case 3:
                    haber.tur = "Spor";
                    break;
                
                case 4:
                    haber.tur = "Magazin";
                    break;
            }

            let tekCift: string;
            if(index % 2 === 0){
                tekCift = "cift";
            }else{
                tekCift = "tek";
            }

            haberlerTable.innerHTML +=`
                <tr class="${tekCift}">
                    <td>${haber.baslik}</td>
                    <td>${haber.tur}</td>
                    <td>${haber.tarih}</td>
                    <td>
                        <div class="buttons">
                            <a href="./haber-duzenle?id=${haber.haber_id}"><button><i class="fa-solid fa-pen"></i></button></a>
                            <a href="./haber-sil?id=${haber.haber_id}"><button><i class="fa-solid fa-trash"></i></button></a>
                        </div>
                    </td>
                </tr>
            `;
        });
    }
    if(error){
        console.error('Supabase hatası:', error)
    }
}