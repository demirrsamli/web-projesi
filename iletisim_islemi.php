<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: iletisim.html");
    exit();
}

$adsoyad = htmlspecialchars(trim($_POST['adsoyad'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$telefon = htmlspecialchars(trim($_POST['telefon'] ?? ''));
$konu = htmlspecialchars(trim($_POST['konu'] ?? ''));
$tercih = htmlspecialchars(trim($_POST['tercih'] ?? ''));
$mesaj = htmlspecialchars(trim($_POST['mesaj'] ?? ''));
$kvkk = isset($_POST['kvkk']) ? "Onaylandı" : "Onaylanmadı";

$konuMap = [
    'staj' => 'Staj Görüşmesi',
    'proje' => 'Proje Değerlendirmesi',
    'genel' => 'Genel Soru',
    'diger' => 'Diğer'
];
$konuMetin = $konuMap[$konu] ?? $konu;

$tercihMap = [
    'email' => 'E-posta ile ulaşın',
    'telefon' => 'Telefon ile ulaşın'
];
$tercihMetin = $tercihMap[$tercih] ?? $tercih;
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mesajınız Alındı | Web Projem</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- Kendi CSS dosyam -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid px-4">
            <a class="navbar-brand" href="index.html">Web Projem</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Menüyü aç/kapat">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Hakkımda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cv.html">CV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sehir.html">Şehrim</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="miras.html">Miras</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ilgi.html">İlgi Alanlarım</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="iletisim.html">İletişim</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">Giriş</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="bg-dark text-white py-5 text-center">
        <div class="container">
            <h1><i class="bi bi-check-circle-fill text-success"></i> Mesajınız Alındı</h1>
            <p class="mb-0">Form verileriniz aşağıda görüntülenmektedir.</p>
        </div>
    </header>

    <main class="container my-5">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow-sm">
                    <div class="card-header bg-success text-white">
                        <h4 class="mb-0">Form Verileri</h4>
                        <small>Aşağıdaki bilgiler tarafımıza ulaştırıldı</small>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-bordered mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Alan</th>
                                    <th scope="col">Değer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i class="bi bi-person me-2"></i>Ad Soyad</td>
                                    <td><?php echo $adsoyad; ?></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-envelope me-2"></i>E-posta</td>
                                    <td><?php echo $email; ?></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-telephone me-2"></i>Telefon</td>
                                    <td><?php echo $telefon; ?></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-tag me-2"></i>Konu</td>
                                    <td><?php echo $konuMetin; ?></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-arrow-right me-2"></i>İletişim Tercihi</td>
                                    <td><?php echo $tercihMetin; ?></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-chat-dots me-2"></i>Mesaj</td>
                                    <td><?php echo nl2br($mesaj); ?></td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-shield-check me-2"></i>KVKK Onayı</td>
                                    <td><?php echo $kvkk; ?></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-end bg-light">
                        <a href="iletisim.html" class="btn btn-secondary">
                            <i class="bi bi-arrow-left me-2"></i> Yeni Mesaj Gönder
                        </a>
                        <a href="index.html" class="btn btn-primary ms-2">
                            <i class="bi bi-house me-2"></i> Anasayfa
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="bg-dark text-white text-center py-4 mt-5">
        <div class="container">
            <p class="mb-0">&copy; 2025 Demir Şamlı - Web Teknolojileri Projesi</p>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
