<?php
include "koneksi.php";
$halaman    = 0;
$pagingpost = 1;
$paging     = mysql_query("SELECT * FROM bpjs_feedback");
$jmlbaris   = mysql_num_rows($paging);
$pagingbts  = 10;
$htmlPaging = "<ul class='pagination'>";
$br         = 0;
while($br < $jmlbaris){
    $br += $pagingbts;
    $halaman++;
}
if(isset($_GET['page'])){
    $pagingpost = $_GET['page'];
    if($pagingpost > $halaman){
        $pagingpost = $halaman;
    }
}else
    $pagingpost = 1;

//pembuatan paging halaman

if($halaman >= 5 && $pagingpost > 3){
    $htmlPaging .= "<li><a href='?page=1'>&lt;</a></li>
                    <li><a href='?page=".($pagingpost-1)."'>".($pagingpost-1)."</a></li>
                    <li><a href='?page=".($pagingpost)."'>".($pagingpost)."</a></li>";
    if($pagingpost + 2 <= $halaman){
        $htmlPaging .= "
                    <li><a href='?page=".($pagingpost+1)."'>".($pagingpost+1)."</a></li>
                    <li><a href='?page=".($halaman)."'>&gt;</a></li>
                    ";
    }
}else if($halaman >= 5 && $pagingpost <= 3){
    for($hl = 1; $hl <= $pagingpost; $hl++){
        $htmlPaging .= "<li><a aaa href='?page=".($hl)."'>".($hl)."</a></li>";
    }
    $htmlPaging .= "<li><a href='?page=".($pagingpost+1)."'>".($pagingpost+1)."</a></li>
                    <li><a href='?page=".($halaman)."'>".($halaman)."</a></li>";
}else{
    for($hl = 1; $hl < $halaman; $hl++){
        $htmlPaging .= "<li><a href='?page=".$hl."'>".$hl."</a></li>";
    }
}
$htmlPaging .= "</ul>";
print $htmlPaging;

///1 3 4 5 60 maks 60, posisi 4
/// if halaman > 5
?>