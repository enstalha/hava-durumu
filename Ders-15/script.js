// ! IF-ELSE ÖRNEK
// let kullanıcıAdı = "7Eylül";
// let sifre = "1234";

// let kAdi = prompt("Kullanıcı adı :");
// let kSifre = prompt("Şifre");

// if (kullanıcıAdı == kAdi){
//     if (sifre == kSifre){
//         alert("Giriş başarılı!");
//     } else {
//         alert("Yanlış şifre!");
//     }
// } else {
//     alert("Yanlış kullanıcı adı!");
// }


// ! Örnek
// let sifre = prompt("Şifre giriniz :");

// if (sifre.trim().length !== 0){
//     if (sifre.length >= 8){
    
//     } else {
//         alert("Şifreniz minimum 8 karakterden oluşmalı!");
//     }
    
//     if (!sifre.includes("!") && !sifre.includes("-") && !sifre.includes("?")) {
//          console.log("şifreniz özel karakter bulundurmalı!"); 
//     } else {
//         alert("Şifreniz başarıyla oluşturuldu!")
//     }
// } else {
//     alert("Şifre boş bırakılamaz!")
// }


// ! örnek
// let secenekler = ["Sefiller", "Savaş ve Barış", "Suç ve Ceza", "Ölü Canlar"];

// let secilen = Math.floor(Math.random()*secenekler.length);
// console.log(secilen);

// console.log(secenekler[secilen]);

// console.log(`Seçilen kitap : ${secenekler[secilen]}`);


// ! Örnek
// let isim = prompt("İsim giriniz :");
// let meslek = prompt(`
//     1-Yazılım Mühendisi
//     2-Bilgisayar Mühendisliği
//     3-Yönetim Bilişim Sistemleri
//     Lütfen mesleğinizi tuşlayınız...
// `);

// let sifre = "";
// for(let i = 0; i < 4; i++){
//     sifre += Math.floor(Math.random()*10)
// }

// console.log(`Hoşgendin ${isim.toLocaleUpperCase()}`)
// if (meslek == 1){
//     console.log("Seminer salonu 1. katta.");
//     console.log(`Seminere giriş şifren : ${sifre}`)
// } else if (meslek == 2) {
//     console.log("Seminer salonu 2. katta.");
//     console.log(`Seminere giriş şifren : ${sifre}`)
// } else if (meslek == 3) {
//     console.log("Seminer salonu 3. katta.");
//     console.log(`Seminere giriş şifren : ${sifre}`)
// } else{
//     console.log("Yanlış tuşladınız!");
// }



// ! örnek - Benzinlik Uygulaması

// let benzin = 44.17;
// let dizel= 43.78;
// let lpg = 21.07;

// let islem = prompt(`
// 1-Benzin
// 2-Dizel
// 3-LPG
// Almak istediğiniz yakıt türünü seçiniz :
// `);

// if ( islem == 1 || islem == 2 || islem == 3) {
//     let yakitMiktari = Number(prompt("Almak istediğiniz yakıt miktarını giriniz :"));
//     let bakiye = Number(prompt("Bakiyenizi giriniz :"));

//     if (islem == 1){
//         let odenecekTutar = yakitMiktari*benzin;
//         let kalanBakiye  = bakiye - odenecekTutar;

//         if (bakiye >= odenecekTutar) {
//             alert(`
//             Yakıt alma işlemi başarılı!
//             Yakıt litresi:${yakitMiktari.toFixed(2)} Litre,
//             Ödenecek tutar : ${odenecekTutar.toFixed(2)}€,
//             Kalan Bakiye : ${kalanBakiye.toFixed(2)}€,
//             İlave : ${(kalanBakiye / benzin).toFixed(2)} litre daha benzin alabilirsiniz.
//                 `);
//         }else {
//             alert("Yetersiz bakiye!")
//         }
//     } else if (islem == 2) {
//         let odenecekTutar = yakitMiktari*dizel;
//         let kalanBakiye  = bakiye - odenecekTutar;

//         if (bakiye >= odenecekTutar) {
//             alert(`
//             Yakıt alma işlemi başarılı!
//             Yakıt litresi:${yakitMiktari.toFixed(2)} Litre,
//             Ödenecek tutar : ${odenecekTutar.toFixed(2)}€,
//             Kalan Bakiye : ${kalanBakiye.toFixed(2)}€,
//             İlave : ${(kalanBakiye / dizel).toFixed(2)} litre daha dizel alabilirsiniz.
//                 `);
//         }else {
//             alert("Yetersiz bakiye!")
//         }
//     } else if (islem == 3) {
//         let odenecekTutar = yakitMiktari*lpg;
//         let kalanBakiye  = bakiye - odenecekTutar;

//         if (bakiye >= odenecekTutar) {
//             alert(`
//             Yakıt alma işlemi başarılı!
//             Yakıt litresi:${yakitMiktari.toFixed(2)} Litre,
//             Ödenecek tutar : ${odenecekTutar.toFixed(2)}€,
//             Kalan Bakiye : ${kalanBakiye.toFixed(2)}€,
//             İlave : ${(kalanBakiye / lpg).toFixed(2)} litre daha lpg alabilirsiniz.
//                 `);
//         }else {
//             alert("Yetersiz bakiye!")
//         }
//     }
// } else {
//     alert("Geçerli bir yakıt türü giriniz!");
// }



// ! Örnek
// ! Kullanıcıdan vize1, vize2, final notlarını isteyiniz. vize1 ve vize2 ortalamayı %20 etkilesin. Final sınavı ortalamayı %60 etkilesin. Eğerki öğrencinin not ortalaması 50 ve üzerindeyse geçti, 40 ile 50 arasındaysa bütlere kaldı, 40'ten küçükse yaz okuluna kaldın şeklinde çıktı veren programı oluşturun.

// let vize1 = Number(prompt("1. Vize sınavı notunuzu giriniz :"));
// let vize2 = Number(prompt("2. Vize sınavı notunuzu giriniz :"));
// let final = Number(prompt("Final sınavı notunuzu giriniz :"));

// let ortalama = (vize1*20/100) + (vize2*20/100) + (final*60/100);
// console.log(ortalama)

// if (ortalama >= 50){
//     alert(`Tebrikler! Not ortalaman ${ortalama}. Sınıfı geçtiniz.`);
// } else if (ortalama > 40 && ortalama < 50) {
//     alert(`Tebrikler! Not ortalaman ${ortalama}. Bütlere kaldın!`);
// } else if (ortalama < 40) {
//     alert("Yaz okuluna kaldın!");
// }



// ! Döngüler

// ! For döngüsü kullanımı
// for(let i = 0; i < 10; i++) {
//    if((i % 2) == 0) {
//     console.log(i);
//    }else {
//     console.log(".")
//    }
// }

// ! Örnek
// const sayilar = [11,22,33,44,55,66,77,88,99,100,111,222,333,444,555,666,777];
// let ciftSayiler = [];
// let tekSayilar = [];

// for(let i = 0; i < sayilar.length; i++) {
//     if ((sayilar[i] % 2) == 0) {
//         ciftSayiler.push(sayilar[i]);
//     } else {
//         tekSayilar.push(sayilar[i]);
//     }
// }

// for(let i = 0; i < ciftSayiler.length; i++){
//     if (ciftSayiler[i] >= 100){
//         console.log(ciftSayiler[i])
//     }
// }


// ! örnek

// let sayilar = [];
// for(let i = 1; i < 6; i++){
//     let sayi = Number(prompt(`${i}. Sayıyı giriniz : `));
//     sayilar.push(sayi);
// }

// let toplam = 0;

// for(let i = 0; i < sayilar.length; i++){
//     toplam = toplam + sayilar[i];
// }

// console.log(toplam);


// ! Örnek
let ürünler = ["Iphone 14", "Iphone 13", "Iphone 12", "Iphone 15", "Samsung s22", "Samsung s23", "Samsung s24"];

let Iphone = 0;
let Samsung = 0;

for(let i = 0; i < ürünler.length; i++){
    if(ürünler[i].includes("Iphone")){
        Iphone = Iphone + 1;
    }
    if(ürünler[i].includes("Samsung")){
        Samsung = Samsung + 1;
    }
}

console.log(`Toplam : ${Samsung} adet Samsung var.`);
console.log(`Toplam : ${Iphone} adet Iphone var.`);
