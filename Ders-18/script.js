// !  Örnek
// const body = document.querySelector("body");
// const kapsayici = document.createElement("div");
// kapsayici.style.width = "400px";
// kapsayici.style.height = "400px";
// kapsayici.style.border = "2px solid black"
// kapsayici.className = "kapsayici";

// let li = document.createElement("li");
// let a = document.createElement("a");
// let ul = document.createElement("ul");
// a.innerHTML = "kodkoloni";
// a.href = "https://www.kodkoloni.com";
// a.target = "_blank";

// body.append(kapsayici);
// kapsayici.append(ul);
// ul.append(li);
// li.append(a);


// ! Örnek
// const body = document.querySelector("body");
// const kapsayici = document.createElement("div");
// kapsayici.style.width = "400px";
// kapsayici.style.height = "400px";
// kapsayici.style.border = "2px solid black";

// const resim = document.createElement("img")
// resim.style.width = "400px";
// resim.style.height = "400px";
// resim.src = "https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg";
// body.append(kapsayici);
// kapsayici.append(resim);


// ! DOM Eventleri
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){
//     btn.style.color = "red";
//     btn.style.backgroundColor = "yellow";
//     btn.innerHTML = "Tıklandı!";
// })

// ? 2. Kullanım
// btn.addEventListener("click", degistir);

// function degistir(){
//     btn.style.color = "yellow";
//     btn.style.backgroundColor = "blue";
//     btn.innerHTML = "Tıklandı!";
// }


// ! ÖRnek
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){
//     setTimeout(() => {
//         alert("Ödeme Tamamlandı!");
//         btn.style.backgroundColor = "green";
//     },3000)
// })


// ! Örnek
// const body = document.querySelector("body");
// const kapsayici = document.createElement("div");
// kapsayici.style.width = "400px";
// kapsayici.style.height = "400px";
// kapsayici.style.border = "2px solid black"
// kapsayici.className = "kapsayici";

// const resim = document.createElement("img");
// resim.style.width = "400px";
// resim.style.height = "400px";

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){
//     resim.src = "https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg";
//     body.append(kapsayici);
//     kapsayici.append(resim);
// })


// ! Örnek
// const body = document.querySelector("body");
// const content = document.querySelector(".content");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){
//     const kapsayici = document.createElement("div");
//     kapsayici.style.width = "400px";
//     kapsayici.style.height = "400px";
//     kapsayici.style.border = "2px solid black"
//     kapsayici.className = "kapsayici";

//     const resim = document.createElement("img");
//     resim.style.width = "400px";
//     resim.style.height = "400px";
//     resim.src = "https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg";

//     content.append(kapsayici);
//     kapsayici.append(resim);
// })


// ! Örnek
// const body = document.querySelector("body");
// const content = document.querySelector(".content");
// const btn = document.querySelector("#btn");

// const resimler = [
//     {
//         id : 1,
//         url : "https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg",
//     },
//     {
//         id : 2,
//         url : "https://starwalk.space/gallery/images/biggest-water-sourse-in-space/1920x1080.jpg",
//     },
//     {
//         id : 3,
//         url : "https://c02.purpledshub.com/uploads/sites/48/2020/04/Things-never-knew-astronomy-e454e5d.jpg",
//     },
//     {
//         id : 4,
//         url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_RAJfiSok_kXRb-icuxuAPb1NqXKAhX73A&s",
//     },
//     {
//         id : 5,
//         url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzL35BHqEL9qi-FaZnMJ3eG92biIgiP6BbiQ&s",
//     },
//     {
//         id : 6,
//         url : "https://cdn.mos.cms.futurecdn.net/9UmWCbyxpKaEGXjwFG7dXo-1200-80.jpg",
//     },
// ]

// ! hatalı
// btn.addEventListener("click", function(){
//     const kapsayici = document.createElement("div");
//     kapsayici.style.width = "400px";
//     kapsayici.style.height = "400px";
//     kapsayici.style.border = "2px solid black"
//     kapsayici.className = "kapsayici";

//     const resim = document.createElement("img");
//     resim.style.width = "400px";
//     resim.style.height = "400px";

//     for(let i = 0; i < resimler.length; i++){
//         resim.src = resimler[i].url;
//     }
    
//     content.append(kapsayici);
//     kapsayici.append(resim);
// })

// ! Tamamlanmış Hali
// btn.addEventListener("click", function(){
//     resimler.array.forEach((image) => {
//         const kapsayici = document.createElement("div");
//         kapsayici.style.width = "400px";
//         kapsayici.style.height = "400px";
//         kapsayici.style.border = "2px solid black"
//         kapsayici.className = "kapsayici";

//         const resim = document.createElement("img");
//         resim.style.width = "400px";
//         resim.style.height = "400px";
//         resim.src = image.url;

//         content.append(kapsayici);
//         kapsayici.append(resim);
//     });
// })

// ! Denme
// let resimId = 0;

// btn.addEventListener("click", function(){
//     const kapsayici = document.createElement("div");
//     kapsayici.style.width = "400px";
//     kapsayici.style.height = "400px";
//     kapsayici.style.border = "2px solid black";
//     kapsayici.className = "kapsayici";

//     const resim = document.createElement("img");
//     resim.style.width = "400px";
//     resim.style.height = "400px";

//     resim.src = resimler[resimId].url;
//     resimId++;
//     if(resimId == resimler.length){
//         resimId = 0 ;
//     }

//     content.append(kapsayici);
//     kapsayici.append(resim);
// });


// ! Örnek
// const input = document.querySelector("input");
// const sonuc = document.querySelector("#sonuc");

// input.addEventListener("input", function(event) {

//     console.log(event.target.value)
//     sonuc.innerHTML = event.target.value;
//     sonuc.style.color = "red"; 
// })

// ! Örnek
// const input = document.querySelector("input");
// const body = document.querySelector("body")


// input.addEventListener("input", function(event) {
//     body.style.backgroundColor = event.target.value;
// })

// ! Örnek
// const input = document.querySelector("input");
// const sonuc = document.querySelector("#sonuc");

// input.addEventListener("blur", function(e) {
//     if(e.target.value.trim() == ""){
//         sonuc.innerHTML = "Bu alan boş bırakılamaz!";
//         sonuc.style.color = "darkred"
//     }else{
//         sonuc.innerHTML = `Hoşgeldin ${e.target.value}`;
//         sonuc.style.color = "green";
//     }
// })


// ! Örnek
// const btn = document.querySelector("#btn");
// const select = document.querySelector("select");
// const sonuc = document.querySelector("#sonuc");

// btn.addEventListener("click", function() {
//     if(select.value == "İlkokul" || select.value == "Ortaokul"){
//         sonuc.innerHTML = `Seminere katılamazsın. ${select.value}`;
//         sonuc.style.color = "red";
//     }else{
//         sonuc.innerHTML = `Seminere katılabilirsin. ${select.value}`;
//         sonuc.style.color = "green";
//     }
// })

// select.addEventListener("change", function(){
//     if(select.value == "İlkokul" || select.value == "Ortaokul"){
//         sonuc.innerHTML = `Seminere katılamazsın. ${select.value}`;
//         sonuc.style.color = "red";
//     }else{
//         sonuc.innerHTML = `Seminere katılabilirsin. ${select.value}`;
//         sonuc.style.color = "green";
//     }
// })


// ! Örnek
// const btn = document.querySelector("#btn");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// btn.addEventListener("click", function() {
//     let li = document.createElement("li");
//     li.innerHTML = input.value;
//     input.value = "";

//     ul.append(li);
// })

// input.addEventListener("keypress", function(e) {
//     if(e.key == "Enter"){
//         let li = document.createElement("li");
//         li.innerHTML = e.target.value;
//         input.value = "";
    
//         ul.append(li);
//     } 
// })


// ! Örnek-Submit Event ı İle

// const btn = document.querySelector("#btn");
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     let li = document.createElement("li");
//     li.innerHTML = input.value;
//     ul.append(li);
    
//     input.value = "";
// })


// ! Örnek
const input = document.querySelector("input");
const ul = document.querySelector("ul");

input.addEventListener("input", function() {
    let searchTerm = input.value.trim().toLocaleLowerCase();
    
    const items = ul.querySelectorAll("li");

    for(let i = 0; i < items.length; i++){
        let item = items[i];
        let text = item.innerHTML.trim().toLocaleLowerCase();
        // console.log(text);

        // if(text.startsWith(searchTerm)){
        //     item.style.display = "block";
        // }else{
        //     item.style.display = "none";
        // }

        // ! Short If Ternary Oparatörü
        item.style.display = text.startsWith(searchTerm) ? "block" : "none";
    }
})