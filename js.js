window.onscroll = function(){
	var s = document.body.scrollTop;
	var t = document.body.offsetHeight;
	var h = window.innerHeight
			||document.documentElement.clientHeight
			|| document.body.clientHeight;
	var d = document.getElementById('menu-top');
	var p = document.querySelector('#status-halaman div');
	var menu = document.getElementById('menu');
	var child = menu.getElementsByTagName('li')
	var n = s/ (t-h);
	console.log(s);
	p.style.width = (n*100)+"%";
	if(s > 50){
		d.style.position = "fixed";
	}else
		d.style.position = "static";
	//for menu
	if(s<240){
		child[0].className = "";
		child[1].className = "";
		child[2].className = "aktif";
	}
	if(s>240){
		child[0].className = "";
		child[1].className = "aktif";
		child[2].className = "";
	}
}