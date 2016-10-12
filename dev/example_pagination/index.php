<?php
//koneksi dan menentukan database
mysql_select_db("world", mysql_connect("localhost", "root", ""));

//ambil beberapa data kolom di tabel
$ambil_data = mysql_query("SELECT Name, Region, Population, GNP FROM country");

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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    </head>
    <body>
        <div class="container">
        <?php echo $output_html?>
        </div>
    </body>
</html>