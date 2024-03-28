let angka1 = document.getElementById('angka1')
let angka2 = document.getElementById('angka2')
let hasil = document.getElementById("hasil")

// function tambah(){
//     hasil.innerHTML = Number(angka1.value) + Number(angka2.value)
// }

// function kurang(){
//     hasil.innerHTML = Number(angka1.value) - Number(angka2.value)
// }

// function kali(){
//     hasil.innerHTML = Number(angka1.value) * Number(angka2.value)
// }

// function bagi(){
//     hasil.innerHTML = Number(angka1.value) / Number(angka2.value)

// }

// CARA KE 2
function hitung(operator){
    if(operator === 'tambah'){
        console.log(angka1)
        console.log(angka2)
        hasil.innerHTML = Number(angka1.value) + Number(angka2.value)
    } else if(operator === 'kurang'){
        hasil.innerHTML = Number(angka1.value) - Number(angka2.value)
    } else if(operator === 'kali'){
        hasil.innerHTML = Number(angka1.value) * Number(angka2.value)
    } else if(operator === 'bagi'){
        hasil.innerHTML = Number(angka1.value) / Number(angka2.value)
    }
}