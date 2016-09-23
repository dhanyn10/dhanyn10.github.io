$(document).ready(function(){
    
    //auto run
    textBold();
    textItalic();
    $("#asalkode-bold").keyup(textBold);
    $("#asalkode-italic").keyup(textItalic);
    
    //bold auto run
    function textBold(k){
        kode = $("#asalkode-bold").val();
        $("#hasilkode-bold").html(kode);
    }
    
    //italic auto run
    function textItalic(k){
        kode = $("#asalkode-italic").val();
        $("#hasilkode-italic").html(kode);
    }
});