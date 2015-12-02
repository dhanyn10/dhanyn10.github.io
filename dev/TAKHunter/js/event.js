$('document').ready(function(){
    $('#tbl-batal-event').click(function(){
        $('#tambah-event').remove();
    });
    $('.hapusevent').click(function(){
        //mendapatkan nama event
        var namaevent = this.parentNode.parentNode.childNodes[0].innerHTML;
        jQuery.ajax({
            url : "../controller/delete-event.php",
            data : "namaEvent="+namaevent,
            type : "POST",
            success : function(hasil){
                $('table')[0].innerHTML = hasil;
            }
        });
    });
});
function tambahevent(){
    nama        = document.forms['tambahEvent']['namaEvent'].value;
    lokasi      = document.forms['tambahEvent']['lokasiEvent'].value;
    waktu       = document.forms['tambahEvent']['waktuEvent'].value;
    keterangan  = document.forms['tambahEvent']['keteranganEvent'].value;
    
    event = "'"+nama+"', "+"'"+lokasi+"', "+"'confirm', "+"'"+waktu+"','"+keterangan+"'";
    console.info(event);
    jQuery.ajax({
        url : "../controller/atur_event.php",
        data : "event_e="+event,
        type : "POST",
        success : function(hasil){
            $('table')[0].innerHTML = hasil;
        }
    });
}