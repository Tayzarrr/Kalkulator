"use strict"; // Mengaktifkan pemeriksaan JavaScript yang lebih ketat.
const display = document.getElementById('display'); // Mengambil elemen layar melalui ID display.
const buttons = document.querySelectorAll('.btn'); // Mengambil seluruh tombol kalkulator.
buttons.forEach(button => { // Memasang perilaku pada setiap tombol satu per satu.
    button.addEventListener('click', () => { // Menjalankan fungsi ketika tombol diklik.
        const value = button.textContent.trim(); // Membaca teks tombol dan membuang spasi di tepinya.
        if (display.value === 'Error') display.value = ''; // Mengosongkan pesan kesalahan sebelum input berikutnya.
        if (value === 'C') { // Memeriksa apakah pengguna menekan tombol hapus.
            display.value = ''; // Mengosongkan seluruh layar kalkulator.
        } else if (value === '=') { // Memeriksa apakah pengguna meminta hasil perhitungan.
            if (display.value.trim() === '') return; // Membiarkan layar kosong ketika belum ada ekspresi.
            try { // Mencoba menghitung dan menangkap kesalahan ekspresi.
                const expression = display.value.replace(/x/g, '*'); // Mengubah simbol x menjadi operator perkalian JavaScript.
                if (!/^[0-9+*\/.\s-]+$/.test(expression)) throw new Error('Ekspresi tidak valid'); // Membatasi karakter ekspresi pada angka dan operator kalkulator.
                const result = eval(expression); // Menghitung ekspresi seperti pada program asal setelah pemeriksaan karakter.
                display.value = Number.isFinite(result) ? String(result) : 'Error'; // Menampilkan hasil berhingga atau Error untuk hasil tidak valid.
            } catch (error) { // Menangani ekspresi yang gagal dihitung, misalnya 2+.
                display.value = 'Error'; // Memberi tahu pengguna bahwa perhitungan tidak valid.
            } // Menutup penanganan kesalahan perhitungan.
        } else { // Menangani tombol angka dan operator lainnya.
            display.value += value; // Menambahkan karakter tombol di akhir isi layar.
        } // Menutup percabangan jenis tombol.
    }); // Menutup fungsi dan pemasangan pendengar klik.
}); // Menutup perulangan pemasangan perilaku semua tombol.
