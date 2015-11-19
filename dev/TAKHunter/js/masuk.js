$('document').ready(function(){
    $('#i_n').on('input', function(event){
        this.value = this.value.replace(/[^0-9]/g,'');
    });
    $('#i_n, #i_p').keyup(function(){
        var n = $('#i_n').val();
        var p = $('#i_p').val();
        if(n.length > 9 && p.length > 5){
            jQuery.ajax({
                url     : "./controller/_masuk.php",
                data    : {nim:n, pwd:p},
                type    : "POST",
                success : function(data){
                    if(data.charAt(0) === "0")
                        $('#i_n').css('border','1px solid red');
                    else
                        $('#i_n').css('border','1px solid white');
                    if(data.charAt(1) === "0")
                        $('#i_p').css('border','1px solid red');
                    else
                        $('#i_p').css('border','1px solid white');
                }
            });
        }else
            $('#i_n ,#i_p').css('border','0');
    });
});