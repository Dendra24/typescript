let _string: string = "ini adalah sebuah string";
console.log(_string);
// variable string

//**SRTING BUILD IN METHOD**
// slice untuk mengambil beberapa huruf dari sebuah kata
let _tempString = _string.slice(5, 8);
console.log(_tempString);

// toUpperCase untuk membuat huruf kapital
console.log(_string.toUpperCase());

//trim untuk menghapus spasi di depan dan belakang
console.log(_string.trim());

// replace untuk menggantikan huruf pada string
console.log(_string.replace("a", "*"));
//yang di atas hanya merubah 1 huruf "a" yang pertama di temukan sesuai dengan penjelasan pada method

console.log(_string.replace(/a/g, "*"));
// yang di atas adalah contoh untuk merubah semua huruf "a" di semua kata

console.log(_string.replace(/[a, b]/g, "*"));
// yang diatas contoh untuk mengganti beberapa kata


// **TAMPLATE LITERALS**
console.log(`variable ${_string}`);
// penambahan variable/eksprestion

// variable number
let _number: number = 5.678;
console.log(_number);

//**NUMBER BUILD IN METHOD**
console.log(_number.toString());
console.log(_number.toExponential(2));
console.log(_number.toFixed());

//**GLOBAL BUILD METHOD**
let _rubahAngkaToHuruf: string = "7";
console.log(Number (_rubahAngkaToHuruf));

let _boolean: boolean = true;
console.log(_boolean);
// variable boolean

// DATE DATA TYPE
let _now: Date = new Date;
console.log(_now);
console.log(_now.toLocaleDateString("in-id"))

let _dateString: Date = new Date;
console.log(_dateString);
console.log(_dateString.toLocaleDateString())

// operand
let x: number = 5;
let y: number = 10;

// binary,  memiliki lebih dari 1 operand
// dibawah adalah contoh operand x + y
const _addition = x + y; 
console.log(_addition)

// unary, hanya memiliki 1 operand
// di bawah operand minus dengan unary
const _minus = - x;
console.log(_minus);

// modfy in place
console.log(x);
x += x;
console.log(x);
console.log(y);
y -= y;
console.log(y);
x *= x;
console.log(x);
x /= x;
console.log(x);
console.log(_addition);

// increament & decreament
let _counter: number = 1;
_counter++; // ini di maksud variable _counter yang berisi angka di tambahkan 1 atau _counter = 1 + 1
console.log(_counter);
_counter--; // ini di maksud variable _counter yang berisi angka di dikurang 1 atau _counter = 1 - 1
console.log(_counter); 
// angka 1 ini muncu karena variable _counter sebelumnya sudah di tambah 1

let _counter2: number = 3;
_counter2++;
console.log(_counter2);
_counter2--;
console.log(_counter2);

// conparison operators adalah untuk pengecekan 2 buah value / variable
let _buah1 = "jeruk";
let _buah2 = "apel";
console.log(_buah1 == _buah2);
// di baca apakah variable _buah1 sama dengan _buah2? jawabannya false
let _angka1 = 5;
let _angka2 = 10;
let _angka3 = 10;
console.log(_angka1 == _angka2);
// untuk comparison == hanya mengecek value data bukan tipe datanya
// untuk comparison === akan mengecek value dan tipe datanya

// comparison !=
console.log(_buah1 != _buah2);

// comparison > (lebih besar)
console.log(_angka1 > _angka2)

// comparison >= ( lebih besar atau sama )
console.log(_angka2 >= _angka3)

// comparison < ( lebih kecil )
// comparison <= (lebih kecil atau sama)
