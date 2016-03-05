var arrLang = [
    /*ID, image source, persen*/
    'html','logo/html.png','80',
    'css' ,'logo/css.png' ,'78',
    'js'  ,'logo/js.png'  ,'50',
    'php' ,'logo/php.png' ,'45',
    'as'  ,'logo/as3.png' ,'50',
    'cpp' ,'logo/cpp.png' ,'40',
    'java','logo/java.png','70'
];

function info(){
    var i_html = "";
    for(a = 0; a< arrLang.length; a += 3){
        i_html += "<div id='"+arrLang[a]+"'>";
        i_html += "<img src='"+arrLang[a+1]+"'></img>";
        i_html += "<div id='total'><div></div><span></span></div>";
        i_html += "</div>";
    }
    document.getElementById('skill').innerHTML = i_html;
    for(a = 0; a< 5; a++){
        var b = document.getElementById('luar').getElementsByClassName('top')[a].offsetHeight;
        var c = document.getElementById('luar').getElementsByClassName('top').length;
        console.info(b+"|"+c);
    }
}

var loadpersen = false;

window.onscroll = function(){
    //tinggi sroll top
	var s = document.body.scrollTop;
    //tinggi elemen yang terlihat
	var t = document.body.offsetHeight;
    //tinggi elemen keseluruhan
	var h = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
	var d = document.getElementById('menu-top');
	var p = document.querySelector('#status-halaman div');
	var menu = document.getElementById('menu');
    var arrEl = document.getElementsByClassName('top').length;
    var arrE = [];
    var child = menu.getElementsByTagName('li')
	var n = s/ (t-h);
	console.log(s)
    
    for(var a = 0; a < arrEl; a++){
        arrE[a] = document.getElementsByClassName('top')[a].offsetHeight;
    }
    
	p.style.width = (n*100)+"%";
	if(s > arrE[0]){
        console.log("top"+arrE[0])
		d.style.position = "fixed";
	}else
		d.style.position = "static";
	//for menu
	if(s<arrE[1]-72){
        console.log("skill"+arrE[1])
		child[0].className = "aktif";
		child[1].className = "";
		child[2].className = "";
	}
	if(s>arrE[1]-72){
        console.log("skill"+arrE[1])
		child[0].className = "";
		child[1].className = "aktif";
		child[2].className = "";
        if(!loadpersen){
            loadpersen = true;
            var n = 0;
            var hn = arrLang[2];
            var playpersen = setInterval(function(){
                n++;
                for(a = 0; a < arrLang.length; a+= 3){
                    if(arrLang[a+2] > hn)
                        hn = arrLang[a+2]
                    if(n <= arrLang[a+2]){
                    document.querySelector("#"+arrLang[a]+" #total div").style.width = n + "%";
                    document.querySelector("#"+arrLang[a]+" #total span").innerHTML = n + "%";
                    }
                }
                if(n == hn){
                    clearInterval(playpersen);
                }
            },50);
        }
	}
}