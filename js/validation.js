document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
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

        loginForm.addEventListener('submit', function (e) {
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
    }

    const vanillaBtn = document.getElementById('vanillaBtn');
    if (vanillaBtn) {
        const hataIdleri = [
            'adsoyad-hata',
            'email-hata',
            'telefon-hata',
            'konu-hata',
            'tercih-hata',
            'mesaj-hata',
            'kvkk-hata'
        ];

        function hatalariTemizle() {
            hataIdleri.forEach(function (id) {
                const el = document.getElementById(id);
                if (el) el.textContent = '';
            });
            const bildirim = document.getElementById('genelBildirim');
            bildirim.className = 'mt-3 d-none';
            bildirim.innerHTML = '';
        }

        function hataYaz(id, mesaj) {
            const el = document.getElementById(id);
            if (el) el.textContent = mesaj;
        }

        function bildirimGoster(tip, mesaj) {
            const bildirim = document.getElementById('genelBildirim');
            bildirim.className = 'mt-3 alert alert-' + tip;
            bildirim.textContent = mesaj;
        }

        vanillaBtn.addEventListener('click', function () {
            hatalariTemizle();

            const adsoyad = document.getElementById('adsoyad').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefon = document.getElementById('telefon').value.trim();
            const konu = document.getElementById('konu').value;
            const tercihEl = document.querySelector('input[name="tercih"]:checked');
            const tercih = tercihEl ? tercihEl.value : '';
            const mesaj = document.getElementById('mesaj').value.trim();
            const kvkk = document.getElementById('kvkk').checked;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const telefonRegex = /^\d+$/;

            let hataSayisi = 0;

            if (adsoyad === '') {
                hataYaz('adsoyad-hata', 'Ad soyad boş olamaz.');
                hataSayisi++;
            } else if (adsoyad.length < 3) {
                hataYaz('adsoyad-hata', 'Ad soyad en az 3 karakter olmalıdır.');
                hataSayisi++;
            }

            if (email === '') {
                hataYaz('email-hata', 'E-posta boş olamaz.');
                hataSayisi++;
            } else if (!emailRegex.test(email)) {
                hataYaz('email-hata', 'Geçerli bir e-posta adresi giriniz.');
                hataSayisi++;
            }

            if (telefon === '') {
                hataYaz('telefon-hata', 'Telefon boş olamaz.');
                hataSayisi++;
            } else if (!telefonRegex.test(telefon)) {
                hataYaz('telefon-hata', 'Telefon sadece rakamlardan oluşmalıdır.');
                hataSayisi++;
            } else if (telefon.length < 10 || telefon.length > 11) {
                hataYaz('telefon-hata', 'Telefon 10 veya 11 haneli olmalıdır.');
                hataSayisi++;
            }

            if (konu === '') {
                hataYaz('konu-hata', 'Lütfen bir konu seçiniz.');
                hataSayisi++;
            }

            if (tercih === '') {
                hataYaz('tercih-hata', 'Lütfen bir iletişim tercihi seçiniz.');
                hataSayisi++;
            }

            if (mesaj === '') {
                hataYaz('mesaj-hata', 'Mesaj boş olamaz.');
                hataSayisi++;
            } else if (mesaj.length < 10) {
                hataYaz('mesaj-hata', 'Mesaj en az 10 karakter olmalıdır.');
                hataSayisi++;
            }

            if (!kvkk) {
                hataYaz('kvkk-hata', 'KVKK onayı vermelisiniz.');
                hataSayisi++;
            }

            if (hataSayisi === 0) {
                bildirimGoster('success', 'Vanilla JS doğrulama başarılı! Form gönderiliyor...');
                document.getElementById('iletisimForm').submit();
            } else {
                bildirimGoster('danger', 'Vanilla JS doğrulamasında ' + hataSayisi + ' adet hata bulundu. Lütfen alanları kontrol edin.');
            }
        });
    }
});
