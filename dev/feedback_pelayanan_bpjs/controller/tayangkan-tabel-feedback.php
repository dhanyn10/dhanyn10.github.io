<?php
$kueriTabelFeedback = mysql_query("SELECT * FROM bpjs_feedback");
while($cetak = mysql_fetch_assoc($kueriTabelFeedback)){
    print   "<tr>".
                "<td class='tanggal'>".$cetak["tanggal"]."</td>".
                "<td>".$cetak["loket"]."</td>".
                "<td>".$cetak["kepuasan"]."</td>".
                "<td>".$cetak["alasan"]."</td>".
            "<tr/>";
}
?>