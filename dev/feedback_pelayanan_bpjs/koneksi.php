<?php
    $host   = "localhost";
    $user   = "root";
    $pass   = "";
    
    $koneksi    = mysql_connect($host, $user, $pass);
    $dbase      = mysql_select_db("db_bpjs_tulungagung", $koneksi);

    if(!($koneksi)){
        "terjadi kesalahan koneksi";
    }

?>