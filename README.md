<div align="center">

# 🧮 Kalkulator Web

**Hitungan sederhana dan Tampilan elegan.**

![HTML5](https://img.shields.io/badge/HTML5-Struktur-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Tampilan-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Logika-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Kalkulator berbasis browser dengan panel navy, latar gradasi biru–toska bergerak, dan tombol interaktif.

[Mulai](#-menjalankan-program) · [Fitur](#-fitur) · [Struktur](#-struktur-proyek) · [GitHub](PANDUAN_GITHUB.md)

</div>

---

## ✨ Fitur

- Operasi penjumlahan, pengurangan, perkalian, dan pembagian.
- Tombol **C** untuk mengosongkan layar dan **=** untuk menghitung.
- Urutan operasi mengikuti JavaScript: perkalian/pembagian didahulukan.
- Pesan **Error** untuk ekspresi tidak lengkap atau hasil tidak berhingga.
- Latar gradasi bergerak serta efek hover dan tekan pada tombol.
- HTML, CSS, dan JavaScript terpisah dengan komentar penjelasan berbahasa Indonesia pada setiap baris kode.
- Berjalan tanpa instalasi paket, framework, atau koneksi internet setelah diunduh.

## 🚀 Menjalankan program

1. Ekstrak ZIP dengan **Extract All / Ekstrak Semua**.
2. Masuk ke folder **Kalkulator-GitHub** yang berisi `index.html`.
3. Klik dua kali **index.html** untuk membukanya di browser.
4. Klik tombol kalkulator untuk memasukkan angka dan operator.

Atau, dari PowerShell yang sudah berada di folder tersebut:

```powershell
Start-Process .\index.html
```

> Tidak perlu `npm install`. Badge pada README memerlukan internet untuk tampil; aplikasi kalkulator tidak memerlukannya.

## 📁 Struktur proyek

| File | Tanggung jawab |
| :--- | :--- |
| `index.html` | Struktur layar dan 16 tombol kalkulator. |
| `css/style.css` | Warna, tata letak, animasi, dan interaksi visual. |
| `js/script.js` | Input tombol, evaluasi ekspresi, dan penanganan kesalahan. |
| `README.md` | Pengenalan dan dokumentasi proyek. |
| `PANDUAN_GITHUB.md` | Panduan lengkap PowerShell, push, pembaruan, dan Pages. |
| `.gitignore` | Daftar file lokal yang diabaikan Git. |
| `.gitattributes` | Normalisasi akhir baris file teks. |

## 🎮 Cara penggunaan

| Tombol | Fungsi |
| :---: | :--- |
| `0`–`9` | Menambahkan angka ke layar. |
| `+` / `-` | Penjumlahan / pengurangan. |
| `x` / `/` | Perkalian / pembagian. |
| `=` | Menghitung ekspresi. |
| `C` | Menghapus seluruh isi layar. |

| Urutan tombol | Hasil |
| :--- | ---: |
| `1` → `2` → `+` → `3` → `=` | 15 |
| `9` → `-` → `4` → `=` | 5 |
| `6` → `x` → `7` → `=` | 42 |
| `8` → `/` → `2` → `=` | 4 |
| `2` → `+` → `3` → `x` → `4` → `=` | 14 |
| `8` → `/` → `0` → `=` | Error |

Setelah **Error**, klik angka untuk memulai lagi. Setelah hasil muncul, **C** memulai perhitungan baru; tombol lain melanjutkan isi layar.

## 🧠 Alur program

1. Browser membaca `index.html` dan memuat `css/style.css`.
2. Atribut `defer` memastikan `js/script.js` berjalan setelah HTML selesai diproses.
3. JavaScript memasang pendengar klik pada semua tombol.
4. Angka/operator ditambahkan ke layar; **C** membersihkan layar.
5. **=** mengubah `x` menjadi `*`, memeriksa karakter ekspresi, lalu menghitung dan menampilkan hasil.

## 📝 Catatan implementasi

Tampilan, warna, susunan tombol, dan mekanisme perhitungan dasar dipertahankan dari file sumber. Perapian meliputi deklarasi HTML5, label aksesibilitas, file terpisah, komentar setiap baris kode, pemeriksaan karakter ekspresi, dan penanganan layar kosong.

Program tetap memakai `eval()` dari versi asal setelah pembatasan karakter. Implementasi ini untuk latihan kalkulator lokal; jika diperluas untuk menerima ekspresi dari sumber lain, gunakan parser aritmetika khusus. Angka mengikuti presisi floating-point JavaScript sehingga pecahan tertentu dapat memiliki selisih pembulatan kecil.

Input menggunakan klik tombol. Belum tersedia tombol desimal, tanda kurung, persen, hapus satu karakter, maupun pintasan keyboard. Hasil pembagian tetap dapat berupa desimal.

<div align="center">
