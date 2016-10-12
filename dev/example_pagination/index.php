<?php
//koneksi dan menentukan database
mysql_select_db("world", mysql_connect("localhost", "root", ""));

//index awal data yang ingin ditampilkan
$default_index = 0;
//batasan menampilkan data
$default_batas = 8;
if(isset($_GET['batas']))
{
    $default_batas = $_GET['batas'];
}

//ambil beberapa data kolom di tabel
$ambil_data = mysql_query("SELECT Name, Region, Population, GNP FROM country limit 0, ".$default_batas);

//menghitung total baris di tabel country
$total_baris = mysql_num_rows(
        //mengambil data di tabel country
        mysql_query("SELECT * FROM country")
    );

$output_html = "<table class='table table-bordered'>".
                    "<tr>".
                        "<th>Name</th>".
                        "<th>Region</th>".
                        "<th>Population</th>".
                        "<th>GNP</th>".
                    "<tr/>";
while($data = mysql_fetch_assoc($ambil_data))
{
    $output_html .= "<tr>".
                        "<td>". $data["Name"] ."</li>".
                        "<td>". $data["Region"] ."</li>".
                        "<td>". $data["Population"] ."</li>".
                        "<td>". $data["GNP"] ."</li>".
                    "</tr>";
}
$output_html .= "</table>";
?>
<html>
    <head>
        <!--styling instan dengan memanfaatkan framework bootstrap-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    </head>
    <body>
        <div class="container">
            <!--tayangkan tabel country-->
            <?php echo $output_html?>
            <?php echo $total_baris?>
        </div>
    </body>
</html>