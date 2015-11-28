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

    if($akses == 'adm')
        $nama_akses = str_replace('adm','Admin',$akses);
    if($akses == 'pub')
        $nama_akses = str_replace('pub','Publisher',$akses);
    if($akses == 'mhs')
        $nama_akses = str_replace('mhs','Mahasiswa',$akses);
?>
<html>
    <head>
        <link href="../css/navigasi.css" type="text/css" rel='stylesheet'/>
        <link href="../css/event.css" type="text/css" rel="stylesheet"/>
        <script type="text/javascript" src="../js/jquery.js"></script>
        <script type="text/javascript" src="../js/event.js"></script>
        <title><?php echo $nama_akses; ?> : Event</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="../index.php">Beranda</a></li>
                <li class="aktif"><a>Event</a></li>
                <?php
                $h_akses = "";
                if($akses == "adm")
                    $h_akses = "../user/admin.php";
                else if($akses == "pub")
                    $h_akses = "../user/publiser.php";
                else if($akses == "mhs")
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
                    <button>Tambah Event Baru</button>
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
               $kolom .= '<input type="submit" value="hapus"/>';
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