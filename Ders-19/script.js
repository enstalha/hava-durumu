// ! Filtreleme İşlemleri
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
   
    let searchTerm = searchInput.value.trim().toLocaleLowerCase();
    
    let cards = document.querySelectorAll(".col-4");

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];

        let productName = card.querySelector(".card-title").innerHTML.trim().toLocaleLowerCase();

        if(productName.includes(searchTerm)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    } 

    searchInput.value = "";
})


// ! Sepeti arttırıp azaltma işlemleri
const result = document.querySelector("#result");
const row = document.querySelector(".row");

row.addEventListener("click", (e) => {
    if(e.target.className.includes("add-to-card")){
        result.innerHTML++;
    }else if(e.target.className.includes("remove-to-card")){
        if(result.innerHTML > 0){
            result.innerHTML--;
        }
    }
})


// ! Dorpdown menü
const renault = document.querySelector("#renault");
const volkswagen = document.querySelector("#volkswagen");
const toyota = document.querySelector("#toyota");

renault.addEventListener("click", () => {

    let cards = document.querySelectorAll(".col-4");

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];

        let productName = card.querySelector(".card-title").innerHTML;

        if(productName.includes(renault.innerHTML)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }
})

toyota.addEventListener("click", () => {

    let cards = document.querySelectorAll(".col-4");

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];

        let productName = card.querySelector(".card-title").innerHTML;

        if(productName.includes(toyota.innerHTML)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }
})

volkswagen.addEventListener("click", () => {

    let cards = document.querySelectorAll(".col-4");

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];

        let productName = card.querySelector(".card-title").innerHTML;

        if(productName.includes(volkswagen.innerHTML)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }
})