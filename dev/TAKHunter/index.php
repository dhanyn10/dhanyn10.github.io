<?php
    include('controller/koneksi.php');
    session_start();
    $nim    = $_SESSION['nim'];
    $nama   = $_SESSION['nama'];
    if($nim == null)
        header('location:halaman/masuk.php');
    $info   = mysql_query("SELECT * FROM user where nim = '$nim'");
    $baris  = mysql_fetch_assoc($info);
    $akses  = $baris['akses'];
?>
<html>
    <head>
        <script src="js/datatables/jquery-1.11.1.min.js"></script>
        <link href="css/navigasi.css" type="text/css" rel="stylesheet"/>
        <link href="css/index.css" type="text/css" rel="stylesheet"/>
        <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="css/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/datatables/dataTables.bootstrap.js"></script>
        <script src="js/datatables/jquery.dataTables.js"></script>
        <script src="js/datatables/jquery.dataTables.min.js"></script>
        <title>TAK Hunter</title>
    </head>
    <body>
        <nav>
            <ul>
                <li class="aktif"><a>Beranda</a></li>
                <li><a href="halaman/event.php">Event</a></li>
                <?php
                $h_akses = "";
                if($akses == "Administrator")
                    $h_akses = "user/admin.php";
                else if($akses == "Publisher")
                    $h_akses = "user/publiser.php";
                else if($akses == "Mahasiswa")
                    $h_akses = "user/mhs.php";
                ?>
                <li><a href="<?php echo $h_akses?>">Profil</a></li>
            </ul>
            <a id="keluar" href="./halaman/keluar.php">Keluar</a>
        </nav>
        <div class="luar">
            <aside id="s_kiri"></aside>
            <aside id="konten">
    <?php
    $q1 = mysql_query("SELECT nama, keterangan FROM event");
    while($pos = mysql_fetch_assoc($q1)){
        echo "<div class='post'>";
        echo "<h2>".$pos['nama']."</h2>";
        echo "<img src=''/>";
        echo "<p>".$pos['keterangan']."</p>";
        echo "</div>";
    }
    ?>
            </aside>
            <aside id="s_kanan">
            <div id="pengguna">
                
            <span><?php echo $nama;?></span>
                <?php
                    if($akses == "adm"){
                        //lalala
                    }else if($akses == "pub"){
                ?>
            <h2>Event Saat ini</h2>
            <ul>
                <li>Event 1</li>
                <li>Event 2</li>
                <li>Event 3</li>
            </ul>
                <?php
                    }else if($akses == "mhs"){
                ?>
            <ul>
                <li>TAK saat ini
                <br/>
                    <div class="tak" id="tak_saat_ini"></div>
                </li>
                <li>TAK minimal yang dibutuhkan
                    <div class="tak" id="tak_minimal"></div>
                </li>
            </ul>
                <?php }?>
            </div>
        </aside>
            <footer></footer>
        </div>
    </body>
</html>