<?php
    include('koneksi.php');
    $nim = $_POST['nim'];
    $ambil_nim = mysql_query("SELECT nim FROM user where nim = '$nim'");
    $cek_nim = mysql_num_rows($ambil_nim);
    if($cek_nim  == 0){
        echo 0;
    }else{
        echo 1;
    }
?>