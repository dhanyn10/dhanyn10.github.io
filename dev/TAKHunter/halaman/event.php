<?php
    include('../controller/koneksi.php');
    session_start();
    $nim    = $_SESSION['nim'];
    if($nim == null)
        header('location:masuk.php');

    $info   = mysql_query("SELECT * FROM user where nim = '$nim'");
    $baris  = mysql_fetch_assoc($info);
    $akses  = $baris['akses'];
    if(isset($_GET['cancel']))
        echo "batal";
?>
<html>
    <head>
        <link href="../css/navigasi.css" type="text/css" rel='stylesheet'/>
        <link href="../css/event.css" type="text/css" rel="stylesheet"/>
        <link href="../jquery-ui/jquery-ui.structure.min.css" type="text/css" rel="stylesheet"/>
        <link href="../jquery-ui/jquery-ui.theme.min.css" type="text/css" rel="stylesheet"/>
        <script type="text/javascript" src="../js/jquery.js"></script>
        <script type="text/javascript" src="../js/event.js"></script>
        <script type="text/javascript" src="../jquery-ui/jquery-ui.min.js"></script>
        <title><?php echo $akses; ?> : Event</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="../index.php">Beranda</a></li>
                <li class="aktif"><a>Event</a></li>
                <?php
                $h_akses = "";
                if($akses == "Administrator")
                    $h_akses = "../user/admin.php";
                else if($akses == "Publisher")
                    $h_akses = "../user/publiser.php";
                else if($akses == "Mahasiswa")
                    $h_akses = "../user/mhs.php";
                ?>
                <li><a href="<?php echo $h_akses?>">Profil</a></li>
            </ul>
            <a id="keluar" href="keluar.php">Keluar</a>
        </nav>
        <div class="luar">
            <fieldset>
                <legend>Event</legend>
<?php
    if(isset($_GET['eventbaru'])){
    $q1 = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA";
    $q1 .= " .COLUMNS WHERE TABLE_SCHEMA = 'db_tak_hunter'";
    $q1 .= " AND TABLE_NAME = 'event'";
    $kueri1 = mysql_query($q1);

        echo "
        <div id='tambah-event'>
                <table>
                ";
           while($baris = mysql_fetch_assoc($kueri1)){
               echo "<tr>";
               if(preg_match("/lokasi/i",$baris['COLUMN_NAME']))
                   echo "<td>".$baris['COLUMN_NAME']."</td><td><textarea class='tbh-val' required></textarea></td>";
               else if(preg_match("/status/i",$baris['COLUMN_NAME']))
                   echo "<td>".$baris['COLUMN_NAME']."</td><td><input type='text' class='tbh-val' value='confirm' required='true' readonly/></td>";
               else if(preg_match("/waktu/i",$baris['COLUMN_NAME']))
                   echo "<td>".$baris['COLUMN_NAME']."</td><td><input type='date' class='tbh-val' required='true'></td>";
               else if(preg_match("/keterangan/i",$baris['COLUMN_NAME']))
                   echo "<td>".$baris['COLUMN_NAME']."</td><td><textarea required='true' class='tbh-val'></textarea></td>";
               else
                   echo "<td>".$baris['COLUMN_NAME']."</td><td><input type='text' required='true' class='tbh-val'></td>";
               echo "</tr>";
           }

        echo "
                </table>
            <button onclick='tambahevent()'>Tambah</button>
            <a href='?' id='tbl-batal-event'>Selesai</a>
        </div>
        ";
    }
        $jml_baris = mysql_query("SELECT * FROM event");
        echo mysql_num_rows($jml_baris);
?>

                <table>
                    <a href="?eventbaru=true">Tambah Event Baru</a>
<?php
//tayangkan judul tabel
    $q1 = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA";
    $q1 .= " .COLUMNS WHERE TABLE_SCHEMA = 'db_tak_hunter'";
    $q1 .= " AND TABLE_NAME = 'event'";
   $kueri1 = mysql_query($q1);
   echo "<tr>";
   while($baris = mysql_fetch_assoc($kueri1)){
       echo "<th id=".$baris['COLUMN_NAME'].">".$baris['COLUMN_NAME']."</th>";
   }
   echo "</tr>";

   //tayangkan isi tabel
    $q2 = "SELECT nama, lokasi, status, DATE_FORMAT(waktu, '%d-%m-%Y'), keterangan FROM event";
    $kueri2 = mysql_query($q2);
   while($baris = mysql_fetch_row($kueri2)){
       echo "<tr>";
       foreach($baris as $kolom){
           if($kolom == 'pending'){
               $kolom = '<input type="submit" id="tbl_aktif" value="pending"/>';
               $kolom .= '<input type="submit" value="konfirmasi"/>';
               $kolom .= '<input type="submit" value="hapus"/>';
           }if($kolom == 'confirm'){
               $kolom = '<span>Pending</span>';
               $kolom .= '<input type="submit" id="tbl_aktif" value="konfirmasi"/>';
               $kolom .= '<button onclick="hapusevent()" class="hapusevent" >Hapus</button>';
           }
           echo "<td>$kolom</td>";
       }
       echo "</tr>";
   }
?>
                </table>
            </fieldset>
        </div>
    </body>
</html>