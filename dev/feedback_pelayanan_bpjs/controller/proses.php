<?php
include "koneksi.php";

$typePengguna = $_POST["pengguna"];
if($typePengguna == "user"){
    $kueri = mysql_query("INSERT INTO bpjs_user (Nama, KataSandi,status) VALUES('user', 'user','user')");
    session_start();
    $_SESSION["nama"] = "user";
    header("location:/feedback_pelayanan_bpjs/index.php");
}else if($typePengguna == "admin"){
    $nama = $_POST["nama"];
    $sandi = $_POST["sandi"];
    $kueri = mysql_query("SELECT * FROM bpjs_user WHERE Nama = '$nama'");
    $cek = mysql_fetch_assoc($kueri);
    if($cek["KataSandi"] == $sandi){
        session_start();
        $_SESSION["nama"] = $nama;
        header("location:/feedback_pelayanan_bpjs/index.php");
    }else{
        header("location:/feedback_pelayanan_bpjs/masuk.php");
    }
}else{
    header("location:/feedback_pelayanan_bpjs/masuk.php");
}
?>