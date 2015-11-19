$("document").ready(function(){
    $('#i_n').on('input', function (event) { 
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    var fakultas = ['---','Rekayasa Industri','Informatika','Telekomunikasi','Elektro'];
    var html_f = "";
    for(a = 0; a< fakultas.length; a++){
        val_fakultas = fakultas[a].replace(' ', '');
        html_f += "<option value="+val_fakultas+">"+fakultas[a]+"</option>";
    }
    var angkatan = ['--',12,13,14,15];
    var html_a = "";
    for(a = 0; a < angkatan.length; a++){
        html_a += "<option value=20"+angkatan[a]+">20"+angkatan[a]+"</option>";
    }
    $('#i_f').html(html_f);
    $('#i_a').html(html_a);
    $('#i_n, :password').keyup(function(){
        var n   = $('#i_n').val(),
            p   = $('#i_p').val(),
            up  = $('#i_up').val();
        if(n.length > 9){
            jQuery.ajax({
                url     : "./controller/_registrasi.php",
                data    : "nim="+n,
                type    :  "POST",
                success : function(data){
                    if(data == 0)
                        $('#i_n').css('border', '1px solid white');
                    else
                        $('#i_n').css('border', '1px solid red');
                }
            });
        }else
            $('#i_n').css('border','0');
        if(p != up)
            $('#i_up').css('border','1px solid red');
        else
            $('#i_up').css('border','0');
    });
});
