let inputNama = document.getElementById("nama");
let inputTestimoni = document.getElementById("testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = []

btnSimpan.addEventListener("click", function(){
    if(localStorage.getItem("testimoni")){
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push({
            nama : inputNama.value,
            testimoni : inputTestimoni.value,
        })
    } else {
        data.push({
            nama : inputNama.value,
            testimoni : inputTestimoni.value,
        })    
    }

    localStorage.setItem("testimoni", JSON.stringify(data));

    getData();

})

// tampilkan data localstorage
function getData(){
    if(localStorage.getItem("testimoni")){
        // clear element list
        list.innerHTML = "";
        // ada localstorage dengan key testimoni
        data = JSON.parse(localStorage.getItem("testimoni"));
        for (const [index, row] of data.entries()){
            list.innerHTML += `
                    <tr>
                    <td>${row.nama}</td>
                    <td>${row.testimoni}</td>
                    </tr>
            `;
        }
    }
}

getData();
