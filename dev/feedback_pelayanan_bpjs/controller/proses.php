<?php
include "koneksi.php";

$typePengguna = $_POST["pengguna"];
if($typePengguna == "user"){
    $nama = $_POST["nama"];
    if($nama != null){
        $kueri = mysql_query("INSERT INTO bpjs_user (Nama, KataSandi,status) VALUES('$nama', '','$typePengguna')");
        session_start();
        $_SESSION["nama"] = $nama;
        header("location:../index.php");
    }else{
        header("location:../masuk.php");
    }
}else if($typePengguna == "admin"){
    $nama = $_POST["nama"];
    $sandi = $_POST["sandi"];
    $kueri = mysql_query("SELECT * FROM bpjs_user WHERE Nama = '$nama'");
    $cek = mysql_fetch_assoc($kueri);
    if($cek["KataSandi"] == $sandi){
        session_start();
        $_SESSION["nama"] = $nama;
        header("location:../index.php");
    }else{
        header("location:../masuk.php");
    }
}else{
    header("location:masuk.php");
}
?>