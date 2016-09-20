$(document).ready(function(){    
    run_code();
    $("#asalkode").keyup(run_code);
    function run_code(){
        kode = $("#asalkode").val();
        $("#hasilkode").html(kode);
    }
});
