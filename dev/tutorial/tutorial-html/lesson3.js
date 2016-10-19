$(document).ready(function(){
    //auto run
    teksbiru();
    $(".asalkode").eq(0).keyup(teksbiru);

    function teksbiru()
    {
        c_teks = $(".asalkode").eq(0).val();
        $(".hasilkode").eq(0).html(c_teks);
    }
});