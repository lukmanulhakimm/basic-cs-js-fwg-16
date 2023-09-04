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




// contoh soal kedua
// const mtk = 80;
// const bahasaIndonesia = 90;
// const bahasaInggris = 89;
// const ipa = 69;

// // Validasi input nilai
// if (mtk === null || bahasaIndonesia === null || bahasaInggris === null || ipa === null) {
//     console.log("Semua nilai harus diisi");
// } else {
//     // Menghitung rata-rata
//     const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

//     // Menentukan grade berdasarkan rata-rata
//     let grade;
//     if (rataRata >= 90 && rataRata <= 100) {
//         grade = "A";
//     } else if (rataRata >= 80 && rataRata < 90) {
//         grade = "B";
//     } else if (rataRata >= 70 && rataRata < 80) {
//         grade = "C";
//     } else if (rataRata >= 60 && rataRata < 70) {
//         grade = "D";
//     } else {
//         grade = "E";
//     }

//     // Output hasil
//     console.log(`Rata-rata = ${rataRata}`);
//     console.log(`Grade = ${grade}`);
// }


// Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E


// const mtk = 80;
// const bahasaIndonesia = 90;
// const bahasaInggris = 89;
// const ipa = 69;
// if(mtk=== 80 || bahasaIndonesia === 90 || bahasaInggris === 89 || ipa === 69){
//  // Menghitung rata-rata
//  const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
//  // Menentukan grade berdasarkan rata-rata
//  let grade;
//  if (rataRata >= 90 && rataRata <= 100) {
//      grade = "A";
//  } else if (rataRata >= 80 && rataRata < 90) {
//      grade = "B";
//  } else if (rataRata >= 70 && rataRata < 80) {
//      grade = "C";
//  } else if (rataRata >= 60 && rataRata < 70) {
//      grade = "D";
//  } else {
//      grade = "E";
//  }   
// }else{
//     console.log("Semua nilai harus diisi");   
// }

// console.log(`Rata-rata = ${rataRata}`);
//     console.log(`Grade = ${grade}`);





// const mtk = 80;
// const bahasaIndonesia = 90;
// const bahasaInggris = 89;
// const ipa = 69;
// // menentukan nilai rata rata
// const rataRata= (mtk+bahasaIndonesia+bahasaInggris+ipa)/4; //82
// // menentukan nilai
// let nilai= '';
// if(rataRata>=90 && rataRata<=100){
// nilai='A';
// } else if (rataRata >= 80 && rataRata < 90) {
// nilai = "B";
// } else if (rataRata >= 70 && rataRata < 80) {
// nilai = "C";
// } else if (rataRata >= 60 && rataRata < 70) {
// nilai = "D";
// } else {
// nilai = "E";
// }
// return nilai;   
    

// contoh callback 

// function kalikan (a,b){ // 
//     return a*b;  // esekusi a*b 
// }

// function hitungLuas(a){  
//   return kalikan(a,a)  // esekusi  fungsi kalikan 
// } 

// function cetakLuasKotak (sisi){  // di dlam fungsi ada fungsi hitung luas, 
//   const luas = hitungLuas(sisi)  // esekusi hitungluas
//   console.log(luas);
// }
// cetakLuasKotak(10) //  1.esekusi 


// mencoba soal 
// function kalKulasi(a,b,c,d){  // parameter menjdi (5,2,5,2) 
//   let total= a+(b*c)-d;  // esekusi variabel total  2*5+5-2 = 13
//   return total;
// }

// function semua(a,b){ // parameter menjdi (5,2) 
//   return kalKulasi(a,b,a,b)  //ada pemnegmbalian fungsi, esekusi fungsi kalkulasi (5,2,5,2)
// }

// function cetakAngka(c,d){ // parameter brubah menjadi 5 dan 2  
//   let hasil = semua(c,d); //  di tampung oleh variabel hasil dengan fungsi semua() yang parameternya (5,2)
//   console.log(hasil);
// }
// cetakAngka(5,2)




// coba coba asyncronous callback 

const kali = (a,b)=> {
  return a*b;
}

const bagi =(a,b)=> {
  return a/b;
}

//  output nya  kali bagi setTimeOut 
setTimeout(()=>{
  console.log(`selesai`);
},0)
console.log(kali(2,5));
console.log(bagi(6,2));


function kerjaTugas (mataKuliah, selesai){
    console.log(`mulai mengerjakan tugas ${mataKuliah}...`);
    selesai()
} 
function sapa(){
    console.log(`selesai mengerjakan tugas`);
}
kerjaTugas('informatika',sapa)

























