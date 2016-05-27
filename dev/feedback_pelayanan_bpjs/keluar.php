<?php
session_start();
session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include "template/head.php"?>
        <link href="resources/css/keluar.css" rel="stylesheet">
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
            </div>
        </nav>
        <div id="status">
            <h4>Anda telah keluar</h4>
            <a class="btn btn-danger" href="masuk.php">masuk lagi</a>
        </div>
    </body>
</html>