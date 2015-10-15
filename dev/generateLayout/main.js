function updatenilai(){
	//body
	var bb    = document.getElementById('b-b').value;
	var bc    = document.getElementById('b-c').value;
	var bm    = document.getElementById('b-m').value;
	var bp    = document.getElementById('b-p').value;
	var bmore = document.getElementById('b-more').value;
	//outer
	var ob    = document.getElementById('o-b').value;
	var ow    = document.getElementById('o-w').value;
	var oh    = document.getElementById('o-h').value;
	var oc    = document.getElementById('o-c').value;
	var om    = document.getElementById('o-m').value;
	var op    = document.getElementById('o-p').value;
	var omore = document.getElementById('o-more').value;
	//header
	var hd    = document.getElementById('h-d').value;
	var hb    = document.getElementById('h-b').value;
	var hh    = document.getElementById('h-h').value;
	var hc    = document.getElementById('h-c').value;
	var hm    = document.getElementById('h-m').value;
	var hp    = document.getElementById('h-p').value;
	var hmore = document.getElementById('h-more').value;
	//navigation
	var nb    = document.getElementById('n-b').value;
	var nh    = document.getElementById('n-h').value;
	var nc    = document.getElementById('n-c').value;
	var nm    = document.getElementById('n-m').value;
	var np    = document.getElementById('n-p').value;
	var nmore = document.getElementById('n-more').value;
	//content
	var cjs   = document.getElementById('c-js').value;
	var cb    = document.getElementById('c-b').value;
	var ch    = document.getElementById('c-h').value;
	var cc    = document.getElementById('c-c').value;
	var cm    = document.getElementById('c-m').value;
	var cp    = document.getElementById('c-p').value;
	var cmore = document.getElementById('c-more').value;
	//footer
	var fb    = document.getElementById('f-b').value;
	var fh    = document.getElementById('f-h').value;
	var fc    = document.getElementById('f-c').value;
	var fm    = document.getElementById('f-m').value;
	var fp    = document.getElementById('f-p').value;
	var fmore = document.getElementById('f-more').value;

	var body 	 = document.getElementsByTagName('body')[0];
	var outer 	 = document.getElementById('outer');
	var header   = document.getElementById('header');
	var navigasi = document.getElementById('nav');
	var content  = document.getElementById('content');
	var footer   = document.getElementById('footer');

	//body
	var bodyStyle =  "background:"+bb+";";
		bodyStyle += "color:"+bc+";";
		bodyStyle += "margin:"+bm+";";
		bodyStyle += "padding:"+bp+";";
		bodyStyle += bmore;
	body.style.cssText = bodyStyle;
	//outer
	var outerStyle =  "background:"+ob+";";
		outerStyle += "width:"+ow+";";
		outerStyle += "height:"+oh+";";
		outerStyle += "color:"+oc+";";
		outerStyle += "margin:"+om+";";
		outerStyle += "padding:"+op+";";
		outerStyle += omore;
	outer.style.cssText = outerStyle;
	//header
	var headerStyle =  "display:"+hb+";";
		headerStyle += "background:"+hb+";";
		headerStyle += "height:"+hh+";";
		headerStyle += "color:"+hc+";";
		headerStyle += "margin:"+hm+";";
		headerStyle += "padding:"+hp+";";
		headerStyle += hmore;
	header.style.cssText = headerStyle;	
	//navigasi
	var navigasiStyle =  "display:"+nb+";";
		navigasiStyle += "background:"+nb+";";
		navigasiStyle += "height:"+nh+";";
		navigasiStyle += "color:"+nc+";";
		navigasiStyle += "margin:"+nm+";";
		navigasiStyle += "padding:"+np+";";
		navigasiStyle += nmore;
	navigasi.style.cssText = navigasiStyle;
	//content
	var contentStyle =  "background:"+cb+";";
		contentStyle += "color:"+cc+";";
		contentStyle += "margin:"+cm+";";
		contentStyle += "padding:"+cp+";";
		contentStyle += nmore;
	content.style.cssText = contentStyle;
	//footer
	var footerStyle =  "background:"+fb+";";
		footerStyle +=  "height:"+fh+";";
		footerStyle += "color:"+fc+";";
		footerStyle += "margin:"+fm+";";
		footerStyle += "padding:"+fp+";";
		footerStyle += fmore;
	footer.style.cssText = footerStyle;
	//generating sidebar...
	var sidebar = "<tr>";
		sidebar += "<th>NO</th><th>Sidebar ID</th><th>Properties</th>";
		sidebar += "</tr>";
	var konten = "";
	for(i=1; i <= cjs; i++){
		sidebar += "<tr>";
		sidebar += "<td>"+i+"</td><td>sidebar"+i+"</td><td><textarea id='stylefor"+i+"' onchange='updatenilai()'></textarea></td>";
		sidebar += "</tr>";
	}
	document.getElementById('content').innerHTML = konten;
	document.getElementById('sidebarskrg').innerHTML = sidebar;
}