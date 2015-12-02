var n = "";
var p = "";

$('document').ready(function(){
    $('#sidebar_kiri li').click(function(){
        $('#sidebar_kiri li').removeClass('aktif');
        $(this).addClass('aktif');
    });
    var elemen = "";
    $('#atur-ulang-profil').click(function(){
        n = $('table')[0].getElementsByTagName('tr').length;
        p = Array(n);
        for(a = 0; a < n; a++){
            p[a] = $('table')[0].rows[a].cells[1].innerHTML;
            $('table')[0].rows[a].cells[1].innerHTML = "<input onkeyup='gantinilai()' class='atur-profil' type='text' placeholder='"+p[a]+"'/>";
        }
        $('#perbarui').val("SELECT");
        $('#konten').append('<br/>');
        $('#konten').append('<button>Perbaharui</button>');
        $('#atur-ulang-profil').remove();
    });
});
function gantinilai(){
    var profil = Array(n*2);
    var r = 0;
    for(a = 0; a < (n*2); a+= 2){
        profil[a] = document.getElementById('user-info').rows[r].cells[0].innerHTML;
        profil[a+1] = document.getElementsByClassName('atur-profil')[r].value;
        r++;
    }
    var com = "";
    var valSet = "";
    for(a = 0; a < n*2; a+=2){
        if(profil[a+1].length > 0)
            valSet += " "+profil[a] + "='" + profil[a+1] + "',";
    }
    valSet = valSet.substring(0,valSet.length-1);
    com = "UPDATE user SET"+valSet+" WHERE nim = "+p[0];
    console.info(com);
}