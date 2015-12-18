function warnacode(){
    html1 = "&lt;html&gt;\n";
    html1 += "    &lt;head&gt;\n";
    html1 += "    &lt;/head&gt;\n";
    html1 += "    &lt;body&gt;\n";
    html1 += "    &lt;/body&gt;\n";
    html1 += "&lt;/html&gt;\n";
    css1  = "#lala{\n";
    css1 += "    display:block;\n";
    css1 += "    outline:1px solid;\n";
    css1 += "    background:darkblue;\n";
    css1 += "}";
    $('pre code')[0].innerHTML = html1;
    $('pre code')[1].innerHTML = css1;
    n = document.querySelectorAll('pre').length;
    if(n > 0){
        checkPre = "";
        for(a = 0; a < n; a++){
            e = window.getComputedStyle(document.querySelectorAll('pre')[a], ':before')
                .getPropertyValue('content');
            e = e.substring(1, e.length-1);
            e = e.toLowerCase();
            if(checkPre.match(e) < 1){
                checkPre += "<input class='cek_highlight' type='checkbox' onchange='cek()' id='cek_"+e+"'><label for='cek_"+e+"'>"+e+"</label>\n";
            }
        }
        $('<div id="d_highlighter">'+checkPre+'</div>').insertBefore($('pre')[0]);
    }
}
function cek(){
    n = $('.cek_highlight').length;
    strPre = "";
    comH = "<script class='comH'>";
    comH += "$('pre code').each(function(i, block) {";
    comH += "hljs.highlightBlock(block);";
    comH += "});";
    comH += "</script>";
    for(a = 0; a < n; a++){
        c = $('.cek_highlight')[a].checked;
        if(c == true){
            $('.cek_highlight')[a].disabled = true;
            at = $('.cek_highlight')[a].getAttribute('id');
            at = at.substring(4, at.length);
            at = at.replace("html", "<script src='highlight-html.js'></script>"+comH);
            at = at.replace("css", "<script src='highlight-css.js'></script>"+comH);
            strPre += at;
        }
    }
    console.info($('.comH').length);
    $('#block_h').remove();
    $('<div id="block_h">'+strPre+'</div>').insertAfter($('#d_highlighter'));
}