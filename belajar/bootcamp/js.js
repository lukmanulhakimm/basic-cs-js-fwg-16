    // function printSegitiga(num) {
    //   for (let i = 5; i >= 1; i--) {
    //     let row = " ";
    //     for (let j = 1; j <= i; j++) {
    //       row += i + " ";
    //     }
    //     console.log(row);
    //   }
    // }

// // printSegitiga(5);

// // var s = " ";
// // for (var i = 5; i >= 1; i--) {
// //   for (var j = 1; j <= i; j++) {
// //     s += "*";
// //   }
// //   s += "\n";
// // }
// // console.log(s);
// if (true) {
//   let angkaDua = 20;
//   console.log(angkaDua); // dipanggil di dalam pengkondisian
// }
// console.log(angkaDua); // error di luar block scopenya

// // 3. const digunakan untuk mendeklarasikan variabel yang nilainya tidak dapat diubah setelah diberikan nilai awal. dan termasuk block scope
// if (true) {
//   const nama = "lukman";
//   console.log(nama);
// }
// const angkaTiga = 13;
// angkaTiga = 23;
// console.log(angkaTiga); //error tidak dapat di panggil karena nilainya tidak dapat di ganti

// let s = "";
// function printSegitiga(num) {
//   for (let i = 2; i >= 1; i--) {
//     let s = "";
//     console.log(s);
//     for (let j = 1; j <= i; j++) {
//       s += i + " ";
//     }
//     console.log(s);
//   }
// }
// printSegitiga(5);

// let s = "TAHER ";
// s = s + 2;
// // console.log(s); //taher 2
// s = "TAHER ";
// s = s + " aldi";
// // console.log(s); //taher 2
// // s = s + 2 + " yoi ";
// // 2 yoi 2 yoi
// s = s + " yoi";

// s = "";

// s = "aldi taher";
// s += "calon dpr";
// s = "";
// s += "sukses";

// // console.log(s);

// Buatlah program untuk menentukan ongkos kirim menggunakan fungsi, dari fungsi yang dibuat akan menerima parameter jarak, dan akan mengembalikan outputnya yaitu total ongkos kirim, dengan ketentuan jika jarak kurang dari  2km maka ongkos kirim 5000 jika lebih dari 2km tiap km berikutnya akan dikenakan biaya 3000

// function cekOngkir(jarak) {
//   let ongkos = 0;
//   if (jarak <= 2) {
//     ongkos = 5000;
//   } else if (jarak > 2) {
//     ongkos = 5000;
//     let jaraktambah = jarak - 2;
//     ongkos = ongkos + jaraktambah * 3000;
//   }
//   return ongkos;
// }
//kukabataku
//kurung kali bagi tambah kurang
// function cekOngkir(jarak) {
//   let ongkos = 5000;
//   if (jarak > 2) {
//     ongkos = ongkos + (jarak - 2) * 3000;
//   }
//   return ongkos;
// }
// console.log(cekOngkir(4));
// 14000;
// console.log(cekOngkir(2));
// 5000;

// Di sebuah sekolah, terdapat sistem penilaian ujian dengan ketentuan sebagai berikut:

// Nilai di atas atau sama dengan 90 adalah A
// Nilai di atas atau sama dengan 80 adalah B
// Nilai di atas atau sama dengan 70 adalah C
// Nilai di atas atau sama dengan 60 adalah D
// Nilai di bawah 60 adalah E (Tidak Lulus)

// function nilaiUjian(angka) {
//   nilai = "";
//   if (angka == 90) {
//     nilai = "A";
//   } else if (angka == 80) {
//     nilai = "B";
//   } else if (angka == 70) {
//     nilai = "C";
//   } else if (angka == 60) {
//     nilai = "D";
//   } else if (angka < 60) {
//     nilai = "E (tidak lulus)";
//   }
//   return nilai;
// }
// console.log(nilaiUjian(90));
// console.log(nilaiUjian(60));
// console.log(nilaiUjian(40));
// console.log(nilaiUjian(80));

// function buku(ari, budi, sindi) {
//   pemenang = "";
//   if (ari > budi && ari > sindi) {
//     pemenang = "arie pemenangnya";
//   } else if (budi > ari && budi > sindi) {
//     pemenang = "budi pemenangnya";
//   } else if (sindi > ari && sindi > budi) {
//     pemenang = "sindi pemenangnya";
//   } else if (sindi == ari && budi == sindi) {
//     pemenang = "tidak ada pemenang";
//   }
//   return pemenang;
// }
// console.log(buku(12, 12, 12));
// console.log(buku(12, 10, 2));

// function contoh(pertama, kedua) {
//   pemenang = "";
//   if (pertama > kedua) {
//     pemenang = "angka Pertama lebih besar dari angka kedua";
//   } else if (pertama < kedua) {
//     pemenang = "angka kedua lebih besar dari angka kedua";
//   } else if (pertama == kedua) {
//     pemenang = "kedua angka tersebut sama";
//   }
//   return pemenang;
// }

// console.log(contoh(12, 12));
// console.log(contoh(12, 2));
// console.log(contoh(12, 22));

// Sebuah program kesehatan membagi kategori berat badan berdasarkan Indeks Massa Tubuh (IMT) sebagai berikut:
// Kurang dari 18.5: Kurus
// 18.5 - 24.9: Normal
// 25.0 - 29.9: Gemuk
// Lebih dari 30.0: Obesitas
// Buatlah sebuah program yang meminta pengguna memasukkan tinggi (dalam centimeter) dan berat badan (dalam kilogram). Program harus menghitung IMT dan menampilkan kategori berat badan pengguna berdasarkan ketentuan di atas.
// tinggi badan * tinggi badan /100 merubah cm ke m
// tinggi badan * tinggi badan / berat badan
// function caraImt(t, b) {
//   let tinggi = t / 100; // merubah cm ke meter
//   let imt = b / (tinggi * tinggi);
//   return imt.toFixed(2); // tofixed() adalah memaksa angka menjadi decimal
// }
// // var hasil = caraImt(175, 65); 4,7
// function katagori(imt) {
//   let total = "";
//   if (imt < 18.5) {
//     total = "kurus";
//   } else if (imt > 18.5 && imt < 24.9) {
//     total = "normal";
//   } else if (imt > 25.0 && imt < 29.9) {
//     total = "gemuk";
//   } else if (imt > 30.0) {
//     total = "obesitas";
//   }
//   return total;
// }
// // IMT sudah didapatkan
// let masukanT = prompt("masukan tinggi badan (dalam cm)");
// let masukanB = prompt("masukan berat badan (dlm kg)");
// let hasilImt = caraImt(masukanT, masukanB);
// // katagori sudah didapatkan
// let hasilAkhir = katagori(hasilImt); //mengambil data dari function caraImt.
// confirm("IMT anda adalah " + hasilImt);
// confirm("berat badan anda adalah " + hasilAkhir);

// function greeting(nama) {
//   return `halo ${nama}`;
// }
// console.log(greeting("lukman"));

// function isPrime(angka) {
//   if (angka * 1 && angka * angka) {
//     return "prima";
//   } else {
//     return "bukan prima";
//   }
// }

// let hasil = isPrime(7);
// let hasil2 = isPrime(10);
// console.log(hasil);
// console.log(hasil2);



// Jika kamu memiliki 3 apel dan kamu memberikan 2 apel kepada temanmu, berapa banyak apel yang kamu miliki sekarang?
// let apel = 3;
// let hasil= apel - 2;
// console.log(hasil);

// Ada tiga sakelar di dalam sebuah ruangan yang masing-masing terhubung dengan tiga lampu di luar ruangan tersebut. Kamu berada di dalam ruangan tersebut. Kamu hanya bisa masuk ke ruangan sekali. Bagaimana cara kamu mengetahui sakelar yang menghidupkan lampu mana?

// membuat penjumlahan dari function
// function Penjumlahan(angkaSatu,angkaDua) {
//   // return angkaSatu +angkaDua;
//   let hasil='';
//   hasil= angkaDua + angkaSatu;
//   return hasil;

// }
// console.log(Penjumlahan(12,3)); 
// // console.log(Penjumlahan(10,5));











// soal pertemuan satu senin 
// terdapat variabel x dan y masing masing memiliki nilai tertentu. buat algoritma menentukan manakah nilai diantar x dan y yang memiliki nilai terbesar

// terdapat var x buat algoritma untuk menentukan x bilangan ganjil atau genenap
// mulai
// let x= 30;
// let y = 20;
// if(x<y){ 
//     console.log(y +`lebih besar dari `+ x);
// }else{
//     console.log(y+"lebih kecil dari "+ x)
// }

// if(x %2 == 0){
//     console.log(x+" bilangan genap ");
// }else{
//     console.log(x+" bilangan ganjil ");
// }
// cetak nilai x


// for (let i = 0; i <= 5; i++) {
//     let s = "";
//     for (let j = 1; j <= i; j++) {
//       s += i + " ";
//     }

//     console.log(s)
//   }


//   var s = "";
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// split() memecah string 
// reverse() membalikan arayy
// join () mengubah array menjadi string 

// function nama(input) {
//     return input.split('').reverse().join('');
// }
// let namaAwal = "lukman nulhakim";
// const hasil = nama(namaAwal);
// console.log(hasil);


// conoth 1
// let nama= 'lukman'
// let textDiurai =nama.split('') // memasukan ke dalam array
// textDiurai = textDiurai.reverse('').join("") // di balik textnya

// console.log(textDiurai);


// contoh 2
// function reverseString(input) {
//     let reversed = '';
//     for (let i = input.length - 1; i >= 0; i--) {
//         reversed += input[i];
//     }
//     return reversed;
// }

// const originalString = "Hello, World!";
// const reversedString = reverseString(originalString);
// console.log(reversedString);  // Output: "!dlroW ,olleH"

// let input= 'lukman';
// let hasil ="";
// for(let i= input.length-1; i>=0; i--){
//     hasil=hasil+ input[i]; 
// }
// console.log(i);







//  function kampus (){
//     const mhs={
//         nama: "lukman",
//         id: 123321,
//         umur: 25
//     }
//     return mhs;
// }
// // pr
// console.log(kampus.mhs); // undefined
// console.log(kampus());  // isi function {object}

// // pengulangan
// // for(let i=0; i<=10; i=i+1){
// //     console.log(i);
// // }
// // tambahin function
// function pengulangan(input){
//     for(let i=0; i<=input; i=i+1){
//         console.log(i);
//     }   
// }
// pengulangan(10)

// // tambah function dan cetak ke layarnya harus dua console dan alert 
// function pengulangan (input,cetak){
//     for(let i=0; i<=input; i=i+1){
//      cetak(i);
//     }
// }
// pengulangan(10,console.log)



// const obj=[ {
//     nama: "lukman",
//     umur: 25,
//     hobby: "futsal",
//     Nik: 123451212
// },
// {
//     nama: "santi",
//     umur: 25,
//     hobby: "makan",
//     Nik: 123422212
// },
// {
//     nama: "andi",
//     umur: 22,
//     hobby: "makan",
//     Nik: 123422212
// }
// ];
// console.log(obj.length);
//  for(let i=0; i<obj.length; i=i+1){
//     // let hasil=' ';
//     // hasil=hasil+i;
//  }
//  console.log(hasil);

// obj.forEach(m => {console.log(m.umur);})




// console.log("satu");
// setTimeout(function waktu(){console.log("dua")},5000 )
// console.log("tiga");

// function waktu(){
//     console.log('dua');
// }
// console.log('satu');
// console.log(setTimeout(waktu(),5000));
// console.log("tiga");

//  nu bingung   
// function greet(name, callback) {  
//     console.log("Hello, " + name);
//     callback();          // parameternya berubah jadi fucntion 
// }

// function sayGoodbye() {       //function ini gimna kok bisa ngambil konsol goodbye 
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye); // Output: "Hello, Alice" dan kemudian "Goodbye!"



// // contoh arrow function 
// let goodMorning = (nama,waktu) => {
//     return `hello ${nama}, selamat ${waktu}`}
// console.log(goodMorning("lukman","pagi"));

// // contoh implisit return arrow function 
// let goodNight = waktu => `hello selamat ${waktu}`;
// console.log(goodNight('malam'));

// // contoh arrow function tanpa parameter 
// const tampilNama= () => `hello word`;
// console.log(tampilNama());



// // contoh method 
// // contoh  sort()  // digunakan untuk mengurutan elemen dalam array
// const number= [1,2,10,8,5,7,9,3,6]; 
// number.sort()
// console.log(number);
// // contoh reverse()  // digunakan untuk membalik urutan elemn pada array
// const str= ['jeruk','nangka','melon']
// str.reverse()
// console.log(str);
// // contoh push() digunakan untuk menambahkan satu atau lebih ke akhir aeeay
// const text= ['lukman','candra','kahfi']
// text.push('syntia','joni','tria')
// console.log(text);
// // contoh map() digunakan untuk memebuat array baru dengan hasil pemanggilan fungsi yang di berikan pada setiap elemen dalam array yanga ada.
// const numbers= [1,2,3,4,5,6,7]
// const result= numbers.map( angka =>angka+2 ) 
// console.log(result);
// // method forEach()
// const number= [1,2,1,8,5,7,9,3,6]
// let cetak= number.forEach((i)=> {console.log(i);}) // outputnya sama
// const result= number.map((i)=> {console.log(i);}) // outputnya sama
// const output= number.map((e)=> {return e+2})     // output mengmbakikan array baru 
// const outputForEach= number.forEach((e)=> {return e+2})  //undefined
// console.log(cetak); // undefined
// console.log(result); // undefined dalam bentuk array 
// console.log(output);
// console.log(outputForEach);



// 

// callback adalah parameter yang yang isi value nya function  
// function kerjaTugas (mataKuliah, selesai){
//     console.log(`mulai mengerjakan tugas ${mataKuliah}...`);
//     selesai()
// } 
// function sapa(){
//     console.log(`selesai mengerjakan tugas`);
// }
// kerjaTugas('informatika',sapa)

// // closure
// function ucapSalam(waktu){
//     return function (nama){
//         console.log(`hello ,${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }
// let selamatMalam= ucapSalam("malam");
// console.dir(selamatMalam('lukman'))


// callback asyncronous 
// function hallo (nama){
//     console.log(`hallo ${nama}`);
// }

// function cetakPesan(callback){
//     const panggil= prompt('masukan nama:')
//     callback()                          //parameter berubah jadi function
// }

// cetakPesan(hallo)  //  function cetak yang parameternya function hallo 

// cetakPesan((nama) => {console.log(`hello ${nama}`);})  // anonymous function 


// promise
//  object yang merepresentasikan keberhasiln /kegagalan sebuah event yang asyncronous di masa yang akan datang 
// janji (terpenuhi/ingkar)
//  states (fulfilled/rejected/pending) states=>keadaan filfilled=>terpenuhi reject=> ingkari pending=> waktu tunggu 
// callback (resolve/ reject /finaly) resolve=>janjinya terpenuh, reject =>janjinya tidak terpenuhi, finally =>waktu tunggunya selesai 
// akis (then/ catch)  then => terpenuhi janjinya akan menjalankan resolve  catch =>tidak terpenuhi akan menjalankan reject

// contoh promise
// let ditepati=false 
// const janji1= new Promise((resolve,reject)=>{
//     if(ditepati){
//         resolve('janji telah ditepati');
//     }else{
//         reject('ingkar janji....')
//     }
// });
// // console.log(janji1);
// janji1.then(Response=> {console.log(`OK ${Response}`)}).catch(Response =>{console.log(`NOT ok !: ${Response}`);})


// contoh 2
// let ditepati2=false;
// const janji2= new Promise((resolve,reject)=>{
//     if (ditepati2){
//         setTimeout(()=>{ resolve('ditepati setelah nunggu')},3000)
//     }else{
//         reject('tidak ditepati')
//     }
// })

// janji2.then((Response) =>{console.log(`bagus ${Response}`);}).catch((Response)=>{console.log(`tidak Bagus ${Response}`);})


//  tugas tugas


// const showMonth =()=>{
    
// }



// showMonth(null,getMoth)


// const getMoth= (callback)=>{
//     setTimeout(()=>{
//         let error=false;
//         let month= ['januari','februari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember'];
//         if(!error){
//             callback(null,month)
//         }else{
//             callback(new Error('sorry data not found'))
//         }
//     },4000);
// }

// contoh 
// const str =[1,2,3,4,5,6,7]
// const hasil=[]
//  str.forEach((e)=>{hasil.push(e*2)}) 
// console.log(hasil);  //undefined
// // contoh baru 
// str.forEach((e)=>{console.log(e*2);})



// const name=['abigail','Alexsandra','Alison','amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirdre','Diana','Elizabeth','Ella','faith','Olivia','Penelope']

// method filter() unutk memeriksa array yang mau di filter dan akan dikembalikan ke array baru 
// method includes() unutk memerriksa apakah suatu nilai tertentu ada dalam string apa blum 
// const searchName=(keyword,tiga,name)=>{
//     if(name.length ){}    
//     const founName=name.filter((e) => {
//         return e.includes(keyword)
//     })
//     return(founName);
// }
// console.log(searchName("an",name));
// function hasil(){}

// const allName=['abigail','Alexsandra','Alison','amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirdre','Diana','Elizabeth','Ella','faith','Olivia','Penelope','ananda','anana']

// function searchName(string,angka,callback){
//     return callback(string,angka)
// }

//     // mencari array yang awalan string nya 'an' 
//     let result= allName.filter((e)=>{ return e.includes(string)})
//     // mencetak index array yang diinginkan 
//     const hasil= result.slice(0,angka);
//     return hasil;

// }));

// console.log(searchName('an',4,(string,angka) => { 



// function seleksiNilai(nilaiAwal, nilaiAkhir, DataArr) {
//     if (nilaiAwal > nilaiAkhir) {
//         return "Nilai awal lebih besar dari nilai akhir";
//     }
//     if (DataArr.length <= 5) {
//         return "Jumlah angka dalam array harus lebih dari 5";
//     }
//     if (!DataArr.includes(nilaiAwal) && !DataArr.includes(nilaiAkhir)) {
//         return `Nilai tidak ditemukan`;
//     }

//     const hasil = DataArr.filter(e => {
//         return e >= nilaiAwal && e <= nilaiAkhir;
//     });
//     return hasil;
// }

// console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(4, 17, [2, 25, 4]));
// console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));






