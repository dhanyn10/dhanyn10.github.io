var jml = 0;
var tambah = setInterval(tambahproses,80);

function tambahproses(){
	if (jml <=100) {
		document.getElementById('proses').style.width = jml+"%";
		document.getElementById('detail').innerHTML = jml+"%";
		if(jml >= 10)
		document.querySelector('#no1 p').style.background = "black";
		if(jml >= 30)
		document.querySelector('#no2 p').style.background = "black";
		if(jml >= 60)
		document.querySelector('#no3 p').style.background = "black";
		if(jml >= 90)
		document.querySelector('#no4 p').style.background = "black";
		if (jml == 100) {
			document.querySelector('.replay button').style.display = "inline-block";
            clearInterval(tambah);
		};
	}

	jml++;
}
function mainkan(){
	jml = 0;
	var a = document.querySelectorAll('.galeri aside p');
	for(var b = 0; b< a.length; b++){
		a[b].style.background = "white";
	}
	clearInterval(tambah);
	tambah = setInterval(tambahproses,80);
}