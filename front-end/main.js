async function simpanNota(){

let rows = document.querySelectorAll("#tbody tr")

let data = []

rows.forEach(row => {

let nama = row.querySelector("input[placeholder='Nama Barang']").value
let qty = row.querySelector(".qty").value
let harga = row.querySelector(".harga").value

let jumlah = qty * harga

data.push({
nama,
qty,
harga,
jumlah
})

})

for(let item of data){

await fetch("http://localhost:3000/nota",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(item)
})

}

alert("Nota berhasil disimpan")

}