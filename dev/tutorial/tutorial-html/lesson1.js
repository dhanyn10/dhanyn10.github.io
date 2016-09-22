$(document).ready(function(){    
    //for heading 1
    h1();
    $(".asalkode").eq(0).keyup(h1);
    function h1()
    {
        //copy kode to p tag
        c_h1 = $(".asalkode").eq(0).val();
        $(".hasilkode").eq(0).html(c_h1);
        
        //change all arrow to bracket
        c_h1 = c_h1.replace(new RegExp("<","g"), "[");
        c_h1 = c_h1.replace(new RegExp(">","g"), "]");
        
        //check the input
        if(c_h1 == "[h1]Latihan pertama itu menyenangkan[/h1]"){
            $("#heading-all").css("display","block");
            $("#heading-skip").css("display","block");
        }
    }
    //for heading 2 to 6
    h_all();
    $(".asalkode").eq(1).keyup(h_all);
    function h_all()
    {
        //copy code tp p tag
        c_h_all = $(".asalkode").eq(1).val();
        $(".hasilkode").eq(1).html(c_h_all);
        
        //change all arrow to bracket
        c_h_all = c_h_all.replace(new RegExp("<","g"), "[");
        c_h_all = c_h_all.replace(new RegExp(">","g"), "]");
        
        //check the input
        var h_all  = "[h2]Latihan kedua juga menyenangkan[/h2]"+"\n";
            h_all += "[h3]Latihan ketiga Tak kalah menyenangkan[/h3]"+"\n";
            h_all += "[h4]Latihan keempat masih begitu menyenangkan[/h4]"+"\n";
            h_all += "[h5]Latihan kelima asyik banget[/h5]"+"\n";
            h_all += "[h6]Latihan keenam paling keren[/h6]";
        
        //if user already solve task for heading 2 to 6
        if(c_h_all == h_all)
            $("#heading-selesai").css("display","block");
    }
    
    //disable bracket
    $("#asalkode").keydown(function(kunci){
        if(kunci.which == 219 || kunci.which == 221)
            return false;
    });
    
    //skip heading 1
    $("#lewati-heading1").click(function(){
        $("#heading-all").css("display","block");
        $("#heading-skip").css("display","block");
    });
    
    //skip heading tutorial
    $("#heading-skip").click(function(){
        $("#heading-selesai").css("display","block");
    });
});
