// console.log("Merhaba");

// ! Değişken Tanımlama Yöntemleri
// var sirket = "KodKoloni Yazilim Akademi";
// sirket = "Ilaslan Yazilim AKademi";
// console.log(sirket);

// console.log(isim);
// let isim = "Yavuz";
// isim = "Hakan";

// const sirket = "KodKoloni yazilim akademisi";
// sirket = "Ilaslan Yazilim AKademi";
// console.log(sirket);


// ! Değişken Tanımlama Kuralları:
// let sirket adi = "KOdkolni"; // Hatali Kullanim
// let sirket_adi = "KodKoloni";
// let sirketAdi = "KodKoloni"; // CamelCase Yöntemi

// let 1sirket = "KodKoloni" // Hatali Kullanim
// let sirket1 = "KodKoloni"


// ! Veri Turleri

// * String Veri Turu
// let isim = "Furkan";
// let isim2 = 'Talha';

// let isim3 = "Furkan's House";
// let isim2 = Number(isim);
// console.log(isim2);
// console.log(typeof(isim2));
// console.log(isim3);
// console.log(typeof(isim));


// * Numbur Veri Turu
// let sayi = 17;
// console.log(sayi);
// console.log(sayi.toString());
// console.log(typeof(sayi));


// * Boolean Veri Turu
// console.log(5 > 4);
// console.log(5 < 4);


// Not:
// console.log(3 == "3");
// console.log(3 === "3");


// * Object Veri Turu
// let kullanici = {
//     isim : "Furkan",
//     soyisim : "Ilaslan",
//     yas : 27,
//     dogumTarihi : {
//         gun : 20,
//         ay : "Mart",
//         yil : 1997
//     },
//     meselek : {
//         meslek1 : "Muhendis",
//         meslek : "Egitmen"
//     }
// }

// console.log(kullanici.dogumTarihi.gun, kullanici.dogumTarihi.ay, kullanici.dogumTarihi.yil);
// console.log(kullanici);
// console.log(kullanici.isim, kullanici.soyisim);
// console.log(typeof(kullanici));


// * Array Veri Turu
// let markalar = ["Mercedes", 'Audi', 'BMW', "Fiat", "Toyota", "Ford", "Renault", "Peugout"];
// console.log(markalar);
// console.log(markalar.length);
// console.log(markalar[3]);

// Son elemani yazdirmak istiyorum.
// console.log(markalar[4]);
// console.log(markalar[markalar.length-1]);

// let araclar = [
//     {
//         marka : "Toyota",
//         model : "Corolla",
//         yil : 2018,
//         motor : 1.6,
//     },
//     {
//         marka : "Ford",
//         model : "Focus",
//         yil : 2020,
//         motor : 1.3,
//     },
//     {
//         marka : "Fiat",
//         model : "Egea",
//         yil : 2022,
//         motor : 1.3,
//     },
//     {
//         marka : "Volkswagen",
//         model : "GOlf",
//         yil : 2019,
//         motor : 1.4,
//     },
//     [1,2,3,4,5,6,7,8,9,10]
// ]

// console.log(araclar[0].marka);
// console.log(araclar[1].marka);
// console.log(araclar[2].marka);
// console.log(araclar[3].marka);
// console.log(araclar[4][4]);


// ! Veri Yazdirma Yontemleri
// let isim = "Furkan";
// console.log(isim);

// let soyisim = "Ilaslan";
// alert(soyisim);

// let yas = 27;
// document.write(yas);

// console.error("Hata mesaji Yazdir");

// let onay = confirm("Uyeligi Silmek Istedigine Emin Misin?");

// console.log(onay);


// ! Template Literals Yontemi
// let isim = 'Hakan';
// let soyisim = "Akyuz";
// let meslek = 'Muhendis';

// console.log(isim, soyisim, meslek);
// console.log('Benim adim ' + isim +
// ' Soyadim ' + soyisim +
// ' Benim Meslegim ' + meslek);

// Template Litarels farki
// console.log(`Benim Adim ${isim} 
// soyadim ${soyisim} 
// Meslegim ${meslek}`)

 
// ! Aritmetik Operatorler
// let sayi1 = 3;
// let sayi2 = 5;

// console.log(Number(sayi1) + Number(sayi1));
// console.log(sayi1 - sayi2);
// console.log(sayi1 * sayi2);
// console.log(sayi2 / sayi1);
// console.log(sayi1 ** sayi2);
// console.log(sayi1 % sayi2);
// console.log(sayi2 % sayi1);

// sayi1 = sayi+1
// console.log(sayi1)

// sayi1++;
// console.log(sayi1)

// sayi2--;
// console.log(sayi2)


// ! Prompt Ile Kullanicidan Veri Alma Yontemleri
// let isim = prompt('Bir isim giriniz:', 'Exmple: Talha');
// console.log(isim);


// let yas = Number(prompt('Yasinizi giriniz :'));
// console.log(yas + 10);


// ! Uygulama 1
// let sayi1 = Number(prompt("1. Sayiyi Giriniz :"));
// console.log(sayi1);
// let sayi2 = Number(prompt("2. Sayiyi Giriniz :"));
// console.log(sayi2);
// let sayi3 = Number(prompt("3. Sayiyi Giriniz :"));
// console.log(sayi3);

// let toplam = sayi1 + sayi2 + sayi3;
// let ortalama = toplam / 3;

// alert(`1. Sayiniz : ${sayi1} 2. Sayiniz : ${sayi2} 3. Sayiniz : ${sayi3} Ortalamasi : ${ortalama}`);
// console.log(toplam / 3);


// ! Uygulama 2
// let x = Number(prompt("Sayi Giriniz :"));
// let y = Number(prompt("Sayi Giriniz :"));
// let z = Number(prompt("Sayi Giriniz :"));

// let carpim = x * y;

// let kalan = carpim % 2;

// console.log(kalan + z);