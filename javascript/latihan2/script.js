let data = ["Alfredo","David","Felix"];
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index){
    console.log(value);
    listMhs.innerHTML += `<li> ${value} </li>`;
};

let npm = document.getElementById("npm");
// Tampilkan data localstorage <p id="npm",
npm.innerHTML += localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML += localStorage.getItem("nama");

// Simpan Data ke localstorage
localStorage.setItem("email", "example@gmail.com")

// data araay
let hobi = ["membaca","bermain","membaca"];
localStorage.setItem("hobi", hobi)
localStorage.setItem("myHobi", JSON.stringify(hobi))

// data object
let mhs = {
    npm : 22226240086,
    nama : 'felix'
};
// cara akses
console.log(mhs.npm);
console.log(mhs.nama)

// kombinasi array dan object
let nilai = [
    { kode_mk: "SI0001", nama_mk: "Pemograman Web" },
    { kode_mk: "SI0011", nama_mk: "PAB" }
]

// sumpan nilai ke json
localStorage.setItem("nilai", JSON.stringify(nilai))

// tampilkan nama_mk pemograman web
console.log(nilai[0].kode_mk);
console.log(nilai[0].nama_mk);

// tampilkan menggunakan for atau foreach
let isNilai = JSON.parse(localStorage.getItem("nilai"));
for( const [index, data] of isNilai.entries()) {
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    // tampilkan data mk ke dakan <ul id="listMk",
    document.getElementById("listMk").innerHTML += `<li>${data.kode_mk} ${data.nama_mk}</li>`
};
