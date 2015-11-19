<?php
    include('koneksi.php');
    $nim = $_POST['nim'];
    $pss = $_POST['pwd'];
    $hasil = "";
    $ambil_data = mysql_query("SELECT nim,kata_sandi FROM user where nim = '$nim'");
    $cek_data = mysql_fetch_assoc($ambil_data);
    $_nim = $cek_data['nim'];
    $_pss = $cek_data['kata_sandi'];

    if($nim == $_nim)
        $hasil .= "1";
    else
        $hasil .= "0";
    if($pss == $_pss)
        $hasil .= "1";
    else
        $hasil .= "0";

    echo $hasil;
?>