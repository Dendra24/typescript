// soal nomor1

// write a code to find area of rectangle with output 15
let _lenght: number = 5;
let _width: number = 3;
const _area = _lenght * _width;
console.log(_area);

// soal nomor 2

// write a code to find perimeter of rectangle with output 16
// seharusnya melajutkan soal nomor 1 
let _perimeter = 2 * (_lenght + _width);
console.log(_perimeter)

// soal nomor 3
// Write a code to find diameter, circumference and area of a circle
// kurang paham


// soal nomor 4 
// logika berfikir: mencari sudut segitiga
// dimana rumus mencari sudut segitiga: menjumlahkan kedua sudut, contoh soal variable a = 80 variable b = 65
// kedua sudut di jumlahkan a + b : 80 + 65 = 145, lalu untuk mencari output sudut = 35 maka: 180 - (a+b) = 35

let a = 80;
let b = 65;
let c = 180
const _Output = c - (a+b);
console.log(_Output)


// soal nomor 5
//Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days

function _dataTahunBulanHari (numberOfDays){
 let _tahun = Math.floor(numberOfDays / 365);
 let _bulan = Math.floor(numberOfDays % 365 / 30);
 let _hari = Math.floor(numberOfDays % 365 % 365);

 return [_tahun+"Tahun", _bulan+"Bulan", _hari+"Hari"]
}

const _soal1 = _dataTahunBulanHari(400);
console.log(_soal1)

const _soal2 = _dataTahunBulanHari(366);
console.log(_soal2)

// soal nomer 6 masih belum paham

