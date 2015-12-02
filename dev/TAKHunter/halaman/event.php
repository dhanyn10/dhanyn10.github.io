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
        <script type="text/javascript" src="../js/jquery.js"></script>
        <script type="text/javascript" src="../js/event.js"></script>
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
        <div>
            <fieldset>
                <legend>Event</legend>
                <table>
                    <a href="?eventbaru=true">Tambah Event Baru</a>
<?php
//tayangkan judul tabel
    $q1 = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA";
    $q1 .= " .COLUMNS WHERE TABLE_SCHEMA = 'db_tak_hunter'";
    $q1 .= " AND TABLE_NAME = 'event'";
   $kueri1 = mysql_query($q1);
   echo "<tr>";
    $cs = 0;
   while($baris = mysql_fetch_assoc($kueri1)){
       echo "<th id=".$baris['COLUMN_NAME'].">".$baris['COLUMN_NAME']."</th>";
       $cs++;
   }
   echo "</tr>";

   //tayangkan isi tabel
    $q2 = "SELECT * FROM event";
    $kueri2 = mysql_query($q2);
   while($baris = mysql_fetch_row($kueri2)){
       echo "<tr>";
       foreach($baris as $kolom){
           if($kolom == 'pending'){
               $kolom = '<input type="submit" id="tbl_aktif" value="pending"/>';
               $kolom .= '<input type="submit" value="konfirmasi"/>';
               $kolom .= '<input type="submit" value="hapus"/>';
           }if($kolom == 'confirm'){
               $kolom = '<input type="submit" value="pending"/>';
               $kolom .= '<input type="submit" id="tbl_aktif" value="konfirmasi"/>';
               $kolom .= '<input type="button" class="hapusevent" value="hapus"/>';
           }
           echo "<td>$kolom</td>";
       }
       echo "</tr>";
   }
?>
                </table>
<?php
    if(isset($_GET['eventbaru'])){
        echo "
        <div id='tambah-event'>
            <form name='tambahEvent'>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Lokasi</th>
                        <th>Waktu</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr>
                        <td><input type='text' name='namaEvent'/></td>
                        <td><input type='text' name='lokasiEvent'/></td>
                        <td><input type='text' name='waktuEvent'/></td>
                        <td><textarea type='text' name='keteranganEvent'></textarea></td>
                    </tr>
                </table>
            </form>
            <button onclick='tambahevent()'>Tambah</button>
            <a href='?' id='tbl-batal-event'>Batal</a>
        </div>
        ";
    }
?>
            </fieldset>
        </div>
    </body>
</html>