<?php
//koneksi dan menentukan database
mysql_select_db("world", mysql_connect("localhost", "root", ""));

//index awal data yang ingin ditampilkan
$default_index = 0;

//batasan menampilkan data
$default_batas = 8;

//jika terdapat nilai batas di URL, gunakan untuk mengganti nilai default $default_batas
if(isset($_GET['batas']))
{
    $default_batas = $_GET['batas'];
}

//jika terdapat nilai halaman di URL, gunakan untuk mengganti nilai dafault dari $default_index
if(isset($_GET['halaman']))
{
    $default_index = ($_GET['halaman']-1) * $default_batas;
}

/*
 * ambil beberapa data kolom di tabel dengan data yang ditayangkan
 * mulai dari index ke ($default_index) dengan jumlah hingga
 * sebanyak ($default_batas)
*/
$ambil_data = mysql_query("SELECT Name, Region, Population, GNP FROM country limit ".$default_index.", ".$default_batas);

#menghitung total baris di tabel country
$total_baris = mysql_num_rows(
        //mengambil data di tabel country
        mysql_query("SELECT * FROM country")
    );

# MEMBUAT TOMBOL PAGING
$nomor_paging = 1;
$html_paging = "<ul class='pagination'>";
while($total_baris - $default_batas > 0)
{
    $html_paging .= "<li><a href='?halaman=".$nomor_paging."&batas=".$default_batas."'>".$nomor_paging."</a></li>";
    $nomor_paging++;
    $total_baris -= $default_batas;
}
if($total_baris > 0)
{
    $html_paging .= "<li><a href='?halaman=".$nomor_paging."&batas=".$default_batas."'>".$nomor_paging."</a></li>";
}
$html_paging .= "</ul>";

# MEMBUAT TABEL YANG MENAYANGKAN DATA
$output_html = "<table class='table table-bordered'>".
                    "<tr>".
                        "<th>Nomor</th>".
                        "<th>Name</th>".
                        "<th>Region</th>".
                        "<th>Population</th>".
                        "<th>GNP</th>".
                    "<tr/>";

//perulangan membuat list data
$nomor_baris = $default_index + 1;
while($data = mysql_fetch_assoc($ambil_data))
{
    $output_html .= "<tr>".
                        "<td>".$nomor_baris."</td>".
                        "<td>".$data["Name"]."</td>".
                        "<td>".$data["Region"]."</td>".
                        "<td>".$data["Population"]."</td>".
                        "<td>".$data["GNP"]."</td>".
                    "</tr>";
    $nomor_baris++;
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
            <p>Tampilkan hingga : <input class='form-control' value='<?php echo $default_batas?>'/> baris</p>
            <!--tayangkan tabel country-->
            <?php echo $output_html?>
            <?php echo $html_paging?>
        </div>
    </body>
</html>