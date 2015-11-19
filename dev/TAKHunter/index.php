<?php
    include('controller/koneksi.php');
    include('controller/sesi.php');
    $info   = mysql_query("SELECT * FROM user where nim = '$nim'");
    $baris  = mysql_fetch_assoc($info);
    $akses  = $baris['akses'];
?>
<html>
    <head>
        <link href="css/index.css" type="text/css" rel="stylesheet"/>
    </head>
    <body>
        <nav>
            <ul>
                <li><a>Beranda</a></li>
                <li><div id="subs">Event</div>
                    <ul>
                        <li>Open Recruitment</li>
                        <li>Education</li>
                        <li>Inspiring Talkshow</li>
                        <li>Concert</li>
                    </ul>
                </li>
                <li><a>Profil</a></li>
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