/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  let smallest = Infinity;
  let biggest = 0;
  for (let i = 0; i < arr.length; i++) {
    let filter = arr[i].filter((x) => x !== " ");
    let max = Math.max(...arr[i]);
    let min = Math.min(...filter);
    if (max > biggest) biggest = max;
    if (min < smallest) smallest = min;
  }
  if (biggest == 0 && smallest == Infinity) return [];
  // console.log(biggest);
  // console.log(smallest);
  let kosong = 0;
  let result = [];
  let angka = [];
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      if (arr[j][k] == " ") kosong++;
      angka.push(arr[j][k]);
    }
  }
  for (let l = smallest; l <= biggest; l++) {
    if (!angka.includes(l)) result.push(l);
  }
  return result;
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
