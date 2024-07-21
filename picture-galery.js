const thumbnails = document.querySelectorAll('.thumbnail');
const overlay = document.getElementById('overlay');
const largeImage = document.getElementById('largeImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const src = thumbnail.src.replace('thumb', 'large');
        largeImage.src = src;
        overlay.style.display= 'flex';
    });
});

overlay.addEventListener('click', () =>{
    overlay.style.display = 'none';
});