document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const sifreInput = document.getElementById('sifre');
    const hataDiv = document.getElementById('hataMesaji');

    function hataGoster(mesaj) {
        hataDiv.textContent = mesaj;
        hataDiv.classList.remove('d-none');
        hataDiv.style.color = 'red';
    }

    function hataTemizle() {
        hataDiv.textContent = '';
        hataDiv.classList.add('d-none');
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('hata') === '1') {
        hataGoster('Kullanıcı adı veya şifre hatalı');
    }

    form.addEventListener('submit', function (e) {
        hataTemizle();

        const email = emailInput.value.trim();
        const sifre = sifreInput.value.trim();

        if (email === '' || sifre === '') {
            e.preventDefault();
            hataGoster('Lütfen tüm alanları doldurunuz.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            hataGoster('Lütfen geçerli bir e-mail adresi giriniz.');
            return;
        }

        if (!email.endsWith('@sakarya.edu.tr')) {
            e.preventDefault();
            hataGoster('E-mail adresi @sakarya.edu.tr ile bitmelidir.');
            return;
        }
    });
});
