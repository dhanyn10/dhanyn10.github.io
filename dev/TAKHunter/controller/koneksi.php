<?php
    $namahost = "localhost";
    $username = "root";
    $password = "";

    $koneksi = mysql_connect($namahost, $username, $password);
    $dbase   = mysql_select_db("db_tak_hunter", $koneksi);
    if(!($koneksi))
        echo "kesalahan koneksi";
    if(!($dbase)){//jika tidak ada, buat database
        mysql_query("CREATE DATABASE IF NOT EXISTS db_tak_hunter");
        $kueri = "CREATE TABLE user (";
        $kueri .="nim INT(10) PRIMARY KEY,";
        $kueri .="nama VARCHAR(20) NOT NULL,";
        $kueri .="kata_sandi VARCHAR(12) NOT NULL,";
        $kueri .="akses VARCHAR(3) NOT NULL"; 
        $kueri .= ")";
        mysql_query($kueri);
    }
?>