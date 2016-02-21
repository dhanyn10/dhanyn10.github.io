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
    document.getElementById('jmlKata').value                =  jmlkata;
    document.getElementById('hasilkataunik').value          = strKal;
    document.getElementById('tabelhasilkataunik').innerHTML = tabelunik;
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
function batasnilai(){
    nilai = document.getElementById('jumlahacak').value;
    if(nilai > 3000)
        document.getElementById('jumlahacak').value = "";
}