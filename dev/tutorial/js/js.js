$(document).ready(function(){    
    run_code();
    $("#asalkode").keyup(run_code);
    function run_code(){
        //copy kode to p tag
        kode = $("#asalkode").val();
        $("#hasilkode").html(kode);
        
        //change all arrow to bracket
        kode = kode.replace(new RegExp("<","g"), "[");
        kode = kode.replace(new RegExp(">","g"), "]");
        //kode = kode.replace(new RegExp("/","g"), "_");
        
        //check the input
        if(kode == "[h1]Latihan Pertama itu menyenangkan[/h1]")
            alert("yes");
    }
    //disable bracket
    $("#asalkode").keydown(function(kunci){
        if(kunci.which == 219 || kunci.which == 221)
            return false;
    });
});
