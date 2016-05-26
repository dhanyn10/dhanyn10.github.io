<?php
include "koneksi.php";
session_start();
$nama = $_SESSION["nama"];
$kueri  = mysql_query("SELECT * FROM bpjs_user WHERE Nama = '$nama'");
$status = mysql_fetch_assoc($kueri);
if($status['status'] == "admin"){
    $posisi = "admin";
}else if($status['status'] == "user"){
    $posisi = "user";
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>BPJS : Masukan Pengguna</title>

        <!-- Bootstrap -->
        <link href="resources/css/bootstrap.min.css" rel="stylesheet">
        <link href="resources/css/index.css" rel="stylesheet">
        <link href="resources/fontawesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="resources/css/simple-sidebar.css" rel="stylesheet">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Feedback BPJS Kesehatan</a>
                </div>
             <ul class="nav navbar-nav navbar-right">
                    <li><a href="keluar.php"><span class="fa fa-sign-out"></span>Keluar</a></li>
                </ul>
            </div>
        </nav>
        <?php
        if($nama == null){
            header("location:masuk.php");
        }
        if($posisi == "admin"){
            ?>
        <div id="wrapper">
                    <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand">
                        <span id="nama"><?php echo "Selamat datang ".$nama?></span>
                    </li>
                    <li>
                        <span id="lihat-tabel-user">User</span>
                    </li>
                    <li>
                        <span id="lihat-tabel-feedback">Tanggapan Pengguna</span>
                    </li>
                </ul>
            </div>
            <!-- /#sidebar-wrapper -->
            <!-- Page Content -->
            <div id="page-content-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
                            <table class="table table-bordered tabel-user">  
                                <tr>
                                    <th>Nama</th>
                                    <th>Status</th>
                                </tr>
                            <?php include "controller/tayangkan-tabel-user.php"?>
                            </table>
                            <table class="table table-bordered tabel-feedback">
                                <tr>
                                    <th>Nama</th>
                                    <th>Loket</th>
                                    <th>Kepuasan</th>
                                    <th>Alasan</th>
                                </tr>
                                <?php include "controller/tayangkan-tabel-feedback.php"?>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /#page-content-wrapper -->
        </div>
        <?php
        }
        else if($posisi == "user"){
        ?>
        <div class="box">
            <div class="pilih" id="pilihanloket">
                <p>Pilihan loket</p>
                <input type="radio" name="pilihanloket" id="pl1" value="1" checked/><label for="pl1">1</label>
                <input type="radio" name="pilihanloket" id="pl2" value="2"/><label for="pl2">2</label>
                <input type="radio" name="pilihanloket" id="pl3" value="3"/><label for="pl3">3</label>
                <input type="radio" name="pilihanloket" id="pl4" value="4"/><label for="pl4">4</label>
                <button class="btn btn-primary">Pilih</button>
                <div style="clear:right"></div>
            </div>
            <div class="pilih" id="loket">
                <p>Kepuasan Anda pada loket : <span id="nomorloket"></span></p>
                <input type="radio" name="puas" id="puas" value="puas" checked/><label for="puas">Puas</label>
                <input type="radio" name="puas" id="tdkpuas" value="tidak puas"/><label for="tdkpuas">Tidak</label>
                <button id="selesai1" class="btn btn-success">Selesai</button>
                <button class="btn btn-primary">Pilih</button>
                <div style="clear:right"></div>
            </div>
            <div class="pilih" id="tidakpuas">
                <p>Tuliskan alasan kenapa anda tidak puas</p>
                <input type="radio" name="tp" id="tp1" value="lama" checked/><label for="tp1">lama</label>
                <input type="radio" name="tp" id="tp2" value="tidak ramah"/><label for="tp2">Tidak ramah</label>
                <input type="radio" name="tp" id="tp3" value="tidak sesuai"/><label for="tp3">Tidak sesuai</label>
                <input type="radio" name="tp" id="tp4" value="lain-lain"/><label for="tp4">lain-lain
                    <textarea name="tp" placeholder="jelaskan alasan anda"></textarea>
                    <br/>
                </label>
                <button id="selesai2" class="btn btn-success">Selesai</button>
                <div style="clear:right"></div>
            </div>
        </div>
        <?php
        }
        ?>
        <script src="resources/js/jquery.min.js"></script>
        <script src="resources/js/bootstrap.min.js"></script>
        <script src="resources/js/index.js"></script>
    </body>
</html>