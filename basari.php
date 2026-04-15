<?php
if (!isset($_GET['no']) || trim($_GET['no']) === '') {
    header("Location: login.html");
    exit;
}
$ogrenci_no = $_GET['no'];
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hoşgeldiniz | Web Projem</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6">
                <div class="card shadow">
                    <div class="card-body text-center p-5">
                        <h2 class="card-title mb-4">Hoşgeldiniz <?php echo htmlspecialchars($ogrenci_no, ENT_QUOTES, 'UTF-8'); ?></h2>
                        <p class="card-text">Giriş işleminiz başarıyla tamamlandı.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
