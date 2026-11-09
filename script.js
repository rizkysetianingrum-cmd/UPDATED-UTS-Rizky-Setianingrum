

function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById('digital-clock');
    if (clockElement) {
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}
// jalankan jam digital
updateClock();
setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', function() {
    
    // interaksi form order (halaman order.html)
    const orderForm = document.querySelector('.order-form') || document.querySelector('form');
    if (orderForm && window.location.pathname.includes('order')) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            // ambil nama pemesan jika ada input nama
            const nameInput = orderForm.querySelector('input[type="text"]');
            const customerName = (nameInput && nameInput.value.trim() !== '') ? nameInput.value : 'Kak';

            // Pop-up sukses pemesanan
            alert(`Thank you, ${customerName}! 🍵\nWe have received your Matcha order, and it is currently being prepared..`);
            orderForm.reset();
        });
    }

    // interaksi form kontak (halaman contact.html)
    const contactForm = document.querySelector('.contact-form') || document.querySelector('form');
    if (contactForm && window.location.pathname.includes('contact')) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pop-up sukses pengiriman pesan
            alert('Thank you for contacting Mivatcha! 💚\nYour message has been sent successfully.');
            contactForm.reset();
        });
    }

});