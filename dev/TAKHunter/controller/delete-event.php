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