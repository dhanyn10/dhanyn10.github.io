<?php
$kueriTabelUser = mysql_query("SELECT Nama, status FROM bpjs_user");
    while($cetak = mysql_fetch_assoc($kueriTabelUser)){
        print   "<tr>" .
                    "<td>".$cetak["Nama"]."</td>".
                    "<td>".$cetak["status"]."</td>".
                "<tr>";
    }
?>
