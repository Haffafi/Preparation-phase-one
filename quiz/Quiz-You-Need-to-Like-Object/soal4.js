/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  let result = [];
  let objek = {};
  let kata = "";
  let totalKata = [];
  let hasilKata = [];
  for (let i = 0; i < arr.length; i++) {
    kata = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] != "-") kata = kata + arr[i][j];
      else {
        if (kata != "-") {
          hasilKata.push(kata);
          kata = "";
        }
      }
    }
    hasilKata.push(kata);
    totalKata.push(hasilKata);
    hasilKata = [];
  }
  for (let x = 0; x < totalKata.length; x++) {
    let nama = totalKata[x][0];
    let kotaAwal = totalKata[x][1];
    let kotaTujuan = totalKata[x][2];
    let kendaraan = totalKata[x][3];
    let jarakAntarKota = {
      Yogyakarta: 1,
      Semarang: 2,
      Surabaya: 3,
      Denpasar: 4,
    };
    let jarak = jarakAntarKota[kotaTujuan] - jarakAntarKota[kotaAwal];
    if (jarak < 0) jarak = jarak * -1;
    let biayaKendaraan = {
      Pesawat: jarak * 275000,
      Bis: jarak * 225000,
      Kereta: jarak * 250000,
    };
    let permbayaran = {
      OVO: biayaKendaraan[kendaraan] - biayaKendaraan[kendaraan] * 0.15,
      Dana: biayaKendaraan[kendaraan] - biayaKendaraan[kendaraan] * 0.1,
      Gopay: biayaKendaraan[kendaraan] - biayaKendaraan[kendaraan] * 0.05,
      Cash: biayaKendaraan[kendaraan],
    };
    objek = {
      name: nama,
      departureCity: kotaAwal,
      destinationCity: kotaTujuan,
      transport: kendaraan,
      totalCost: permbayaran[emoney],
    };
    result.push(objek);
  }
  return result;
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana"
  )
);
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay"
  )
);
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];
