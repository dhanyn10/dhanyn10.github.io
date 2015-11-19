<?php
    session_start();
    $nim    = $_SESSION['nim'];
    $nama   = $_SESSION['nama'];
    if($nim == null)
        header('location:masuk.php');
?>