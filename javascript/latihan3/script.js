let nama = document.getElementById("nama")
let testimoni = document.getElementById("testimoni")
console.log(nama.value)

let data = []
function simpan(){
    data.push(nama.value, testimoni.value);
    console.log(data)

}