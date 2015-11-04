function klikcek(){
	var cek = document.getElementById('cek6');
	if(cek.checked == false)
		document.getElementsByClassName("lainnya")[0].style.display = "block";
	else{
		document.getElementsByClassName("lainnya")[0].style.display = "none";
	}
}
function tambah(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
	if (input % 1 == 0) {
		document.getElementById('r_text').value += input + " + ";
		document.getElementById('i_text').value = "";
	}else{
		input = "";
	}
}
function kurang(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
	if (input % 1 == 0) {
		document.getElementById('r_text').value += input + " - ";
		document.getElementById('i_text').value = "";
	}else{
		input = "";
	}
}
function kali(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
	if (input % 1 == 0) {
		document.getElementById('r_text').value += input + " x ";
		document.getElementById('i_text').value = "";
	}else{
		input = "";
	}
}
function bagi(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
	if (input % 1 == 0) {
		document.getElementById('r_text').value += input + " : ";
		document.getElementById('i_text').value = "";
	}else{
		input = "";
	}
}
function mod(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
	if (input % 1 == 0) {
		document.getElementById('r_text').value += input + " (mod) ";
		document.getElementById('i_text').value = "";
	};
}
function pangkat(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
	if (input % 1 == 0) {
		document.getElementById('r_text').value += input + " ^ ";
		document.getElementById('i_text').value = "";
	}else{
		input = "";
	}
}
function kur_kiri(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
	if (input % 1 == 0) {
		document.getElementById('r_text').value += input + " ( ";
		document.getElementById('i_text').value = "";
	}else{
		input = "";
	}
}
function kur_kanan(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
	if (input % 1 == 0) {
		document.getElementById('r_text').value += input + " ) ";
		document.getElementById('i_text').value = "";
	}else{
		input = "";
	}
}

function hapus(){
	document.getElementById('r_text').value = "";
	document.getElementById('i_text').value = "";
	document.getElementById('submit').disabled = true;
}
function hapus1(){
	var cnum = document.getElementById('r_text').value;
	var num = cnum.length-1;
		cnum = cnum.substring(0,num);
	document.getElementById('r_text').value = cnum;
}
function cekinput(){
	var output = document.getElementById('r_text').value;
	var input  = document.getElementById('i_text').value;
		document.getElementById('i_text').value = "";
	for (var i = 0; i < output.length; i++) {
		output = output.replace("(mod)",'%');
		output = output.replace(":",'/');
		output = output.replace("x",'*');
	};
	output = eval(output + input);
	document.getElementById('r_text').value = output;
}
function tentang(){
	document.getElementsByTagName('footer')[0].style.display = "none";
	setTimeout(function(){
		var tinggi = document.getElementsByClassName('outer')[0].offsetHeight;
		var	add_tinggi = 0;
		var tbh_tinggi = setInterval(function(){
			document.getElementsByClassName('outer')[0].style.height = (tinggi+add_tinggi)+"px";
			if(add_tinggi >= 200){
				clearInterval(tbh_tinggi);
				var lebar = document.getElementsByClassName('outer')[0].offsetWidth;
				var add_lebar = 0;
				var tbh_lebar = setInterval(function(){
					document.getElementsByClassName('outer')[0].style.width = (lebar+add_lebar)+"px";
					if(add_lebar >= 100){
						clearInterval(tbh_lebar);
						document.getElementsByTagName('form')[0].style.display = "none";
						document.querySelector('.tentang').style.display = "block";
					}
					add_lebar += 2;
				},20);
			}
			add_tinggi += 2;
		},10);
	},200);
}
function keluar1(){
	document.getElementsByClassName('tentang')[0].style.display = "none";
	var lebar = document.getElementsByClassName('outer')[0].offsetWidth;
	var kr_lebar = 0;
	var min_lebar = setInterval(function(){
		document.getElementsByClassName('outer')[0].style.width = (lebar-kr_lebar)+"px";
		if(kr_lebar >= 100){
			clearInterval(min_lebar);
			var tinggi = document.getElementsByClassName('outer')[0].offsetHeight;
			var kr_tinggi = 0;
			var min_tinggi = setInterval(function(){
				document.getElementsByClassName('outer')[0].style.height = (tinggi-kr_tinggi)+"px";
				if(kr_tinggi >= 150){
					clearInterval(min_tinggi);
					document.getElementsByTagName('form')[0].style.display = "block";
					document.getElementsByTagName('footer')[0].style.display = "block";
					document.getElementsByClassName('outer')[0].style.height = "auto";
				}
				kr_tinggi++;
			},5);
		}
		kr_lebar ++;
	},10);
}
function bantuan(){
	document.getElementsByTagName('footer')[0].style.display = "none";
	document.getElementsByClassName('bantuan')[0].style.display = "block";
	var lebar = document.getElementsByClassName('outer')[0].offsetWidth;
	var tinggi = document.getElementsByClassName('outer')[0].offsetHeight;
	var add_lebar = 0;
	var	add_tinggi = 0;
	var tranparan = 0;
	var tbh_tinggi = setInterval(function(){
		add_tinggi ++;
		document.getElementsByClassName('outer')[0].style.height = (tinggi + add_tinggi) + "px";
		if(add_tinggi >= 150){
			clearInterval(tbh_tinggi);
			var tbh_lebar = setInterval(function(){
				add_lebar ++;
				document.getElementsByClassName('outer')[0].style.width = (lebar + add_lebar) + "px";
				if(add_lebar >= 100){
					clearInterval(tbh_lebar);
					var tbh_transparan = setInterval(function(){
						tranparan += 0.05;
						document.getElementsByClassName('bantuan')[0].style.opacity = tranparan;
						if(tranparan >= 1)
							clearInterval(tbh_transparan);
					},50);
				}
			},10);
		}
	},5);
}
function keluar2(){
	document.querySelector('.bantuan button').style.display = "none";
	var lebar = document.getElementsByClassName('outer')[0].offsetWidth;
	var tinggi = document.getElementsByClassName('outer')[0].offsetHeight;
	
	var kr_lebar = 0;
	var kr_tinggi = 0;
	var kr_transparan = 1;
	var transparan = setInterval(function(){
		kr_transparan -= 0.01;
		document.getElementsByClassName('bantuan')[0].style.opacity = kr_transparan;
		if (kr_transparan <= 0.00) {
			clearInterval(transparan);
			document.querySelector('.bantuan button').style.display = "block";
			document.getElementsByClassName('bantuan')[0].style.display = "none";
			var less_lebar = setInterval(function(){
				kr_lebar++;
				document.getElementsByClassName('outer')[0].style.width = (lebar - kr_lebar) + "px";
				if(kr_lebar >= 100){
					clearInterval(less_lebar);
					var less_tinggi = setInterval(function(){
						kr_tinggi ++;
						document.getElementsByClassName('outer')[0].style.height = (tinggi -  kr_tinggi) + "px";
						if(kr_tinggi >= 100){
							clearInterval(less_tinggi);
							document.getElementsByTagName('footer')[0].style.display = "block";
							document.getElementsByClassName('outer')[0].style.height = "auto";
						}
					},5);
				}
			},10);
		}
	},10);
}