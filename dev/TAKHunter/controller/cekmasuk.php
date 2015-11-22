<?php
    include('koneksi.php');

    $nim = $_POST['nim'];
    $katasandi = $_POST['ktsandi'];

    $ambil_nim = mysql_query("SELECT nim FROM user where nim = '$nim'");
    $cek_nim = mysql_num_rows($ambil_nim);
    if($cek_nim == 1){
        $kueri = mysql_query("SELECT kata_sandi FROM user where nim = '$nim'");
        $baris = mysql_fetch_assoc($kueri);
        $cek_sandi = $baris['kata_sandi'];
        if($katasandi == $cek_sandi){
            session_start();
            $kueri              = mysql_query("SELECT * FROM user where nim = '$nim'");
            $baris              = mysql_fetch_assoc($kueri);
            $atur_nim           = $baris['nim'];
            $atur_nama          = $baris['nama'];
            $_SESSION['nim']    = $atur_nim;
            $_SESSION['nama']   = $atur_nama;
            header('location:../index.php');
        }
        else
            header('location:../masuk.php');
    }else{
        header('location:../masuk.php');
    }
?>