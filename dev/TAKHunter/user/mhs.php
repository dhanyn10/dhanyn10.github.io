<?php
    include('../controller/koneksi.php');
    include('sesi.php');
    $kueri = mysql_query("SELECT * FROM user");
    $baris = mysql_num_fields($kueri);
?>
<html>
    <head>
        <link href="../css/navigasi.css" type="text/css" rel="stylesheet"/>
        <link href="../css/mhs.css" type="text/css" rel="stylesheet"/>
        <script src="../js/jquery.js" type="text/javascript"></script>
        <script src="../js/mhs.js" type="text/javascript"></script>
        <title><?php echo $nama?></title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="../index.php">Beranda</a></li>
                <li><a>Event</a></li>
                <li class="aktif"><a href="">Profil</a></li>
            </ul>
            <a id="keluar" href="../keluar.php">Keluar</a>
        </nav>
        <aside id="sidebar_kiri">
            <ul>
                <li id="umum" class="active">Umum</li>
                <li id="konfigurasi">Konfigurasi</li>
            </ul>
        </aside>
        <div id="menu_utama">
            <h2>Profil Kamu</h2>
            <table>
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
                    echo "<td>".$cetak[$kolom]."</td>";
                    echo "</tr>";
                }
                ?>
            </table>
        </div>
        <aside id="sidebar_kanan"></aside>
    </body>
</html>