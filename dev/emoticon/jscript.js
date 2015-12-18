$('document').ready(function(){
    //get number of selector
    ns = document.querySelectorAll('#komentar').length;
    
    $('#tambah').click(function(){
        r = $('#tabel-emo')[0].rows[1].innerHTML;
        $('#tabel-emo').append("<tr>"+r+"</tr>");
    });
    $('#namaSelector').keyup(function(){
        
        ambildata();
        
        //mengambil nilai = nama selector
        selektor = $(this).val();
        
        //menghitung jumlah selector
        ls = document.querySelectorAll(selektor).length;
        
        
        //menghtung jumlah baris pada tabel
        lr = $('#tabel-emo')[0].rows.length;
        
        for(a = 0; a < ls; a++){
            //atur ulang dokumen
            dok = document.querySelectorAll(selektor)[a].innerHTML;
            dok = dok.replace(/[(]/g, "_kuki_");
            dok = dok.replace(/[)]/g, "_kuka_");
            document.querySelectorAll(selektor)[a].innerHTML = dok;
            arrChar = ["`","~","!","@","#","%","^","&"];
            for(arC = 0; arC < arrChar.length; arC++){
                g = "_" + arrChar[arC] + "_";
                ganti = new RegExp(g,"g");
                dok = dok.replace(ganti, "_"+arC+"_");
            }
            document.querySelectorAll(selektor)[a].innerHTML = dok;
            for(b = 0; b < arrEmotikon.length; b += 3){
                
                //tampung karakter yang akan dicari
                cari = arrEmotikon[b+1];
                //tampung karakter pengganti
                ganti = new RegExp(cari, "g");
                
                document.querySelectorAll(selektor)[a].innerHTML =
                    document.querySelectorAll(selektor)[a].innerHTML.replace(ganti, "<img src='"+arrEmotikon[b+2]+"'/>");
            }
//            
//            dok = document.querySelectorAll(selektor)[a].innerHTML;
//            dok = dok.replace(/_kuki_/g, "(");
//            dok = dok.replace(/_kuka_/g, ")");
//            document.querySelectorAll(selektor)[a].innerHTML = dok;
        }
    });
    $('.charEmot').keyup(function(){
        this.value = this.value.replace(/\[/g, "");
        this.value = this.value.replace(/\]/g, "");
        this.value = this.value.replace(/\$/g,"");
    });
    $('#tulisan').keydown(function(e){
        k = e.keyCode? e.keyCode : e.charCode;
        console.info(e);
    });
});
function ubahtulisan(){
    $('#ubahtulisan').html("selesai");
    dokumen = document.getElementById('komentar').innerHTML;
    document.getElementById('komentar').innerHTML = "<textarea id='tulisan'>"+dokumen+"</textarea>";
    $('#ubahtulisan').attr("onclick","selesaiubah()");
}
function selesaiubah(){
    $('#ubahtulisan').html("ubah tulisan");
    document.getElementById('komentar').innerHTML = $('#tulisan').val();
    $('#ubahtulisan').attr("onclick","ubahtulisan()");

}
function prevgambar(){
    n = $('#tabel-emo')[0].rows.length;
    for(a = 0; a < n-1; a++){
        cURL = $('.gambarEmot')[a].value;
        $('#tabel-emo')[0].rows[a+1].cells[3].childNodes[0].setAttribute('src',cURL);
    }
}
function ambildata(){
    n = $('#tabel-emo')[0].rows.length;
    arrEmotikon = Array(3 * (n-1));
    c = $('#tabel-emo')[0].rows[1].cells[0].childNodes[0].value;
    r = 1;
    for(a = 0; a < arrEmotikon.length; a+= 3){
        //nama emoticon
        arrEmotikon[a] = $('#tabel-emo')[0].rows[r].cells[0].childNodes[0].value;
        //karakter emoticon
        b = $('#tabel-emo')[0].rows[r].cells[1].childNodes[0].value;
        b = b.replace(/[(]/g,"_kuki_");
        b = b.replace(/[)]/g,"_kuka_");
        arrChar = ["`","~","!","@","#","%","^","&","*"];
        console.info(arrChar.length);
        for(arC = 0; arC < arrChar.length; arC++){
            g = "_" + arrChar[arC] + "_";
            ganti = new RegExp(g,"g");
            b = b.replace(ganti, "_"+arC+"_");
        }
        arrEmotikon[a+1] = b;
        console.info("x"+arrEmotikon[a+1]);
        //url gambar
        arrEmotikon[a+2] = $('#tabel-emo')[0].rows[r].cells[2].childNodes[0].value;
        r++;
    }
}
function cetakKode(){
    ambildata();
    
    //mengambil nilai = nama selector
    selektor = $('#namaSelector').val();

    //menghitung jumlah selector
    ls = document.querySelectorAll(selektor).length;
    cetak =    "/*\n";
    cetak +=    "dibuat oleh : Dhany Nurdiansyah\n";
    cetak +=    "*/\n";
    cetak +=    "$('document').ready(function(){\n";
    cetak +=    "     ns = document.querySelectorAll('"+selektor+"').length;\n";
    cetak +=    "     //looping document change\n";
    cetak +=    "  for(a = 0; a < ns; a++){\n";
    cetak +=    "       dok = document.querySelectorAll('"+selektor+"')[a].innerHTML;\n";
    cetak +=    "       //important document change,\n";
    cetak +=    "       //dont edit this if you don't understand\n";
    cetak +=    "       dok = dok.replace(/[(]/g,'_kukiri_');\n";
    cetak +=    "       dok = dok.replace(/[)]/g,'_kukanan_');\n";
    for(a = 0; a < arrEmotikon.length; a+= 3){
        cetak +=    "       dok = dok.replace(/"+arrEmotikon[a+1]+"/g, &quot;&lt;img src='"+arrEmotikon[a+2]+"'&#47;&gt;&quot;);\n";
    }
    cetak +=    "       document.querySelectorAll('"+selektor+"')[a].innerHTML = dok;\n";
    cetak +=    "   } \n";
    cetak +=    "   for(a = 0; a < ns; a++){\n";
    cetak +=    "       dok = document.querySelectorAll('"+selektor+"')[a].innerHTML;\n";
    cetak +=    "       dok = dok.replace(/_kukiri_/g, '(');\n";
    cetak +=    "       dok = dok.replace(/_kukanan_/g, ')');\n";
    cetak +=    "   }\n";
    cetak +=    "});";
    $('code')[0].innerHTML = cetak;
    
    $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
    });
}