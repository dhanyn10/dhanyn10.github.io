<?php
include "koneksi.php";
$loket  = $_POST['loket'];
$puas   = $_POST['puas'];
if(isset($_POST['alasan']))
    $alasan = $_POST['alasan'];
else
    $alasan = null;

$tanggal = date("Y-m-d");
$kueri = mysql_query("INSERT INTO bpjs_feedback(loket, kepuasan, alasan, tanggal) VALUES('$loket','$puas', '$alasan','$tanggal')");
if($kueri)
    echo "sukses";
else
    echo "gagal";
?>