document.addEventListener('DOMContentLoaded', () => {
    fetch('../../components/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.nav').innerHTML = data;
            
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });

            const links = document.querySelectorAll('#galeri');
            links.forEach(link => {
                link.classList.add('active');
            });
        })
        .catch(error => console.error('Error loading Navbar:', error));
    
    fetch('../../components/footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.footer').innerHTML = data;
        const links = document.querySelectorAll('#galeri');
        links.forEach(link => {
            link.classList.add('active');
        });
    })
    .catch(error => console.error('Error loading Footer:', error));
});

let currentImageIndex = 0;
const images = [
    'assets/photo1.jpg',
    'assets/photo2.jpg',
    'assets/photo3.jpg',
    'assets/photo4.jpg',
];

function openPopup(index) {
    currentImageIndex = index - 1;
    document.getElementById('popup-img').src = images[currentImageIndex];
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function navigateGallery(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('popup-img').src = images[currentImageIndex];
}

function switchPage(pageNumber) {
    // Logic for switching page and updating gallery images
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = ''; // Clear current images
    // Load new images based on pageNumber (replace with actual logic)
    images.slice((pageNumber - 1) * 4, pageNumber * 4).forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.onclick = () => openPopup(index + 1);
        const imgElement = document.createElement('img');
        imgElement.src = image;
        galleryItem.appendChild(imgElement);
        galleryGrid.appendChild(galleryItem);
    });

    document.querySelectorAll('.page-bubble').forEach(bubble => {
        bubble.classList.remove('active');
    });
    document.querySelector(`.page-bubble:nth-child(${pageNumber})`).classList.add('active');
}