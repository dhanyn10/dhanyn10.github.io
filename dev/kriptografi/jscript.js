function buka_enkrip(){
    document.getElementById('enkrip').style.display = "block";
    document.getElementById('dekrip').style.display = "none";
    pjg = document.getElementById('enkrip').querySelectorAll('section').length;
    for(a = 0; a < pjg; a++){
        document.getElementById('enkrip').querySelectorAll('section')[a].className = "";
    }
}
function buka_dekrip(){
    document.getElementById('dekrip').style.display = "block";
    document.getElementById('enkrip').style.display = "none";
    pjg = document.getElementById('dekrip').querySelectorAll('section').length;
    for(a = 0; a < pjg; a++){
        document.getElementById('dekrip').querySelectorAll('section')[a].className = "";
    }
}
function getKataUnik() {
    kal     = document.getElementById('asalkataunik').value;
    arrKal  = kal.split(/[ ,.]+/);
    jmlKal  = arrKal.length;
    strKal  = "";
    tabelunik = "<tr>"
                    + "<th>Index</th><th>Kata Unik</th>"
            + "</tr>";
    jmlkata = 0;
    for (var i = 0; i < jmlKal; i++) {
        if(!(strKal.match(arrKal[i]))){
            strKal += arrKal[i] + " ";
            jmlkata ++;
        }
    }
    splitKal = strKal.split(" ");
    for(var i = 0; i < splitKal.length; i++){
	    tabelunik += "<tr>"
		        + "<td>" + i + "</td><td>" + splitKal[i] + "</td>"
		        + "</tr>";
    }
    document.getElementById('jmlKata').value                    = jmlkata;
    document.getElementById('text-kataunik').value              = strKal;
    document.getElementById('tabel-hasilkataunik').innerHTML    = tabelunik;
}
function nilaiacak() {
    n       = document.getElementById('jumlahacak').value;
    if(n <= 3000){
        str_n   = "";
        g_acak  = 0;
        for (var i = 0; i < n; i++) {
            acak    = Math.floor((Math.random() *n) + 0);
            str_nn  = str_n.split(" ");
            for(var j = 0; j < str_nn.length; j++){
                while(str_nn[j].match(acak)){
                    acak = Math.floor((Math.random() *n) + 0);
                }
            }
            str_n += acak + " ";
        }
        str_n = str_n.replace(/[ ]/g,"-");
        document.getElementById('hasilacak').value = str_n;
    }
}
function gantiTeks() {
    asal    = document.getElementById('asaldokumen').value;
    pTeks   = document.getElementById('teksunik').value;
    asal    = asal.replace(/[-]/g," ");
    split_asal  = asal.split(" ");
    split_p     = pTeks.split(" ");
    arr_p       = Array(split_p.length);
    str = "";
    for (var i = 0; i < split_asal.length; i++) {
        split_asal[i]   = split_p[parseInt(split_asal[i])];
        str             += split_asal[i] + " ";
    }
    document.getElementById('hasilGanti').value = str;
}
function delclass(){
    jml = document.querySelectorAll('section').length;
    for(a = 0; a < jml; a++){
        document.querySelectorAll('section')[a].className = "";
    }    
}
function tampilkataunik(){
    delclass();
    document.getElementById('kataunik').className = "tampil";
}
function tampilnilaiacak(){
    delclass();
    document.getElementById('nilaiacak').className = "tampil";
}
function tampilgantiteks(){
    delclass();
    document.getElementById('gantiTeks').className = "tampil";
}
function tampildekrip_kalimat(){
    delclass();
    document.getElementById('dekrip_kata').className = "tampil";
}
function tampildekrip_angka(){
    delclass();
    document.getElementById('dekrip_angka').className = "tampil";
}
function batasnilai(){
    nilai = document.getElementById('jumlahacak').value;
    if(nilai > 3000)
        document.getElementById('jumlahacak').value = "";
}
function dekrip_kata(){
    dok_asal    = document.getElementById('dekrip_kata_asal').value;
    dok_sumber  = document.getElementById('dekrip_kata_sumber').value;
    split_asal      = dok_asal.split(/[ ,.]+/);
    split_sumber    = dok_sumber.split(" ");
    str = "";
    for(i = 0; i < split_asal.length; i++){
        for(j = 0; j < split_sumber.length; j++){
            if(split_sumber[j] === split_asal[i]){
                str += j + "-";
            }
        }
    }
    str = str.substring(0, str.length-1);
    document.getElementById('dekrip_kata_hasil').value = str;
}
function dekrip_angka(){
    dok_asal = document.getElementById('dekrip_angka_asal').value;
    separator = ["-"," "];
    splt_asal = dok_asal.split(new RegExp(separator.join('|'),"g"));
    //mencari nilai terbesar;
    terbesar = 0;
    for(i = 0; i < split_asal.length; i++){
        if(terbesar < split_asal[i])
            terbesar = split_asal[i];
    }
}