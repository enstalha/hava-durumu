// ! Veri Türü  Metodları
// ! String Veri Türü Metodları

// let isim = 'suleyman';
// console.log(isim.length);
// console.log(isim[0]);
// console.log(isim[isim.length-1]);

// console.log(isim.toUpperCase());
// console.log(isim.toLowerCase());

// console.log(isim.slice(5));

// ! Sadece bas harfi buyuk yazmak icin;
// console.log(isim[0].toUpperCase() + isim.slice(1));
// console.log(isim.slice(0,2).toUpperCase() + isim.slice(2));

// console.log(isim.replace('suleyman', 'Furkan'));
// console.log(isim.replaceAll('suleyman', 'furkan'));

// console.log(isim.split(" "));

// ! Veri istedigim ifadeyi iceriyor mu?
// console.log(isim.toLowerCase().includes('furkan'));

// ! Trim (Bosluk Kaldirma)
// console.log(isim.trim());
// console.log(isim.trimStart());
// console.log(isim.trimEnd());


// ! Date Objesi ile calismak
// const date = new Date();
// console.log(date);

// let year = date.getFullYear();
// console.log(year);

// ! Sayi olarak geldi duzelt
// let month = date.getMonth();
// console.log(month);

// let aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

// let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

// ! Haftanin gununu sayi olarak getirdi. Duzelt!
// let day = date.getDay();
// console.log(day);

// let day2 = date.getDate();
// console.log(day2);

// let hour = date.getHours();
// console.log(hour);

// let minute = date.getMinutes();
// console.log(minute);

// let second = date.getSeconds();
// console.log(second);

// 4 Eylul Carsamba 10:38
// console.log(`${day2} ${aylar[month]} ${gunler[day]}, ${hour}:${minute}:${second}`);


//! Number Veri Turu Mothodlari
// let sayi = 3.473455;

// console.log(parseInt(sayi));
// console.log(parseFloat(sayi));

// console.log(sayi.toFixed(2)); // * Noktadab Sonra
// console.log(sayi.toPrecision(2)); // * Butun Sayidan


// ! ornek
// let yakit = prompt("Ne kadarlık yakıt almak istesiniz?");
// let fiyat = 44.28;
// let miktar = Number(yakit) / fiyat;
// alert(`${miktar.toFixed(2)} litre benzin alabilirsiniz.`);


// ! Math Kullanimi
// let sayi = 9.7546;
// console.log(Math.round(sayi));
// console.log(Math.floor(sayi));
// console.log(Math.ceil(sayi));
// console.log(Math.abs(sayi));
// console.log(Math.sqrt(sayi));
// console.log((Math.random(sayi)*10).toPrecision(1));


// ! Array Veri Türü Methodları
// let socialMedia = ['Youtube', 'Instagram', 'Twitter', 'Facebook'];
// console.log(socialMedia.split(" "))

// let meyveler = ['Elma', 'Armut', 'Kiraz', 'Seftali'];
// meyveler[0] = "Karpuz";
// console.log(meyveler);

// let meyveler = ['Elma', 'Armut', 'Kiraz', 'Seftali'];
// let sebzeler = ["Salatalik", 'Biber', 'Havuc', 'Domates'];

// let bitkiler = meyveler.concat(sebzeler);
// console.log(bitkiler);

// ! Ekstra Bilgi;
// let bitkiler2 = [...meyveler, ...sebzeler];
// console.log(bitkiler2);


// ! Siralama Fonksiyonu
// let sayilar = [7,1,4,8,6,3];
// sayilar.sort().reverse();
// console.log(sayilar);


// ! Array veri turune eleman eklemek ve cikarmak
// let markalar = ['Mercedes', 'Audi', 'BMW'];
// markalar.push("Skoda");
// console.log(markalar);

// markalar.unshift('Toyota');
// console.log(markalar);

// markalar.pop();
// console.log(markalar);

// markalar.shift();
// console.log(markalar);

// ! Istedigin Elemani Silmek Icin
// markalar.splice(1, 1, "Porsche");
// console.log(markalar);

// markalar.splice(markalar.find(Element => Element == "BMW"), 1, "Porsche");
// console.log(markalar);


// ! If-Else
// * Ornek
// let yas = Number(prompt("Yaşınızı giriniz :"));

// if (yas >= 18){
//     console.log(`Yaşınız ${yas}. Ehliyet alabilirsiniz.`);
// } else if (yas < 0){
//     alert('Geçerli bir yaş değeri giriniz!')
// } else {
//     console.log(`Yaşınız ${yas}. Ehliyet alamazsınız.`);
// }

// ! Not:
// ! ==, ===, >, <, >=, <=, !=, &&, ||


// * Örnek
// let yas = Number(prompt("Yaşınızı giriniz :"));

// if (yas >= 10 && yas <= 50){
//     alert("Yaşınız 10 ile 50 arasında!");
// } else if (yas > 50){
//     alert("Yaşınız 50'den büyük!");
// } else {
//     alert("Yaşınız 10'dan küçük!");
// }


// * Örnek
// let sayi = Number(prompt("Bir sayı giriniz  :"));
// let kalan = sayi % 2;

// if (kalan == 0){
//     alert("Sayı çift!");
// } else {
//     alert("Sayı tek!");
// }


// * Örnek
// let sayi = Number(prompt("Bir sayı giriniz  :"));
// kalan3 = sayi % 3;
// kalan5 = sayi % 5;

// if (kalan3 == 0 && kalan5 == 0){
//     alert("Sayı 15'in bir katı!");
// } else if (kalan3 == 0 && kalan5 != 0){
//     alert("Sayı 3'ün bir katı ama 5'in katı değil!");
// } else if (kalan5 == 0 && kalan3 != 0){
//     alert("Sayı 5'ün bir katı ama 3'in katı değil!");
// } else {
//     alert("Sayı 3 veya 5'in katı değil!");
// }


// * Örnek
// let havaYagmurluMu = true;

// if (havaYagmurluMu){
//     console.log("Şemsiye al");
// } else {
//     console.log("Çık gez");
// }


// * Örnek
// let havaDurumu = prompt("Hava ne durumda?", "Yağmurlu/Rüzgarlı/Güneşli").toLocaleLowerCase("tr-TR");

// console.log(havaDurumu);

// if (havaDurumu == 'yağmurlu'){
//     console.log("Şemsiye al!");
// } else if (havaDurumu == "rüzgarlı"){
//     console.log("Sıkı giyin!");
// } else if (havaDurumu == "güneşli"){
//     console.log("Sahile git!");
// } else {
//     console.log("Lütfen örnekte belirtilen durumlardan birini giriniz!");
// }

