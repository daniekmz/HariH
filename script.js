const birthday = new Date(2025, 02, 19, 7, 0, 0); // Contoh: 19 maret 2023

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        clearInterval(interval);
        // Sembunyikan hitung mundur
        document.getElementById('countdown').classList.add('hidden');
        // Tampilkan tombol
        document.getElementById('openBirthdayTab').classList.remove('hidden');
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

// Event listener untuk tombol
document.getElementById('openBirthdayTab').addEventListener('click', () => {
    window.open('danie.html', '_blank');
});

// Ambil elemen cursor love
const cursorLove = document.querySelector('.cursor-love');

// Gerakkan cursor love sesuai posisi mouse
document.addEventListener('mousemove', (e) => {
    cursorLove.style.left = `${e.pageX}px`;
    cursorLove.style.top = `${e.pageY}px`;
});

// Efek saat mengklik
document.addEventListener('mousedown', () => {
    cursorLove.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursorLove.style.transform = 'translate(-50%, -50%) scale(1)';
});