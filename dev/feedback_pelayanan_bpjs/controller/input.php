<?php
include "koneksi.php";
$loket  = $_POST['loket'];
$puas   = $_POST['puas'];
if(isset($_POST['alasan']))
    $alasan = $_POST['alasan'];
else
    $alasan = null;

    $kueri = mysql_query("INSERT INTO bpjs_feedback(loket, kepuasan, alasan) VALUES('$loket','$puas', '$alasan')");
    if($kueri)
        echo "sukses";
    else
        echo "gagal";
?>