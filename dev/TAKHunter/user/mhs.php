<?php
    include('../controller/koneksi.php');
    include('../controller/sesi.php');
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
                <li><a href="">Profil</a></li>
            </ul>
            <a id="keluar" href="../keluar.php">Keluar</a>
        </nav>
        <aside id="sidebar_kiri">
            <ul>
                <li id="umum" class="aktif">Umum</li>
                <li id="konfigurasi">Konfigurasi</li>
            </ul>
        </aside>
        <div id="menu_utama">
<!--
            <h2>Profil Kamu</h2>
            <table>
                <?php
                $sql = "SELECT `COLUMN_NAME` FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = \'db_tak_hunter\' AND `TABLE_NAME` = \'user\'";
                $q = mysql_query('SELECT COLUMN_NAME FROM INFORMATION_SCHEMA COLUMNS WHERE TABLE_SCHEMA = db_tak_hunter AND TABLE_NAME = user');
                echo $q;
                ?>
            </table>
-->
        </div>
        <aside id="sidebar_kanan"></aside>
    </body>
</html>