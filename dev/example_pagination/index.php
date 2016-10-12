<?php
//koneksi dan menentukan database
mysql_select_db("world", mysql_connect("localhost", "root", ""));

//ambil beberapa data kolom di tabel
$ambil_data = mysql_query("SELECT Name, Region, Population, GNP FROM country");

$output_html = "<ul>";
while($data = mysql_fetch_assoc($ambil_data))
{
    $output_html .= "<li>". $data["Name"] ."</li>";
}
$output_html .= "</ul>";
echo $output_html;
?>