$('document').ready(function(){
    $('#tbl-batal-event').click(function(){
        $('#tambah-event').remove();
    });
    $('input[type=date]').datepicker({dateFormat:'dd-mm-yy'});
});
function hapusevent(){
    namaevent = document.querySelector('.hapusevent');
    //dapatkan element tabel
    t = namaevent.parentElement.parentElement.parentElement.parentElement;
    
    //#dapatkan kolom "nama"#
    //dapatkan jumlah kolom di tabel event
    jc_nama = t.rows[0].cells.length;
    
    //variabel untuk menampung lokasi kolom
    lc_nama = 0;
    
    //lakukan perulangan sebanyak jc_nama
    for(a = 0; a < jc_nama; a++){
        //tampung setiap nama kolom ke variabel cekNamaKolom
        cekNamaKolom = $('table')[0].rows[0].cells[a].innerHTML;
        if(cekNamaKolom.toLowerCase() == "nama")
            lc_nama = a;
    }
    
    //dapatkan nama event pada nilai indeks lc_nama
    namaEvent = namaevent.parentNode.parentNode.childNodes[lc_nama].innerHTML;
        jQuery.ajax({
            url : "../controller/delete-event.php",
            data : "namaEvent="+namaEvent,
            type : "POST",
            success : function(hasil){
                g = $('table')[0].rows[0].innerHTML;
                    $('table')[0].innerHTML = g + hasil;
                    location.reload(true);
            }
        });
}
function tambahevent(){
    jb = $('table')[1].rows.length;
    
    tbhEvent = Array(jb * 2);
    r = 0;
    newEvent = "";
    valEvent = "";
    for(a = 0; a < (jb * 2) ; a+= 2){
        tbhEvent[a] = document.getElementsByTagName('table')[1].rows[r].cells[0].innerHTML;
        tbhEvent[a+1] = document.getElementsByTagName('table')[1].getElementsByClassName('tbh-val')[r].value;
        if(tbhEvent[a] == "waktu"){
            oldtgl = tbhEvent[a+1].split("-");
            tbhEvent[a+1] = oldtgl[2] + "-" + oldtgl[1] + "-" + oldtgl[0];
        }
        newEvent += tbhEvent[a]+", ";
        valEvent +="'"+tbhEvent[a+1]+"', ";
        r++;
    }
    console.info(newEvent + " " + valEvent);
    newEvent = newEvent.substring(0, newEvent.length-2);
    valEvent = valEvent.substring(0, valEvent.length-2);
    console.info("INSERT INTO event ("+newEvent+") VALUES ("+valEvent+")");
    
    jQuery.ajax({
        url : "../controller/atur_event.php",
        data : {dEvent:newEvent, vEvent:valEvent},
        type : "POST",
        success : function(hasil){
            if(hasil != "gagal"){
                $('table')[0].innerHTML = hasil;
                location.reload();
            }
            else
                alert("gagal");
        }
    });
}