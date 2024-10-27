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

            const links = document.querySelectorAll('#reservasi');
            links.forEach(link => {
                link.classList.add('active');
            });
        })
        .catch(error => console.error('Error loading Navbar:', error));
    
    fetch('../../components/footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.footer').innerHTML = data;
        const links = document.querySelectorAll('#reservasi');
        links.forEach(link => {
            link.classList.add('active');
        });
    })
    .catch(error => console.error('Error loading Footer:', error));
});

// Toggle Stay Duration Input
document.querySelectorAll('input[name="stay"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const stayDurationInput = document.getElementById('stayDuration');
        stayDurationInput.disabled = this.value === 'Tidak';
    });
});

// Handle Form Submission
function submitReservation(event) {
    event.preventDefault();

    // Get Form Values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value || 'Tidak Diketahui';
    const groupSize = document.getElementById('groupSize').value;
    const stay = document.querySelector('input[name="stay"]:checked').value;
    const stayDuration = stay == 'Ya' ? String(document.getElementById('stayDuration').value) + ' Hari' : 'Tidak Menginap';
    const destination = document.getElementById('destination').value;
    const notes = document.getElementById('notes').value || 'Tidak Ada Pesan Tambahan';

    // Format WhatsApp Message
    const message = `Halo *KanGen Wisata Tour*` +
        `\nSaya ingin melakukan reservasi dengan data berikut:` +
        `\n*Nama*: ${name}` +
        `\n*Nomor Telepon*: ${phone}` +
        `\n*Email*: ${email}` +
        `\n*Jumlah Orang*: ${groupSize}` +
        `\n*Menginap*: ${stay}` +
        `\n*Durasi Menginap*: ${stayDuration}` +
        `\n*Destinasi Daerah*: ${destination}` +
        `\n*Pesan Tambahan*: ${notes}` +
        `\n*Terima kasih!*`;

    // Encode message and create WhatsApp link
    const whatsappUrl = `https://wa.me/6281333385215?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}