<?php
    include('koneksi.php');
    $nim = $_POST['nim'];
    $nilai = $_POST['perintah'];
    $nilai = str_replace("_"," ",$nilai);


    //melihat type akses
    $akses = mysql_query("SELECT akses from user WHERE nim='$nim'");
    $akses = mysql_fetch_assoc($akses);
    $akses = $akses['akses'];

    if($akses == "Administrator"){
        ///
        $kueri = mysql_query("UPDATE user SET $nilai WHERE nim = '$nim'");
        if($kueri){
            $q = mysql_query("SELECT * FROM user WHERE nim = '$nim'");
            $array = mysql_fetch_row($q);
            echo json_encode($array);
        }else
            echo json_encode("gagal");

    }else{
        if(preg_match("/akses='Administrator'/i", $nilai)){
            echo json_encode("gagal");
        }else if(preg_match("/akses='Publisher'/i", $nilai) || preg_match("/akses='Mahasiswa'/i", $nilai) ){
            $kueri = mysql_query("UPDATE user SET $nilai WHERE nim = '$nim'");
            if($kueri){
                $q = mysql_query("SELECT * FROM user WHERE nim = '$nim'");
                $array = mysql_fetch_row($q);
                echo json_encode($array);
            }else
                echo json_encode("gagal");
        }else
            echo json_encode("gagal");
    }

?>