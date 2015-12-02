<?php
    include('../controller/koneksi.php');
    include('sesi.php');
?>
<html>
    <head>
        <link href="../css/navigasi.css" type="text/css" rel="stylesheet"/>
        <link href="../css/admin.css" type="text/css" rel="stylesheet"/>
        <script src="../js/jquery.js" type="text/javascript"></script>
        <script src="../js/general_user.js" type="text/javascript"></script>
        <title>Administrator : <?php echo $nama;?></title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="../index.php">Beranda</a></li>
                <li><a href="../halaman/event.php">Event</a></li>
                <li class="aktif"><a href="">Profil</a></li>
            </ul>
            <a id="keluar" href="../halaman/keluar.php">Keluar</a>
        </nav>
        <aside id="sidebar_kiri">
            <ul>
                <li class="active">Umum</li>
                <li>Konfigurasi</li>
            </ul>
        </aside>
        <div id="konten">
            <h3>Profil</h3>
            <button id="atur-ulang-profil" onclick="aturUlang()">Atur ulang profil</button>
            <table id="user-info"><?php include('user-info.php');?></table>
        </div>
        <aside id="sidebar_kanan"></aside>
    </body>
</html>