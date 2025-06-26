document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen input dan tombol untuk perhitungan Luas Segitiga
    const inputAlas = document.getElementById('alas');
    const inputTinggi = document.getElementById('tinggi');
    const tombolHitungLuas = document.getElementById('hitung-luas');
    const tombolResetLuas = document.getElementById('reset-luas'); 
    const divHasilLuas = document.getElementById('hasil-luas');
    
    // Mendapatkan elemen input dan tombol untuk perhitungan Keliling Segitiga
    const inputSisiA = document.getElementById('sisi-a');
    const inputSisiB = document.getElementById('sisi-b');
    const inputSisiC = document.getElementById('sisi-c');
    const tombolHitungKeliling = document.getElementById('hitung-keliling');
    const tombolResetKeliling = document.getElementById('reset-keliling'); 
    const divHasilKeliling = document.getElementById('hasil-keliling');


    // Fungsi untuk menghitung luas segitiga
    function hitungLuas() {
        const alas = parseFloat(inputAlas.value);
        const tinggi = parseFloat(inputTinggi.value);

        // Validasi input: Cek apakah nilai bukan angka atau kurang dari/sama dengan nol
        if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
            // Tampilkan pesan error jika input tidak valid
            divHasilLuas.innerHTML = `<p class="font-medium text-red-600">Mohon masukkan nilai alas dan tinggi yang valid (angka positif).</p>`;
            divHasilLuas.classList.remove('hidden'); 
        }

        // Hitung luas segitiga menggunakan rumus 0.5 * alas * tinggi
        const luas = 0.5 * alas * tinggi;

        // Tampilkan hasil perhitungan luas
        divHasilLuas.innerHTML = `
            <p class="text-gray-700">Rumus: 1/2 x Alas x Tinggi</p>
            <p class="text-gray-700">Perhitungan: 1/2 x ${alas} x ${tinggi}</p>
            <p class="text-xl font-bold text-blue-800 mt-2">Luas Segitiga: ${luas.toFixed(2)} cm²</p>
        `;
        divHasilLuas.classList.remove('hidden'); 
    }

    // Fungsi untuk mereset bagian perhitungan Luas Segitiga
    function resetLuas() {
        inputAlas.value = ''; 
        inputTinggi.value = '';
        divHasilLuas.innerHTML = ''; 
        divHasilLuas.classList.add('hidden');
    }


    // Fungsi untuk menghitung keliling segitiga
    function hitungKeliling() {
        const sisiA = parseFloat(inputSisiA.value);
        const sisiB = parseFloat(inputSisiB.value);
        const sisiC = parseFloat(inputSisiC.value);

        // Validasi input: Cek apakah nilai bukan angka atau kurang dari/sama dengan nol
        if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
            // Tampilkan pesan error jika input tidak valid
            divHasilKeliling.innerHTML = `<p class="font-medium text-red-600">Mohon masukkan panjang ketiga sisi dengan angka positif.</p>`;
            divHasilKeliling.classList.remove('hidden'); 
            return;
        }

        // Hitung keliling segitiga menggunakan rumus Sisi A + Sisi B + Sisi C
        const keliling = sisiA + sisiB + sisiC;

        // Tampilkan hasil perhitungan keliling
        divHasilKeliling.innerHTML = `
            <p class="text-gray-700">Rumus: Sisi A + Sisi B + Sisi C</p>
            <p class="text-gray-700">Perhitungan: ${sisiA} + ${sisiB} + ${sisiC}</p>
            <p class="text-xl font-bold text-green-800 mt-2">Keliling Segitiga: ${keliling.toFixed(2)} cm</p>
        `;
        divHasilKeliling.classList.remove('hidden'); 
    }

    // Fungsi untuk mereset bagian perhitungan Keliling Segitiga
    function resetKeliling() {
        inputSisiA.value = ''; 
        inputSisiB.value = ''; 
        inputSisiC.value = ''; 
        divHasilKeliling.innerHTML = '';
        divHasilKeliling.classList.add('hidden'); 
    }



    tombolHitungLuas.addEventListener('click', hitungLuas);
    tombolResetLuas.addEventListener('click', resetLuas); 

    tombolHitungKeliling.addEventListener('click', hitungKeliling);
    tombolResetKeliling.addEventListener('click', resetKeliling); 
});