<?php
    include('../controller/koneksi.php');
    include('sesi.php');
?>
<html>
    <head>
        <link href="../css/navigasi.css" type="text/css" rel="stylesheet"/>
        <link href="../css/admin.css" type="text/css" rel="stylesheet"/>
        <script src="../js/jquery.js" type="text/javascript"></script>
        <script src="../js/admin.js" type="text/javascript"></script>
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
                <li class="active">Umum</li>
                <li>Konfigurasi</li>
            </ul>
        </aside>
        <div></div>
        <aside id="sidebar_kanan"></aside>
    </body>
</html>