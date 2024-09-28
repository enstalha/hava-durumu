// ! Örnek
// const renkler = ["purple", "blue", "yellow", "green", "grey", "brown", "red", "orange"]

// const body = document.querySelector("body");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     let color = renkler[(Math.random() * renkler.length).toFixed(0)];

//     body.style.backgroundColor = color;
// })


// ! Örnek 2
const renkler = ["purple", "blue", "yellow", "green", "grey", "brown", "red", "orange"]

const body = document.querySelector("body");
const btn = document.querySelector("#btn");

let renk = 0;

btn.addEventListener("click", () => {
    body.style.backgroundColor = renkler[renk];

    renk = renk + 1;

    if(renk == renkler.length){
        renk =  0;
    }
})
