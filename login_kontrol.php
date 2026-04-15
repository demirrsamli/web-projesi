<?php
$dogru_kullanici = "b251210380@sakarya.edu.tr";
$dogru_sifre = "b251210380";

$kullanici = isset($_POST['kullanici']) ? trim($_POST['kullanici']) : '';
$sifre = isset($_POST['sifre']) ? trim($_POST['sifre']) : '';

if ($kullanici === $dogru_kullanici && $sifre === $dogru_sifre) {
    header("Location: basari.php?no=251210380");
    exit;
} else {
    header("Location: login.html?hata=1");
    exit;
}
?>
