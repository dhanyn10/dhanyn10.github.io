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
        <title>Mahasiswa : <?php echo $nama?></title>
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
                <li id="umum" class="active">Umum</li>
                <li id="konfigurasi">Konfigurasi</li>
            </ul>
        </aside>
        <div id="konten">
            <h2>Profil Kamu</h2>
            <button>Atur ulang profil</button>
            <table id="user-info"><?php include('user-info.php');?>  
            </table>
            <input id='perbarui'/>
        </div>
        <aside id="sidebar_kanan"></aside>
    </body>
</html>