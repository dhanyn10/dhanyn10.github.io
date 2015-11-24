<?php
    include('controller/koneksi.php');
    session_start();
    $nim    = $_SESSION['nim'];
    $nama   = $_SESSION['nama'];
    if($nim == null)
        header('location:masuk.php');
    $info   = mysql_query("SELECT * FROM user where nim = '$nim'");
    $baris  = mysql_fetch_assoc($info);
    $akses  = $baris['akses'];
    
    
?>
<html>
    <head>
        <link href="css/navigasi.css" type="text/css" rel="stylesheet"/>
        <link href="css/index.css" type="text/css" rel="stylesheet"/>
        <title>TAK Hunter</title>
    </head>
    <body>
        <nav>
            <ul>
                <li class="aktif"><a>Beranda</a></li>
                <li><a>Event</a></li>
                <?php
                $h_akses = "";
                if($akses == "adm")
                    $h_akses = "user/admin.php";
                else if($akses == "pub")
                    $h_akses = "user/publiser.php";
                else if($akses == "mhs")
                    $h_akses = "user/mhs.php";
                ?>
                <li><a href="<?php echo $h_akses?>">Profil</a></li>
            </ul>
            <a id="keluar" href="keluar.php">Keluar</a>
        </nav>
        <aside id="s_kiri">
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
    </body>
</html>