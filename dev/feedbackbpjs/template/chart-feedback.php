<?php
include "/controller/koneksi.php";
/*
=====================================================
| mengambil data berdasarkan tanggal saat ini
=====================================================
*/
$tanggalSekarang = date("Y-m-d");
$dataChart = mysql_query("SELECT * FROM bpjs_feedback WHERE `tanggal` = '$tanggalSekarang'");
$chartArray = array();
while($FetchDataChart = mysql_fetch_assoc($dataChart)){
    $chartArray[] = array(
        "loket" => $FetchDataChart['loket'],
        "kepuasan" => str_replace("tidak puas", "tidak_puas",$FetchDataChart['kepuasan'])
    );
}

/*
======================================================
| menentukan jumlah loket
======================================================
*/
$jmlLoket = 0;
for($a = 0; $a < count($chartArray); $a++){
    if($jmlLoket < $chartArray[$a]['loket']){
        $jmlLoket = $chartArray[$a]['loket'];
    }
}

$jalur = array();

// 1, 3, 2

for($a = 1; $a <= $jmlLoket; $a++){
    $jalur[$a][0] = $a;
    $jalur[$a][1] = 0;
    $jalur[$a][2] = 0;
}

for($a = 0; $a < count($chartArray); $a++){
    for($b = 1; $b <= $jmlLoket; $b++){
        if($chartArray[$a]['loket'] === strval($jalur[$b][0])){
            if($chartArray[$a]['kepuasan'] === "puas")
                $jalur[$b][1] += 1;
            else if($chartArray[$a]['kepuasan'] === "tidak_puas")
                $jalur[$b][2] += 1;
        }
    }
}
echo "data" .json_encode($chartArray)."<br/>";
echo "hasil :".json_encode($jalur);
?>
<!--
<script type="text/javascript" src="/resources/js/googlechart.js"></script>
<script type="text/javascript">
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Loket', 'Puas', 'Tidak Puas'],
        ['2014', 1000, 400],
        ['2015', 1170, 460],
        ['2016', 660, 1120],
        ['2017', 1030, 540]
    ]);

    var options = {
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
    chart.draw(data, options);
}
</script>-->
