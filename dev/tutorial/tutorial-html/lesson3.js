$(document).ready(function(){
    //auto run
    teksbiru();
    $(".asalkode").eq(0).keyup(teksbiru);

    function teksbiru()
    {
        c_teks = $(".asalkode").eq(0).val();
        $(".hasilkode").eq(0).html(c_teks);
    }
    
    merah_kuning_hijau();
    (".asalkode").eq(1).keyup(merah_kuning_hijau);

    function merah_kuning_hijau()
    {
        c_teks = $(".asalkode").eq(1).val();
        $(".hasilkode").eq(1).html(c_teks);
    }
});