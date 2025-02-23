// Tanggal ulang tahun (format: Tahun, Bulan-1, Hari, Jam, Menit, Detik)
const birthday = new Date(2025, 02, 19, 7, 0, 0); // Contoh: 25 Desember 2023

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        clearInterval(interval);
        // Buka tab baru dengan ucapan selamat ulang tahun
        window.open("danie.html", "_blank");
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Fungsi untuk membuat balon
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}%`; // Posisi horizontal acak
    balloon.style.animationDuration = `${Math.random() * 6 + 5}s`; // Durasi animasi acak
    document.querySelector('.balloons').appendChild(balloon);
}

// Menghasilkan balon setiap 1 detik
setInterval(createBalloon, 1000);

// Ambil elemen custom cursor
const cursor = document.querySelector('.custom-cursor');

// Gerakkan cursor sesuai posisi mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Efek saat mengklik
document.addEventListener('mousedown', () => {
    cursor.classList.add('clicked');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicked');
});