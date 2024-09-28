// ! For döngüsü devam;
// ? Örnek
// const ulkeler = ["Türkiye", "Almanya", "Japonya", "Güney Kore", "Güney Afrika", "Çad"];

// const avrupa = [];
// const asya = [];
// const afrika = [];

// for(let i = 0; i < ulkeler.length; i++){
//     if(ulkeler[i] == "Türkiye" || ulkeler[i] == "Almanya"){
//         avrupa.push(ulkeler[i]);        
//     }else if(ulkeler[i] == "Japonya" || ulkeler[i] == "Güney Kore"){
//         asya.push(ulkeler[i]);        
//     }else{
//         afrika.push(ulkeler[i]);
//     }
// }

// console.log(avrupa);
// console.log(asya);
// console.log(afrika);


// ? Örnek
// const ulkeler = ["Türkiye", "Almanya", "Japonya", "Güney Kore", "Güney Afrika", "Çad"];
// let ulkeIsim = prompt("Ülke ismi giriniz :").split(","); 

// const avrupa = [];
// const asya = [];
// const afrika = [];

// for(let i = 0; i < ulkeIsim.length; i++){
//     if(ulkeler.includes(ulkeIsim[i])){
//         if(ulkeIsim[i] == "Türkiye" || ulkeIsim[i] == "Almanya"){
//             avrupa.push(ulkeIsim[i]);    
//         }else if(ulkeIsim[i] == "Japonya" || ulkeIsim[i] == "Güney Kore"){
//             asya.push(ulkeIsim[i]);        
//         }else{
//             afrika.push(ulkeIsim[i]);
//         }  
//     }
// }

// console.log(`Avrpa : ${avrupa}`);
// console.log(`Asya : ${asya}`);
// console.log(`Afrika : ${afrika}`);



// ? Örnek
// let isimler = ["Furkan", "Talha", "Ahmet", "Selin", "Süleyman", "Sıla", "Ayşe"];
// let kullaniciIsim = prompt("Bir isim giriniz :").split(" ");
// let buyukIsim = [];
// let kucukIsim = [];

// for(let i = 0; i < kullaniciIsim.length; i++){
//     if(isimler.includes(kullaniciIsim[i])){
//         if(kullaniciIsim[i].length >= 5){
//             buyukIsim.push(kullaniciIsim[i].toLocaleUpperCase("tr-TR"));
//         }else{
//             kucukIsim.push(kullaniciIsim[i].toLocaleLowerCase("tr-TR"));
//         }
//     }
// }
// console.log(`Küçük İsimler : ${kucukIsim}`);
// console.log(`Büyük İsimler : ${buyukIsim}`);



// ! While Döngüsü
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }


// ? Örnek;
// let i = 0;
// while(i  < 100){
//     if((i % 2) == 0){
//         console.log(i);
//     }else{
//         console.log(".");
//     }
//     i++;
// }



// ? Örnek;
// const kisiler = [
//     {
//         isim : "Furkan",
//         cinsiyet : "Erkek",
//     },
//     {
//         isim : "Talha",
//         cinsiyet : "Erkek",
//     },
//     {
//         isim : "Özlem",
//         cinsiyet : "Kadın",
//     },
//     {
//         isim : "Ayşe",
//         cinsiyet : "Kadın",
//     }
// ]

// let i = 0;
// while(i < kisiler.length){
//     if(kisiler[i].cinsiyet == "Kadın"){
//         console.log(kisiler[i].isim.toLocaleUpperCase("tr-TR"));
//     }
//     i++;
// }



// ? Örnek
// let toplam = 0;
// let i = 0;

// while(i < 10){
//     toplam = toplam + i;
//     i++;
// }
// console.log(toplam);



// ? Örnek
// toplam = 0;

// let i = 0;
// while(i < 5){
//     let sayi = Number(prompt("Bir sayı giriniz :"));
//     toplam = toplam + sayi;
//     i++;
// }
// console.log(toplam);



// ! Break ve Contiune Kavramları
// let i = 0;
// while(i < 10){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }


// let i = 0;
// while(i < 10){
//     i++;
//     if(i == 3){
//         console.log("Üç değeri atlandı!");
//         continue
//     }
//     console.log(i);
// }


// ? Örnek
// let toplam = 0;
// let i  = 0;
// while(i < Infinity){
//     let sayi = prompt("Bir sayı giriniz :");
//     if(sayi == ""){
//         break
//     }else{
//         toplam = toplam + Number(sayi);
//     }
//     i++;
// }
// console.log(toplam);



// ! FONKSİYONLAR
// ? Klasik Fonksiyon kullanımı
// function selamla(){
//     console.log("Hi!")
// }

// selamla();


// ! Örnek
// function topla(){
//     let toplam = 10 + 20;
//     console.log(toplam);
// }

// topla();


// ! Parametreli klasik tip fonksiyon
// let sayi1 = Number(prompt("Sayı 1 değerini giriniz: "))
// let sayi2 = Number(prompt("Sayı 2 değerini giriniz: "))

// function topla(sayi1, sayi2){
//     let toplam = sayi1 + sayi2;
//     console.log(toplam);
// }

// topla(sayi1,sayi2);



// ! Arrow Function Kullanımı
// const topla = () => {
//     let toplam = 5 + 2;
//     console.log(toplam);
// }
// topla();


// ! Parametreli Arrow Function Kullanımı
// const topla = (sayi1,sayi2) => {
//     let toplam = sayi1 + sayi2;
//     console.log(toplam)
// }

// topla(32,12);


// ? Örnek
// let isim = [];

// for(let i = 0; i < 3; i++){
//     kullaniciIsim = prompt("Bir isim giriniz :");
//     isim.push(kullaniciIsim);
// }

// const isimYaz = (isim1, isim2, isim3) => {
//     console.log(isim1);
//     console.log(isim2);
//     console.log(isim3);
// }

// isimYaz(isim[0],isim[1],isim[2]);