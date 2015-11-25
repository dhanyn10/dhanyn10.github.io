<?php
    include('koneksi.php');

    $nim        = $_POST['nim'];
    $nama       = $_POST['nama'];
    $fakultas   = $_POST['fakultas'];
    $angkatan   = $_POST['angkatan'];
    $kontak     = $_POST['kontak'];
    $email      = $_POST['email'];
    $katasandi  = $_POST['ktsandi'];

    $ambil_nim = mysql_query("SELECT nim FROM user where nim = '$nim'");
    $cek_nim   = mysql_num_rows($ambil_nim);
    if($cek_nim == 0){
        $q = "INSERT INTO user ";
        $q .= "(nim, nama, fakultas, angkatan, kontak, email, kata_sandi, akses) ";
        $q .= "VALUES ";
        $q .= "('$nim','$nama','$fakultas', '$angkatan', '$kontak','$email','$katasandi','mhs')";
        mysql_query($q);
        session_start();
        $_SESSION['nama'] = "$nama";
        header('location:../halaman/masuk.php');
    }else{
        header('location:../halaman/registrasi.php');
    }
?>