function mulai(){
	document.getElementById('masukjudul').value =
	document.getElementById('judul').innerHTML;
	var opsi_efek = ['pilih animasi','Basic','Simple Moving Effect'];
	var html_opsi = "";
	for(a = 0; a< opsi_efek.length; a++){
		html_opsi += "<option value="+a+">"+opsi_efek[a]+"</option>";
	}
	document.getElementById('pilihanimasi').innerHTML = html_opsi;
}
function masukjudul(){
	var judul = document.getElementById('masukjudul').value;
	judul.setStyle
	if(judul.length > 0)
		document.getElementById('judul').innerHTML = judul;
	else
		document.getElementById('judul').innerHTML = "Judul di sini";
}
function jmlgambar(){
	var jmlgambar = document.getElementById('jml-gambar').value;
	var gbr = document.getElementsByClassName('gbr');
	var aturgbr   = document.querySelector('#aturgambar');
	var s_gbr     = document.querySelector('#semuagambar');
	var htmlaturgbr = "";
	for(a = 1; a<= jmlgambar; a++){
		htmlaturgbr += "<tr>";
		htmlaturgbr += "<td><input class='taruhgambar' type='text' placeholder='your image "+a+" url...' onkeyup='ubahgambar()'></input></td>";
		htmlaturgbr += "</tr>";
	}
	var default_gbr = "";
	for(a = 1; a<= jmlgambar; a++){
		default_gbr += "<img class='gbr' src='f1.jpg'></img>";
	}
	s_gbr.innerHTML = default_gbr;
	aturgbr.innerHTML = htmlaturgbr;

	//atur nilai tengah
	var p_tengah = 0;
	var p_kiri = 0;
	var p_kanan = 0;
	if(jmlgambar % 2 == 1){
		p_tengah = jmlgambar / 2-0.5 + 1;
		p_kiri = p_tengah - 1;
		p_kanan = p_tengah + 1;
	}else{
		p_tengah = jmlgambar / 2;
		p_kiri = p_tengah - 1;
		p_kanan = p_tengah + 1;
	}

		//ganti gambar preview
		document.querySelector('#preview1 img').src = gbr[p_kiri-1].src;
		document.querySelector('#tampil img').src   = gbr[p_tengah-1].src;
		document.querySelector('#preview2 img').src = gbr[p_kanan-1].src;


}
function ubahgambar(){
	var jmlgambar = document.getElementById('jml-gambar').value;
	var gbr = document.getElementsByClassName('gbr');
	var trg = document.getElementsByClassName('taruhgambar');

	//ganti gambar bawah dengan url yaang ditulis
	for(a = 0; a < jmlgambar; a++){
		if(trg[a].value.length > 0){
			gbr[a].src = trg[a].value;
		}
		else{
			gbr[a].src = "f1.jpg";
		}
	}

	//atur nilai tengah
	var p_tengah = 0;
	var p_kiri = 0;
	var p_kanan = 0;
	if(jmlgambar % 2 == 1){
		p_tengah = jmlgambar / 2-0.5 + 1;
		p_kiri = p_tengah - 1;
		p_kanan = p_tengah + 1;
	}else{
		p_tengah = jmlgambar / 2;
		p_kiri = p_tengah - 1;
		p_kanan = p_tengah + 1;
	}
	for(i = 0; i< jmlgambar; i++){
		gbr[i].style.opacity = 0.5;
	}
	//ganti gambar preview
	document.querySelector('#preview1 img').src = gbr[p_kiri-1].src;
	document.querySelector('#tampil img').src   = gbr[p_tengah-1].src;
	document.querySelector('#preview2 img').src = gbr[p_kanan-1].src;
}

var prevanimate;

function animasi(){
	var interval  = document.getElementById('interval').value;
	var allgambar = document.getElementsByClassName('gbr');
	var pilihanimasi = document.getElementById('pilihanimasi');

	if(pilihanimasi.value === "1"){

		var l_gbr = [];
		var n2 = 0;
		clearInterval(prevanimate);
		prevanimate = setInterval(function(){
			var jmlgambar = document.getElementById('jml-gambar').value;
			//atur nilai tengah
			var p_tengah = 0;
			var p_kiri = 0;
			var p_kanan = 0;

			if(jmlgambar % 2 == 1){ //ganjil
				p_tengah = (jmlgambar-1) / 2;
				p_kiri = p_tengah - 1;
				p_kanan = p_tengah + 1;
			}else{//genap
				p_tengah = (jmlgambar-1) / 2 - 0.5;
				p_kiri = p_tengah - 1;
				p_kanan = p_tengah + 1;
			}
			for (var i = 0; i < jmlgambar; i++) {
				l_gbr[i] = allgambar[i].src;
			};

			var j = l_gbr[0];
			for(k = 0; k < l_gbr.length-1; k++)
			l_gbr[k] = l_gbr[k+1];
			l_gbr[l_gbr.length-1] = j;
			n2++;
			if(n2 > l_gbr.length-1)
				n2 = 0;
			for(i = 0; i < jmlgambar; i++){
				allgambar[i].src = l_gbr[i];
				allgambar[i].style.opacity = 0.5;
			}

			document.querySelector('#preview1 img').src = allgambar[p_kiri].src;
			document.querySelector('#tampil img').src = allgambar[p_tengah].src;
			document.querySelector('#preview2 img').src = allgambar[p_kanan].src;
			allgambar[p_tengah].style.opacity = 1;
		},interval);
	}
}