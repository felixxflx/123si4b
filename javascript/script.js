document.getElementById("welcome").innerHTML = "Selamat Datang";

document.getElementById("nama").innerHTML = "<b>Goggins</b>";

document.getElementById("email").innerHTML = "goggins@gmail.com";

console.log("Hanya bisa dilihat di console")

// Variabel
let nama = ""
let email = ""
let data = []; // array 

// Function
function tampil(){
    console.log("Button ditekan")
    nama = document.getElementById("txtNama").value;
    email = document.getElementById("txtEmail").value;
    console.log(nama)
    console.log(email)
    // ubah konten <p id="nama">
    document.getElementById("nama").innerHTML = nama;
    // ubah konten <p id="email">
    document.getElementById("email").innerHTML = email;
    // simpam dalam array data
    data.push(nama);
    console.log(data);
}

