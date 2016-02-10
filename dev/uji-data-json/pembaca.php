<?php
$sumber = "statistik.json";
$konten = file_get_contents($sumber);
$data = json_decode($konten,true);
$mulai = 0;
$selesai = 10;
if(isset($_GET['hal'])){
    $n_hal = $_GET['hal'];
    $n_hal --;
    $mulai = $n_hal * 10;
    $selesai = $mulai + 10;
    if($selesai >= count($data))
        $selesai = count($data);
}
?>

<html>
    <head>
        <link href="style.css" rel="stylesheet"/>
    </head>
    <body>
        <header>Data Pengaduan Masyarakat dari data.go.id</header>
        <h3>Jumlah data : <?php echo count($data)?></h3>
        <span>Menampilkan  data ke <?php echo ($mulai+1)?> hingga <?php echo $selesai?></span>
        <table>
            <tr>
                <th rowspan="2">Nomor</th>
                <th rowspan="2">ID Statistik</th>
                <th rowspan="2">Nama Instansi</th>
                <th colspan="3">Jumlah Keluhan</th>
            </tr>
            <tr><th>Belum</th><th>Proses</th><th>Selesai</th></tr>
            <?php
            while($mulai < $selesai){
                print "<tr>";
                print "<td>".($mulai+1)."</td>";
                print "<td>".$data[$mulai]["id"]."</td>";
                print "<td>".$data[$mulai]["InstansiName"]."</td>";
                print "<td>".$data[$mulai]["belum"]."</td>";
                print "<td>".$data[$mulai]["proses"]."</td>";
                print "<td>".$data[$mulai]["selesai"]."</td>";
                print "</tr>";
                $mulai++;
            }
            ?>
        </table>
        <?php
        //menghitung modulus 10 dari total jumlah data
        $sisa = count($data);
        $sisa = $sisa % 10;
        
        //menghitung jumlah data setelah dikurangi sisa
        $jumlah = count($data) - $sisa;
        
        //menentukan jumlah halaman tabel yang akan ditayangkan
        $perulangan = $jumlah/10;
        $perulangan += 1;
        ?>
        <fieldset id="atur_tabel">
            <legend>Halaman:</legend>
            <?php
            for($a = 0; $a < $perulangan; $a++){
                echo "<a href='?hal=".($a+1)."'>".($a+1)."</a>";
            }
            ?>
        </fieldset>
    </body>
</html>