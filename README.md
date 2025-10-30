# Music Explorer - UTS Pemrograman Aplikasi Web

## Identitas Mahasiswa
- **Nama**: Muhammad Nurikhsan
- **NIM**: 123140057
- **Kelas**: RB

## Deskripsi Project
Aplikasi pencarian musik menggunakan iTunes Search API. Aplikasi ini memungkinkan pengguna untuk:
- Mencari lagu, album, dan artist
- Mendengarkan preview audio
- Membuat dan menyimpan playlist pribadi

## Fitur Utama
- 🔍 **Search Form**: Pencarian dengan keyword dan filter media type
- 📋 **Data Table**: Menampilkan hasil pencarian dengan artwork, nama track, artist, dan harga
- 🎵 **Audio Player**: Preview 30 detik untuk setiap lagu
- 💾 **Playlist Builder**: Simpan lagu favorit ke playlist (localStorage)
- 🔄 **Sorting**: Urutkan berdasarkan tanggal rilis atau harga

## Tech Stack
- **Frontend**: ReactJS (Vite)
- **API**: iTunes Search API
- **Styling**: CSS / Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## Cara Instalasi dan Menjalankan

### Prerequisites
- Node.js versi 18.x atau lebih baru
- npm atau yarn

### Langkah-langkah
```bash
# 1. Clone repository
git clone https://github.com/[username-anda]/uts-pemweb-[nim-anda].git

# 2. Masuk ke direktori project
cd uts-pemweb-[nim-anda]

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev

# 5. Buka browser di http://localhost:5173
```

## Link Deployment
🚀 **Live Demo**: [Link akan diisi setelah deployment ke Vercel]

## Screenshot Aplikasi
_(Screenshot akan ditambahkan setelah aplikasi selesai)_

### 1. Halaman Utama
![Home Page](screenshots/home.png)

### 2. Hasil Pencarian
![Search Results](screenshots/search.png)

### 3. Playlist
![Playlist](screenshots/playlist.png)

## Struktur Folder
```
uts-pemweb-[nim]/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchForm.jsx
│   │   ├── DataTable.jsx
│   │   ├── AudioPlayer.jsx
│   │   └── PlaylistBuilder.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Fitur yang Diimplementasikan

### CPMK 05.01 - Form, Table, CSS (45%)
- Form dengan validasi
- Tabel data dinamis dari API
- Responsive design dengan media queries
- Flexbox/Grid layout
- Pseudo-classes untuk interaksi

### CPMK 05.02 - JavaScript & React (55%)
- Functional components
- React Hooks (useState, useEffect)
- Props passing antar komponen
- Event handling
- Conditional rendering
- API integration dengan error handling

### Bonus - Deployment (10%)
- GitHub repository public
- Minimal 10 commits
- Deployed di Vercel
- Dokumentasi lengkap

## Kontributor
Dibuat oleh **[Nama Anda]** untuk keperluan UTS Pemrograman Aplikasi Web.

## Lisensi
Project ini dibuat untuk keperluan akademik.