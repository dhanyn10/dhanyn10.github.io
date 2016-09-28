$(document).ready(function(){
    
    //disable bracket input
    $(".asalkode").each(function(){
        $(".asalkode").keydown(function(k){
            //219 keycode for "["
            //221 keycode for "]"
            if(k.which == 219 || k.which == 221 || k.which == 32)
                {
                    return false;
                }
        });
    });
    
    /* ===================================
     * AUTO RUN
     * ===================================
     */
    //auto run for bold lesson
    textBold();
    $("#asalkode-bold").keyup(textBold);
    //auto run for italic lesson
    textItalic();
    $("#asalkode-italic").keyup(textItalic);
    //auto run for underline lesson
    textUnderline();
    $("#asalkode-underline").keyup(textUnderline);
    //auto run for paragraf lesson
    textParagraf();
    $("#asalkode-paragraf").keyup(textParagraf);
    
    //bold auto run
    function textBold(k){
        kode = $("#asalkode-bold").val();
        $("#hasilkode-bold").html(kode);
        kode = gantiTag(kode);
        var text_Bold = "Seperti diketahui oleh publik bahwa [b]myBold[/b] dari Web Tutorial kini semakin terkenal";
        if(kode == text_Bold)
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
        var text_Italic = "CEO [i]The Italic[/i] diketahui hendak menggelar lomba di Web Tutorial 1 minggu lagi";
        if(kode == text_Italic)
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
        var text_Underline = "Web Tutorial menjadi pusat [u]percobaan teknologi baru[/u] demi kemajuan dunia";
        if(kode == text_Underline)
            {
                $("#paragraf").css("display","block");
                window.location.href = "#paragraf";
            }
        
    }
    
    //paragraf auto run
    function textParagraf(k)
    {
        kode = $("#asalkode-paragraf").val();
        $("#hasilkode-paragraf").html(kode);
        kode = gantiTag(kode);
        var text_Paragraf  = "[p]Lorem ipsum dolor sit amet, consectetur adipiscing elit.[/p]";
            text_Paragraf += "[p]Curabitur nunc elit, feugiat ac sollicitudin eu, venenatis id tortor.[/p]";
            text_Paragraf += "[p]Maecenas mattis mattis diam eget posuere.[/p]";
        if(kode == text_Paragraf)
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
    $("#bold .lewati").eq(0).click(function(){
        $("#italic").css("display","block");
        window.scrollTo(0,document.body.scrollHeight);
    });
    
    //skip italic lesson
    $("#italic .lewati").eq(0).click(function(){
        $("#underline").css("display","block");
        window.scrollTo(0,document.body.scrollHeight);
    });
    
    //skip underline lesson
    $("#underline .lewati").eq(0).click(function(){
        $("#paragraf").css("display","block");
        window.scrollTo(0,document.body.scrollHeight);
    });
    
    //skip paragraf lesson
    $("#paragraf .lewati").eq(0).click(function(){
        $("#lesson1-selesai").css("display","block");
        window.scrollTo(0,document.body.scrollHeight);
    });
});