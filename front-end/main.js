function formatRupiah(angka){

return "Rp " + angka.toLocaleString("id-ID")

}


function hitung(){

let rows = document.querySelectorAll("#tbody tr")
let total = 0

rows.forEach(row => {

let qty = row.querySelector(".qty").value
let harga = row.querySelector(".harga").value
let jumlahInput = row.querySelector(".jumlah")

let jumlah = qty * harga

if(!qty || !harga){
jumlah = 0
}

jumlahInput.value = formatRupiah(jumlah)

total += jumlah

})

document.getElementById("total").innerText = formatRupiah(total)

}



function tambahBaris(){

let tbody = document.getElementById("tbody")
let nomor = tbody.rows.length + 1

let row = document.createElement("tr")

row.innerHTML = `

<td class="p-3 text-center">${nomor}</td>

<td class="p-3">
<input placeholder="Nama Barang" class="w-full border p-1">
</td>

<td class="p-3">
<input type="number" class="qty w-full border p-1" oninput="hitung()">
</td>

<td class="p-3">
<input type="number" class="harga w-full border p-1" oninput="hitung()">
</td>

<td class="p-3">
<input type="text" class="jumlah w-full border p-1 bg-gray-100" readonly>
</td>

<td class="p-3 text-center">
<button onclick="hapusBaris(this)" class="text-red-500">✕</button>
</td>

`

tbody.appendChild(row)

}



function hapusBaris(btn){

let row = btn.parentElement.parentElement
row.remove()

updateNomor()
hitung()

}



function updateNomor(){

let rows = document.querySelectorAll("#tbody tr")

rows.forEach((row,index)=>{

row.children[0].innerText = index + 1

})

}



function downloadNota(){

window.print()

}