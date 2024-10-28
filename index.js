document.addEventListener('DOMContentLoaded', () => {
    fetch('./components/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.nav').innerHTML = data;
            
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        })
        .catch(error => console.error('Error loading Navbar:', error));
    
    fetch('./components/footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading Footer:', error));

    fetch('./pages/home/home.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.main').innerHTML = data;
        })
        .catch(error => console.error('Error loading Home:', error));
});