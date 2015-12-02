<?php
    include('koneksi.php');
    include('../user/sesi.php');

    //melihat type akses
    $akses = mysql_query("SELECT akses from user WHERE nim='$nim'");
    $akses = mysql_fetch_assoc($akses);
    $akses = $akses['akses'];

    if($akses == "Administrator"){
        $namaevent = $_POST['namaEvent'];
        $kueri = mysql_query("DELETE FROM event WHERE nama='$namaevent'");
        if($kueri){
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
        }else
            echo "gagal";
    }
?>