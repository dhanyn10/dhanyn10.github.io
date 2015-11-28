<?php
$ambil_kolom = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA";
$ambil_kolom .=".COLUMNS WHERE TABLE_SCHEMA = 'db_tak_hunter'";
$ambil_kolom .=" AND TABLE_NAME = 'user'";

$q = mysql_query($ambil_kolom);
while($baris = mysql_fetch_array($q)){
    $kolom = $baris['COLUMN_NAME'];
    echo "<tr>";
    echo "<td>".$kolom."</td>";
    $ambil_kolom = "SELECT ".$kolom." FROM user where nim = ".$nim;
    $kueri = mysql_query($ambil_kolom);
    $cetak = mysql_fetch_array($kueri);
    switch($cetak[$kolom]){
        case "mhs":
            $cetak[$kolom] = "Mahasiswa";
            break;
        case "pub":
            $cetak[$kolom] = "Publisher";
            break;
        case "adm":
            $cetak[$kolom] = "Administrator";
            break;
    }
    echo "<td>".$cetak[$kolom]."</td>";
    echo "</tr>";
}
?>
