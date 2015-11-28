$('document').ready(function(){
    $('#sidebar_kiri li').click(function(){
        $('#sidebar_kiri li').removeClass('aktif');
        $(this).addClass('aktif');
    });
    var elemen = "";
    var n = $('table')[0].getElementsByTagName('tr').length;
    $('button').click(function(){
        var p = Array(n);
        for(a = 0; a < n; a++){
            p[a] = $('table')[0].rows[a].cells[1].innerHTML;
            $('table')[0].rows[a].cells[1].innerHTML = "<input onkeyup='gantinilai()' class='atur-profil' type='text' placeholder='"+p[a]+"'/>";
        }
    });
    for(a = 0; a < n; a++){
        document.getElementsByClassName('atur-profil')[a]
    }
//        var up = Array(n);
//        var c = "";
//        for(a = 0; a<n; a++){
//            up[a] = $('table')[0].rows[a].cells[1].getElementsByTagName('input')[0].val();
//        }
//        for(a = 0; a<n; a++){
//            c += up[a];
//        }
//        $('#perbarui').val() = c;
});