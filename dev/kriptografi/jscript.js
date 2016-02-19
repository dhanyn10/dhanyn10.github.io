function getKataUnik(){
  kal = document.getElementsByTagName("textarea")[0].value;
  arrKal = kal.split(/[ ,.]+/);
  jmlKal = arrKal.length;
  strKal = "";

  jmlkata = 0;
  for (var i = 0; i < jmlKal; i++) {
      if(!(strKal.match(arrKal[i]))){
        strKal += arrKal[i] + " ";
        jmlkata ++;
      }
  }
  document.getElementsByName('jmlKata')[0].value = jmlkata;
  document.getElementsByTagName('textarea')[1].value = strKal;
}
function nilaiacak(){
  n = document.getElementsByName('nilaiacak')[0].value;
  str_n = "";
  g_acak = 0;
  for (var i = 0; i < n; i++) {
    acak = Math.floor(Math.random()*n + 1);
    if (!(str_n.match(acak.toString()))) {
      str_n += acak.toString() + " ";
    }
  }
  document.getElementsByName('hasilacak')[0].value = str_n;
}
function gantiTeks(){
  asal = document.getElementsByName('asalTeks')[0].value;
  pTeks = document.getElementsByName('pTeks')[0].value;
  split_asal = asal.split(" ");
  split_p = pTeks.split(" ");
  arr_p = Array(split_p.length);
  str = "";
  for (var i = 0; i < split_asal.length; i++) {
    split_asal[i] = split_p[parseInt(split_asal[i])];
    str += split_asal[i] + " ";
  }
  document.getElementsByName('hasilGanti')[0].value = str;
}
