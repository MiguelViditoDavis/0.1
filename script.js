// JavaScript functions to scroll the gallery left and right
function scrollLeft(id) {
    const gallery = document.getElementById(id);
    gallery.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(id) {
    const gallery = document.getElementById(id);
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
}

// Game Info Display - Toggle visibility of overlay when an image is clicked
document.querySelectorAll('.game-card img').forEach((img) => {
    img.addEventListener('click', () => {
        const info = img.nextElementSibling; // Select the .game-info div
        info.classList.toggle('visible'); // Toggle the 'visible' class
    });
});

// JavaScript for cycling through hero section images with a softer fade effect
const hero = document.querySelector('.hero');
const images = [
    'img/heroimg.jpg',  // Path to first image
    'img/heroimg2.jpg',  // Path to second image
    'img/heroimg3.jpg',  // Path to third image
    // Add more images as needed
];
let currentImageIndex = 0;

function preloadImage(src, callback) {
    const img = new Image();
    img.src = src;
    img.onload = callback;
}

function changeHeroBackground() {
    const nextImage = images[currentImageIndex];
    
    // Preload the next image before applying it
    preloadImage(nextImage, () => {
        hero.classList.add('fade-out'); // Start the soft fade effect

        setTimeout(() => {
            hero.style.backgroundImage = `url('${nextImage}')`;
            hero.classList.remove('fade-out'); // Bring the image back in softly
            
            // Move to the next image, looping back if at the end of the array
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 1000); // Match the timing with CSS fade-out duration for a soft effect
    });
}

// Set interval to change background every 4 seconds
setInterval(changeHeroBackground, 4000); // Change every 4 seconds


