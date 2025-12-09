// Dates
const weddingDate = new Date("Feb 6, 2026 00:00:00").getTime();

// Elements
const startOverlay = document.getElementById('start-overlay');
const sealContainer = document.getElementById('sealContainer');
const instructionText = document.getElementById('instructionText');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const scrollArrow = document.getElementById('scrollArrow');

// --- 1. Unique "Hold to Open" Interaction ---
let holdTimer = null;
const holdDuration = 1500; // 1.5 seconds to unlock
let isUnlocked = false;

// Function to start holding
const startHold = (e) => {
    e.preventDefault(); // Prevent standard touch actions
    if (isUnlocked) return;

    // Add vibration on press
    if (navigator.vibrate) navigator.vibrate(50);
    
    sealContainer.classList.add('active');
    // Bengali Text Update
    instructionText.innerText = "খোলা হচ্ছে..."; 

    holdTimer = setTimeout(() => {
        unlockSite();
    }, holdDuration);
};

// Function to stop holding (cancel)
const endHold = () => {
    if (isUnlocked) return;
    
    clearTimeout(holdTimer);
    sealContainer.classList.remove('active');
    // Bengali Text Update
    instructionText.innerText = "খুলতে চাপ দিয়ে ধরে রাখুন";
};

// Function to actually unlock the site
const unlockSite = () => {
    isUnlocked = true;

    // Add stronger vibration on unlock
    if (navigator.vibrate) navigator.vibrate(200);

    sealContainer.classList.add('broken'); // Explode animation
    instructionText.style.opacity = '0';
    
    // Play music
    bgMusic.volume = 0.5;
    bgMusic.play().catch(e => console.log("Audio play failed", e));
    musicToggle.classList.remove('hidden');

    // Fade out overlay after seal breaks
    setTimeout(() => {
        startOverlay.style.opacity = '0';
        startOverlay.style.transform = 'scale(1.1)'; // Slight zoom effect 
        setTimeout(() => {
            startOverlay.style.display = 'none';
        }, 1000);
    }, 600);
};

// Add Event Listeners for both Mouse and Touch
sealContainer.addEventListener('mousedown', startHold);
sealContainer.addEventListener('touchstart', startHold);

sealContainer.addEventListener('mouseup', endHold);
sealContainer.addEventListener('mouseleave', endHold);
sealContainer.addEventListener('touchend', endHold);


// --- 2. Scroll Arrow Interaction ---
if (scrollArrow) {
    scrollArrow.addEventListener('click', () => {
        const eventsSection = document.querySelector('.section');
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// --- 3. Music Toggle ---
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        bgMusic.pause();
        musicToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
});

// --- 4. Countdown ---
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("days")) {
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    if (distance < 0) {
        clearInterval(timer);
        const countdownEl = document.getElementById("countdown");
        if(countdownEl) countdownEl.innerHTML = "<h3 style='font-family: var(--font-heading)'>শুভ লগ্ন উপস্থিত!</h3>";
    }
}, 1000);

// --- 5. Scroll Animation ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-up').forEach((el) => {
    observer.observe(el);
});

// --- 6. Petals (Optimized for Mobile) ---
const petalsContainer = document.getElementById('petals-container');
const isMobile = window.innerWidth < 768;
const petalCount = isMobile ? 12 : 30; 

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 5 + 's';
    petal.style.opacity = Math.random();

    // Inline styles for the petal look
    petal.style.position = 'fixed';
    petal.style.top = '-10px';
    petal.style.width = '10px';
    petal.style.height = '10px';
    petal.style.backgroundColor = '#FFD700';
    petal.style.borderRadius = '50% 0 50% 50%';
    petal.style.animationName = 'fall';
    petal.style.animationTimingFunction = 'linear';
    petal.style.animationIterationCount = 'infinite';

    petalsContainer.appendChild(petal);
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(styleSheet);

for (let i = 0; i < petalCount; i++) {
    createPetal();
}