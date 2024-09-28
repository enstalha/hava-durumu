const kiloInput =  document.querySelector("#kiloInput");
const select = document.querySelector("select");
const btnHesapla = document.querySelector("#btnHesapla");
const img = document.querySelector("#for-img");
const sonuc = document.querySelector("#sonuc");

const gravity = [
    { 
        name: "Dünya", 
        gravity: 9.81 
    },
    { 
        name: "Jüpiter", 
        gravity: 24.79 
    },
    { 
        name: "Mars", 
        gravity: 3.71 
    },
    { 
        name: "Merkür", 
        gravity: 3.7 
    },
    { 
        name: "Ay", 
        gravity: 1.62 
    },
    { 
        name: "Neptün", 
        gravity: 11.15 
    },
    { 
        name: "Plüto", 
        gravity: 0.62
    },
    { 
        name: "Satürn", 
        gravity: 10.44 
    },
    { 
        name: "Uranüs", 
        gravity: 8.69 
    },
    { 
        name: "Venüs", 
        gravity: 8.87 
    }
  ]  

btnHesapla.addEventListener("click", (e) => {
    e.preventDefault();
    let kütle = Number(kiloInput.value);
    kütle = kütle / 9.81;
    console.log(kütle);
    
    let gezegen = select.value;
    console.log(gezegen);

    if(kiloInput.value != "" && select.value != "Seçim Yap"){
        for (let i = 0; i < gravity.length; i++) {
            if (gravity[i].name == gezegen) {   
                img.setAttribute("src", `img/${gezegen.toLocaleLowerCase()}.png`);  

                sonuc.classList.add("text-white");
                sonuc.classList.remove("text-danger");

                sonuc.innerHTML = `
                    Seçtiğiniz gezegen ${gezegen}. <br>
                    Bu gezegendeki ağırlığınız ${(kütle * gravity[i].gravity).toFixed(2)} kg.
                `; 
            }
        }
        // kiloInput.value = "";
        select.value = "Seçim Yap";
    }else{
        sonuc.innerHTML = "Bir seçim yapmak zorundasınız!!!!!!";
        sonuc.classList.remove("text-white");
        sonuc.classList.add("text-danger");
    }
})