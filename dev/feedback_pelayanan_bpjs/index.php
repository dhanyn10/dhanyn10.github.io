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
        <?php include "template/head.php"?>
        <link href="resources/css/index.css" rel="stylesheet">
        <link href="resources/css/simple-sidebar.css" rel="stylesheet">
        <title>BPJS : Feedback pelayanan</title>
    </head>
    <body>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <span class="navbar-brand">
                        <img alt="Brand" src="../feedback_pelayanan_bpjs/resources/gambar/logo-bpjs.png"/>
                        Kuisioner BPJS Kesehatan
                    </span>
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
                                    <th>Tanggal</th>
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
        <style>
body{
    background: #76b852; /* fallback for old browsers */
    background: -webkit-linear-gradient(right, #76b852, #8DC26F);
    background: -moz-linear-gradient(right, #76b852, #8DC26F);
    background: -o-linear-gradient(right, #76b852, #8DC26F);
    background: linear-gradient(to left, #76b852, #8DC26F);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;      
}
        </style>
        <div class="box">
            <div class="pilih" id="pilihanloket">
                <h3>Pilihan loket</h3>
                <div class="container-fluid">
                    <div class="row-fluid">
                        <div class="col-xs-6">
                            <input type="radio" name="pilihanloket" id="pl1" value="1" checked/><label for="pl1">1</label>
                        </div>
                        <div class="col-xs-6">
                            <input type="radio" name="pilihanloket" id="pl2" value="2"/><label for="pl2">2</label>
                        </div>
                    </div>
                    <div class="row-fluid">
                        <div class="col-xs-6">
                            <input type="radio" name="pilihanloket" id="pl3" value="3"/><label for="pl3">3</label>
                        </div>
                        <div class="col-xs-6">
                            <input type="radio" name="pilihanloket" id="pl4" value="4"/><label for="pl4">4</label>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary btn-lg">Pilih</button>
                <div style="clear:right"></div>
            </div>
            <div class="pilih block" id="loket">
                <h3>Kepuasan Anda pada loket <span id="nomorloket"></span></h3>
                <div class="container-fluid">
                    <div class="col-md-6">
                        <input type="radio" name="puas" id="puas" value="puas" checked/>
                        <label for="puas" class=" fa fa-smile-o" aria-hidden="true"></label>
                    </div>
                    <div class="col-md-6">
                        <input type="radio" name="puas" id="tdkpuas" value="tidak puas"/>
                        <label for="tdkpuas" class=" fa fa-frown-o" aria-hidden="true"></label>
                    </div>
                </div>
                <button id="selesai1" class="btn btn-success btn-lg">Selesai</button>
                <button class="btn btn-primary btn-lg">Pilih</button>
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
                <button id="selesai2" class="btn btn-success btn-lg">Selesai</button>
                <div style="clear:right"></div>
            </div>
        </div>
        <?php
        }
        ?>
        <script src="resources/js/jquery.min.js"></script>
        <script src="resources/js/bootstrap.min.js"></script>
        <script src="resources/js/index.js"></script>
        <script src="resources/js/index-top.js"></script>
    </body>
</html>