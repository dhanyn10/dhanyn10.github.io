
$('document').ready(function(){
    var tbl = "<input type='submit' value='pending'/><input type='submit' value='confirm'/><input type='submit' value='cancel'/>";
    var a = document.getElementsByTagName('table')[0].getElementsByTagName('tr').length;
    for(b = 1; b < a; b++){
        var c = document.getElementsByTagName('table')[0].rows[b].cells[2].innerHTML;
        if(c == 'pending'){
            document.getElementsByTagName('table')[0].rows[b].cells[2].innerHTML = tbl;
            document.getElementsByTagName('table')[0].rows[b].cells[2].getElementsByTagName('input')[0].className += ('tbl_aktif');
        }if(c == 'confirm'){
            document.getElementsByTagName('table')[0].rows[b].cells[2].innerHTML = tbl;
            document.getElementsByTagName('table')[0].rows[b].cells[2].getElementsByTagName('input')[1].className += ('tbl_aktif');
        }if(c == 'cancel'){
            document.getElementsByTagName('table')[0].rows[b].cells[2].innerHTML = tbl;
            document.getElementsByTagName('table')[0].rows[b].cells[2].getElementsByTagName('input')[2].className += ('tbl_aktif');
        }
    }
});