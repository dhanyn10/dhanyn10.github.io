gbr = document.getElementsByTagName('img')[0];
w = document.getElementById('warna');
p = document.getElementById('papan');
document.getElementById('warna').addEventListener("mousemove", warna);
document.getElementById('papan').addEventListener("mousemove", koordinat);
function warna(lokasi){
    x = (lokasi.clientX - w.offsetLeft);
    y = (lokasi.clientY - w.offsetTop);
    kanvas = document.createElement('canvas');
    kanvas.height = p.clientHeight;
    kanvas.width = p.clientWidth;
    ct = kanvas.getContext('2d');
    ct.fillStyle="green";
    ct.drawImage(gbr, 0, 0);
    pxData = kanvas.getContext('2d').getImageData(x,y,1,1).data;
    document.querySelector('input[name=cur-position]')
    .value = "coord x : " + x + " coord y : " + y + " lala : "
        +pxData[0]+"|"+pxData[1]+"|"+pxData[2]+"|"+pxData[3];
}
function koordinat(lokasi){
    x = (lokasi.clientX - p.offsetLeft);
    y = (lokasi.clientY - p.offsetTop);
    kanvas = document.createElement('canvas');
    kanvas.height = p.clientHeight;
    kanvas.width = p.clientWidth;
    ct = kanvas.getContext('2d');
    ct.fillStyle="green";
    ct.drawImage(gbr, 0, 0);
    pxData = kanvas.getContext('2d').getImageData(x,y,1,1).data;
    document.querySelector('input[name=cur-position]')
    .value = "coord x : " + x + " coord y : " + y + " lala : "
        +pxData[0]+"|"+pxData[1]+"|"+pxData[2]+"|"+pxData[3];
}