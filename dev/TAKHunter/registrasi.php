<html>
    <head>
        <link href="css/registrasi.css" rel="stylesheet" type="text/css"/>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/registrasi.js"></script>
        <title></title>
    </head>
    <body>
        <div id="outer">
                <h2>Registrasi</h2>
            <form action="controller/verifikasi.php" method="post">
                <table>
                    <tr>
                        <td><span>NIM</span></td>
                        <td><input maxlength="10" type="text" name="nim" id="i_n"/></td>
                        <td><span id="tersedia"></span></td>
                    </tr>
                    <tr>
                        <td><span>Nama Pengguna</span></td>
                        <td><input maxlength="20" type="text" name="nama" id="i_n"/></td>
                    </tr>
                    <tr>
                        <td><span>Fakultas</span></td>
                        <td><select id="i_f" name="fakultas"></select></td>
                    </tr>
                    <tr>
                        <td><span>Angkatan</span></td>
                        <td><select id="i_a" name="angkatan"></select></td>
                    </tr>
                    <tr>
                        <td><span>Kontak</span></td>
                        <td><input maxlength="12" type="text" name="kontak" id="i_k"/></td>
                    </tr>
                    <tr>
                        <td><span>Email</span></td>
                        <td><input maxlength="40" type="text" name="email" id="i_e"/></td>
                    </tr>
                    <tr>
                        <td><span>Kata Sandi</span></td>
                        <td><input maxlength="12" type="password" name="ktsandi" id="i_p"/></td>
                    </tr>
                    <tr>
                        <td><span>Ulangi Sandi</span></td>
                        <td><input maxlength="12" type="password" name="u_ktsandi" id="i_up"/></td>
                    </tr>
                    <tr>
                        <td><a>Lupa Password</a></td>
                        <td><input type="submit" id="submit" value="Submit"/></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align:center"><span>Sudah punya akun?</span> <a href="masuk.php">Login!</a></td>
                    </tr>
                </table>
            </form>
        </div>
    </body>
</html>