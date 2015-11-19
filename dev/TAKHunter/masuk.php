    <html>
    <head>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/masuk.js"></script>
        <link href="css/masuk.css" rel="stylesheet" type="text/css"/>
        <title></title>
    </head>
    <body>
        <div id="outer">
                <h2>LOGIN</h2>
            <form action="controller/cekmasuk.php" method="post">
                <table>
                    <tr>
                        <td><span>NIM</span></td>
                        <td><input type="text" name="nim" id="i_n" maxlength="10"/></td>
                    </tr>
                    <tr>
                        <td><span>KATA SANDI</span></td>
                        <td><input type="password" name="ktsandi" id="i_p" maxlength="12"/></td>
                    </tr>
                    <tr>
                        <td><a>Lupa Password?</a></td>
                        <td><input type="submit" value="submit"/></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align:center"><span>Belum punya akun?</span> <a href="registrasi.php">Daftar!</a></td>
                    </tr>
                </table>
            </form>
        </div>
    </body>
</html>