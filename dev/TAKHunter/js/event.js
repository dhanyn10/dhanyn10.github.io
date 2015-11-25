
$('document').ready(function(){
    var tbl = "<button>pending</button><button>confirm</button><button>cancel</button>";
    var a = document.getElementsByTagName('table')[0].getElementsByTagName('tr').length;
    for(b = 1; b < a; b++){
        var c = document.getElementsByTagName('table')[0].rows[b].cells[2].innerHTML;
        if(c == 'pending'){
            document.getElementsByTagName('table')[0].rows[b].cells[2].innerHTML = tbl;
            document.getElementsByTagName('table')[0].rows[b].cells[2].getElementsByTagName('button')[0].className += ('tbl_aktif');
        }if(c == 'confirm'){
            document.getElementsByTagName('table')[0].rows[b].cells[2].innerHTML = tbl;
            document.getElementsByTagName('table')[0].rows[b].cells[2].getElementsByTagName('button')[1].className += ('tbl_aktif');
        }if(c == 'cancel'){
            document.getElementsByTagName('table')[0].rows[b].cells[2].innerHTML = tbl;
            document.getElementsByTagName('table')[0].rows[b].cells[2].getElementsByTagName('button')[2].className += ('tbl_aktif');
        }
    }
});