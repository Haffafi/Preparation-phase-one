/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  equation = equation.toString();
  if (equation == "0") return;
  if (equation.length == 1) return equation[0];
  else {
    let angka = equation[0];
    for (let i = 0; i < equation.length - 1; i++) {
      angka = angka + "0";
    }
    let next = equation.substring(1);
    if (!/[1-9]/.test(next)) {
      return angka;
    }
    return angka + " + " + parseNumber(next);
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
