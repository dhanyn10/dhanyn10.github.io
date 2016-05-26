<?php
include "koneksi.php";
$nama   = $_POST['nama'];
$loket  = $_POST['loket'];
$puas   = $_POST['puas'];
if(isset($_POST['alasan']))
    $alasan = $_POST['alasan'];
else
    $alasan = null;
    $kueri = mysql_query("INSERT INTO bpjs_feedback(nama, loket, kepuasan, alasan) VALUES('$nama','$loket','$puas', '$alasan')");
    if($kueri)
        echo "sukses";
    else
        echo "gagal";
?>