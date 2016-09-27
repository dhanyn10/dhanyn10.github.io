$(document).ready(function(){
    
    //disable bracket input
    $(".asalkode").each(function(){
        $(".asalkode").keydown(function(k){
            //219 keycode for "["
            //221 keycode for "]"
            if(k.which == 219 || k.which == 221)
                {
                    return false;
                }
        });
    });
    
    //auto run
    textBold();
    textItalic();
    textUnderline();
    $("#asalkode-bold").keyup(textBold);
    $("#asalkode-italic").keyup(textItalic);
    $("#asalkode-underline").keyup(textUnderline);
    
    //bold auto run
    function textBold(k){
        kode = $("#asalkode-bold").val();
        $("#hasilkode-bold").html(kode);
        kode = gantiTag(kode);
        var textBold = "Seperti diketahui oleh publik bahwa [b]myBold[/b] dari Web Tutorial kini semakin terkenal";
        if(kode == textBold)
        {
            $("#italic").css("display","block");
            window.location.href = "#italic";
        }
    }
    
    //italic auto run
    function textItalic(k)
    {
        kode = $("#asalkode-italic").val();
        $("#hasilkode-italic").html(kode);
        kode = gantiTag(kode);
        var textItalic = "CEO [i]The Italic[/i] diketahui hendak menggelar lomba di Web Tutorial 1 minggu lagi";
        if(kode == textItalic)
            {
                $("#underline").css("display","block");
                window.location.href = "#underline";
            }
    }
    
    //underline auto run
    function textUnderline(k)
    {
        kode = $("#asalkode-underline").val();
        $("#hasilkode-underline").html(kode);
        kode = gantiTag(kode);
        var textUnderline = "Web Tutorial menjadi pusat [u]percobaan teknologi baru[/u] demi kemajuan dunia";
        if(kode == textUnderline)
            {
                $("#lesson1-selesai").css("display","block");
                window.location.href = "#lesson1-selesai";
            }
        
    }
    
    /* ======================================
     * SKIP BUTTON
     * ======================================
    */
    
    //skip bold lesson
    $("#bold #lewati").click(function(){
        $("#italic").css("display","block");
        window.location.href = "#italic";
    });
    
    //skip italic lesson
    $("#italic #lewati").click(function(){
        $("#underline").css("display","block");
        window.location.href = "#underline";
    });
    
    //skip underline lesson
    $("#underline #lewati").click(function(){
        $("#lesson1-selesai").css("display","block");
        window.location.href = "#lesson1-selesai";
    });
});