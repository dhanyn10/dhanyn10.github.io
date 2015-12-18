$(document).ready(function(){
    arrChar = [
        "quotation",'"',"&quot;",
        "l_than","<","&lt;",
        "g_than",">","&gt;"
    ];
    strcheck = "";
    for(a = 0; a < arrChar.length; a+=3){
        strcheck += "<input type='checkbox' class='cek-box' id='"+arrChar[a]+"'/><label for='"+arrChar[a]+"'>Ganti "+arrChar[a+1]+" menjadi "+arrChar[a+2].replace("&","&amp;")+"</label><br/>";
    }
    $('#karakter_spesial').html(strcheck);
    $('#lakukan').click(function(){
        teks = document.getElementById('change-teks').value;
        cLength = $('.cek-box').length;
        console.info(teks);
        r = 0;
        for(b = 0; b < arrChar.length; b+= 3){
            cc = $('.cek-box')[r].checked;
            if(cc == true){
                ganti = new RegExp(arrChar[b+1],"g");
                console.info(ganti);
                teks = teks.replace(ganti, arrChar[b+2]);
            }
            r++;
        }
        $('#change-teks').val(teks);
    });
});