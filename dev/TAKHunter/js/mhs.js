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
function gantinilai(){
    var n = $('table')[0].getElementsByTagName('tr').length;
    var profil = Array(n);
    document.getElementById('perbarui').value = "";
    for(a = 0; a < n; a++){
        profil[a] = document.getElementsByClassName('atur-profil')[a].value;
        document.getElementById('perbarui').value += profil[a];
    }
}