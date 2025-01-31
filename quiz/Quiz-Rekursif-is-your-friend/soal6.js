/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function palindromeRecursive(sentence) {
  let awal = "";
  let akhir = "";
  function banding(awal, akhir) {
    if (awal == akhir) return true;
    else {
      return false;
    }
  }
  if (sentence.length == 1) return true;
  if (sentence.length == 2) return banding(sentence[0], sentence[1]);
  else {
    awal = sentence[0];
    akhir = sentence[sentence.length - 1];
    return (
      banding(awal, akhir) &&
      palindromeRecursive(sentence.substring(1, sentence.length - 1))
    );
  }
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false
