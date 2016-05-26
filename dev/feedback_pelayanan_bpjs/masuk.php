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
    <link href="resources/css/masuk.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    </head>
    <body>
        <header>Selamat datang di Formulir Masukan pengguna</header>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <img alt="Brand" src="...">
                    </a>
                </div>
            </div>
        </nav>
            <div class="login-page">
                <div class="form">
                    <form class="user-form" method="post" action="controller/proses.php">
                        <input type="hidden" name="pengguna" value="user"/>
                        <input type="text" name="nama" placeholder="Nama Anda"/>
                        <button type="submit">Masuk</button>
                        <a id="tampiladmin">masuk sebagai Admin</a>
                    </form>
                    <form class="admin-form" method="post" action="controller/proses.php">
                        <input type="hidden" name="pengguna" value="admin"/>
                        <input type="text" name="nama" placeholder="Username"/>
                        <input type="password" name="sandi" placeholder="password"/>
                        <button type="submit">Masuk</button>
                        <a id="tampiluser">masuk sebagai User</a>
                    </form>
                </div>
            </div>
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="resources/js/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="resources/js/bootstrap.min.js"></script>
        <script src="resources/js/masuk.js"></script>
    </body>
</html>