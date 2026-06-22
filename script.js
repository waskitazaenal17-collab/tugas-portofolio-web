// Mengambil elemen tombol dan body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

// Mengecek preferensi tema terakhir dari browser user
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Menjalankan fungsi ganti tema saat tombol diklik
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Ganti ikon bulan/matahari dan simpan ke local storage
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});