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
        kode = gantiTag(kode);
        var mybold  = "Seperti diketahui oleh publik bahwa [b]myBold[/b] ";
            mybold += "telah mengakuisisi perusahaan teknologi ";
            mybold += "terbesar kedua di dunia";
        if(kode == mybold){
            alert("berhasil");
        }
    }
    
    //italic auto run
    function textItalic(k){
        kode = $("#asalkode-italic").val();
        $("#hasilkode-italic").html(kode);
        gantiTag(kode);
    }
});