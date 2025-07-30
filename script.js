// Flip kartu ucapan
const card = document.querySelector('.card');
if (card) {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        launchConfetti();
    });
}

// Animasi mengetik
const typingText = "Selamat ulang tahun! Semoga hari-harimu seindah langit pastel dan secerah bintang malam ini. 🌟";
let i = 0;
function typeEffect() {
    const target = document.querySelector('.typing-text');
    // Pastikan target elemen ada sebelum mencoba memanipulasinya
    if (target && i < typingText.length) {
        target.innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}
// Pastikan elemen .typing-text ada sebelum memanggil typeEffect
if (document.querySelector('.typing-text')) {
    typeEffect();
}

// Confetti sederhana (emoji balon)
function launchConfetti() {
    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = ['🎈', '🎉', '💖'][Math.floor(Math.random() * 3)];
        emoji.style.position = 'fixed';
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = '-50px';
        emoji.style.fontSize = `${Math.random() * 20 + 20}px`;
        emoji.style.animation = `drop ${Math.random() * 3 + 2}s ease-out forwards`;
        // Menyesuaikan z-index agar confetti tidak menutupi teks penting
        // Misalnya, jika teks penting memiliki z-index 100, confetti bisa 90
        emoji.style.zIndex = '90'; // Atur z-index yang sesuai dengan desain Anda
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 5000);
    }
}

// Animasi jatuh
const style = document.createElement('style');
style.innerHTML = `
@keyframes drop {
    to {
        transform: translateY(120vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// Quote pop-up
const quotePopup = document.querySelector('.quote-popup');
if (quotePopup) {
    const closeBtn = quotePopup.querySelector('button');
    if (closeBtn) { // Pastikan tombol penutup ada
        closeBtn.addEventListener('click', () => {
            quotePopup.style.display = 'none';
        });
    }
}

window.onload = () => {
    const quotePopupElement = document.getElementById("quotePopup");
    // Periksa apakah elemen quotePopupElement ada sebelum mencoba mengubah style-nya
    if (quotePopupElement) {
        setTimeout(() => {
            quotePopupElement.style.display = "block";
        }, 2000);
    }
};

function closeQuote() {
    const quotePopupElement = document.getElementById("quotePopup");
    // Periksa apakah elemen quotePopupElement ada sebelum mencoba mengubah style-nya
    if (quotePopupElement) {
        quotePopupElement.style.display = "none";
    }
}

// Animasi mengetik untuk elemen dengan class "typewriter"
document.addEventListener("DOMContentLoaded", function () {
    const typewriter = document.querySelector(".typewriter");
    // Periksa apakah elemen typewriter ada sebelum mencoba mengakses atributnya
    if (typewriter) {
        const text = typewriter.getAttribute("data-text");
        let index = 0;

        function type() {
            // Periksa apakah typewriter masih ada (misalnya jika dihapus dari DOM)
            // dan pastikan index tidak melebihi panjang teks
            if (typewriter && index < text.length) {
                typewriter.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50); // kecepatan ketik
            }
        }

        // Pastikan typewriter dan atribut data-text ada sebelum memulai efek ketik
        if (text) { // text akan null jika typewriter tidak ada atau tidak punya data-text
            type();
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById('bg-music');

  // Trigger pemutaran saat user pertama kali klik
  const playMusicOnce = () => {
    music.play();
    document.removeEventListener('click', playMusicOnce); // hanya sekali
  };

  document.addEventListener('click', playMusicOnce);
});

