const { createApp } = Vue;

createApp({
    data() {
        return {
            adsoyad: '',
            email: '',
            telefon: '',
            konu: '',
            tercih: '',
            mesaj: '',
            kvkk: false
        };
    },
    methods: {
        hataYaz(id, mesaj) {
            const el = document.getElementById(id);
            if (el) el.textContent = mesaj;
        },
        hatalariTemizle() {
            const idler = [
                'adsoyad-hata',
                'email-hata',
                'telefon-hata',
                'konu-hata',
                'tercih-hata',
                'mesaj-hata',
                'kvkk-hata'
            ];
            idler.forEach((id) => {
                const el = document.getElementById(id);
                if (el) el.textContent = '';
            });
            const bildirim = document.getElementById('genelBildirim');
            if (bildirim) {
                bildirim.className = 'mt-3 d-none';
                bildirim.innerHTML = '';
            }
        },
        bildirimGoster(tip, mesaj) {
            const bildirim = document.getElementById('genelBildirim');
            if (bildirim) {
                bildirim.className = 'mt-3 alert alert-' + tip;
                bildirim.textContent = mesaj;
            }
        },
        vueGonder() {
            this.hatalariTemizle();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const telefonRegex = /^\d+$/;

            const adsoyad = this.adsoyad.trim();
            const email = this.email.trim();
            const telefon = this.telefon.trim();
            const mesaj = this.mesaj.trim();

            let hataSayisi = 0;

            if (adsoyad === '') {
                this.hataYaz('adsoyad-hata', 'Ad soyad boş olamaz.');
                hataSayisi++;
            } else if (adsoyad.length < 3) {
                this.hataYaz('adsoyad-hata', 'Ad soyad en az 3 karakter olmalıdır.');
                hataSayisi++;
            }

            if (email === '') {
                this.hataYaz('email-hata', 'E-posta boş olamaz.');
                hataSayisi++;
            } else if (!emailRegex.test(email)) {
                this.hataYaz('email-hata', 'Geçerli bir e-posta adresi giriniz.');
                hataSayisi++;
            }

            if (telefon === '') {
                this.hataYaz('telefon-hata', 'Telefon boş olamaz.');
                hataSayisi++;
            } else if (!telefonRegex.test(telefon)) {
                this.hataYaz('telefon-hata', 'Telefon sadece rakamlardan oluşmalıdır.');
                hataSayisi++;
            } else if (telefon.length < 10 || telefon.length > 11) {
                this.hataYaz('telefon-hata', 'Telefon 10 veya 11 haneli olmalıdır.');
                hataSayisi++;
            }

            if (this.konu === '') {
                this.hataYaz('konu-hata', 'Lütfen bir konu seçiniz.');
                hataSayisi++;
            }

            if (this.tercih === '') {
                this.hataYaz('tercih-hata', 'Lütfen bir iletişim tercihi seçiniz.');
                hataSayisi++;
            }

            if (mesaj === '') {
                this.hataYaz('mesaj-hata', 'Mesaj boş olamaz.');
                hataSayisi++;
            } else if (mesaj.length < 10) {
                this.hataYaz('mesaj-hata', 'Mesaj en az 10 karakter olmalıdır.');
                hataSayisi++;
            }

            if (!this.kvkk) {
                this.hataYaz('kvkk-hata', 'KVKK onayı vermelisiniz.');
                hataSayisi++;
            }

            if (hataSayisi === 0) {
                this.bildirimGoster('info', 'Vue.js doğrulama başarılı! Form şimdi gönderilecek.');
            } else {
                this.bildirimGoster('danger', 'Vue.js doğrulamasında ' + hataSayisi + ' adet hata bulundu. Lütfen alanları kontrol edin.');
            }
        }
    }
}).mount('#iletisimApp');
