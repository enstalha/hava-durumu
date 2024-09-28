// ! Callback fonksiyonları (Fonksiyon içinde Fonksiyon)
// function selamla(name, fonksiyon){
//     console.log("Merhaba " + name);
//     fonksiyon();
// }

// function güleGüle(){
//     console.log("Güle Güle..");
// }

// selamla("Furkan", güleGüle);


// ! setTimeOut Fonksiyonu Kullanımı
// function selamla(name){
//     console.log("Merhaba " + name)
// }

// function güleGüle(){
//     console.log("Güle Güle..");
// }

// selamla("Furkan");
// setTimeout(güleGüle, 4000);


// ! setTimeOut Fonksiyon 2. Kullanımı
// setTimeout(function(){
//     console.log("Bu reklam 5s sonra karşınıza çıkacak!")
// },5000);

// setTimeout(() => {
//     console.log("Bu reklam 5s sonra karşınıza çıkacak!")
// }, 3000);


// ! Örnek
// function tekrarla(){
//     console.log("Bu reklam 5s sonra tekrar önüne gelecek!");
//     setTimeout(tekrarla,5000);
// }

// tekrarla();


// ! Yukarıdaki örneği kapatma yönetmi
// let timeOutId;

// function tekrarla(){
//     console.log("Bu reklam 5s sonra tekrar önüne gelecek!");
//     timeOutId = setTimeout(tekrarla,5000);
//     console.log(timeOutId);
// }


// function durdur(){
//     clearTimeout(timeOutId);
//     console.log("Reklam tamamlandı!");
// }

// setTimeout(tekrarla, 5000);
// setTimeout(durdur, 15500);


// ! Foeach() methodu kullanımı (Bir array methodu. Sadece arraylerde kullanılır)
// ! Örnek
const isimler = ["Ahmet", "Mehmet", "Hüseyin", "Kemal", "Talha", "Furkan"];

// for(let i = 0; i < isimler.length; i++){
//     console.log(isimler[i].toUpperCase());
// }


// isimler.forEach((isim) => {
//     console.log(isim.toUpperCase());
// });


// ! Örnek
// let sayilar = [1,2,3,4,5];
// let toplam = 0;

// sayilar.forEach((sayi)=>{
//     toplam=sayi+toplam;
// });
// console.log(toplam);


// ! Örnek
// toplam = 0;

// for(let i = 0; i < 5; i++){
//     sayi = Number(prompt("Bir sayı giriniz :"));
//     toplam = sayi + toplam;
// }

// console.log(toplam);


// ! Örnek
// let toplam = 0;
// let sayilar = [];

// for(let i = 0; i < 5; i++){
//     sayi = Number(prompt("Bir sayı giriniz :"));
//     sayilar.push(sayi);
// }

// // console.log(sayilar);
// sayilar.forEach((sayi)=>{
//     toplam += sayi;
// })
// console.log(toplam);


// ! NOT: foreach map filter --> array ile kullanılır

// ! ÖRnek
// let sayilar = [1,2,3,4,5];

// let ikiKat = sayilar.map((sayi)=>{
//     return sayi * 2;
// })

// console.log(ikiKat);


// let ürünler = [
//     {
//         isim : "Bilgisayar",
//         fiyat : 8000,
//     },
//     {
//         isim : "Telefon",
//         fiyat : 7000,
//     },
//     {
//         isim : "Tablet",
//         fiyat : 6000,
//     },
// ]

// let yeniFiyat = ürünler.map((ürün)=>{
//     return {
//         isim : ürün.isim,
//         fiyat : (ürün.fiyat * 1.10).toFixed(0)
//     }
// })

// console.log(yeniFiyat);


// ! Örnek
// let notlar = [95,82,75,64,58,45,98,89,78]


// let harfNotlari = notlar.map((not)=>{
//     if(not > 89){
//         return "A"
//     }else if(not>=80 && not < 90){
//         return "B"
//     }else if(not>=70 && not < 80){
//         return "C"
//     }
// })

// console.log(notlar)
// console.log(harfNotlari)

// let A = 0;
// let C = 0;
// let B = 0;
// harfNotlari.forEach((harf)=>{
//     if(harf == "A"){
//         A++
//     }
//     if(harf == "B"){
//         B++
//     }
//     if(harf == "C"){
//         C++
//     }
// })

// console.log(`${A} tane A alan öğrenci var.`)
// console.log(`${B} tane B alan öğrenci var.`)
// console.log(`${C} tane C alan öğrenci var.`)


// ! Filter methodu

// let sayilar = [1,2,3,4,5,6,7,8,9,10];

// let ciftSayilar = sayilar.filter((sayi)=>{
//     return sayi % 2 == 0;
// })

// console.log(ciftSayilar);

// ! Örnek
// let sayilar = [1,2,3,4,5,6,7,8,9,10];

// let ciftSayilar = sayilar.filter((sayi) => {
//     return sayi % 2 == 0;
// }).map((carp) => {
//     return carp * 2;
// })

// console.log(ciftSayilar)


// ! DOM ----> Doucment Object Modal
// console.log(document)

// ! id ile eleman seçimi
// let kodkoloni = document.getElementById("kodkoloni");
// console.log(kodkoloni);
// kodkoloni.style.color = "red";
// kodkoloni.style.backgroundColor = "yellow";
// kodkoloni.innerHTML = "Furkan İlaslan";


// ! Class ismi ile eleman seçimi
// let sehir = document.getElementsByClassName("sehir");
// console.log(sehir)
// sehir[0].style.color = "red";
// sehir[1].style.color = "red";

// for(let i = 0; i < sehir.length; i++){
//     sehir[i].style.color = "red";
// }


// ! Etiket(Tag) ile eleman seçimi
// let heading = document.getElementsByTagName("h2");
// console.log(heading);
// heading[0].style.color = "blue";

// ! ES6 Syntax ı ile gelen querySelector ile eleman seçimi
// let kodkoloni = document.querySelector("#kodkoloni")
// console.log(kodkoloni);

// let sehir = document.querySelectorAll(".sehir")
// console.log(sehir);

// let heading = document.querySelector("h2")
// console.log(heading);


// ! JS ile element Oluşturma
let body = document.querySelector("body");
let paragraf = document.createElement("p");
paragraf.innerHTML = "Bu bir paragraftır!";
paragraf.className = "yazi";
paragraf.Id = "ozelYazi";
console.log(paragraf);

body.append(paragraf);