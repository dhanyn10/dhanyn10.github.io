$(document).ready(function(){
    n = document.querySelectorAll('pre').length;
    if(n > 0){
        checkPre = "";
        for(a = 0; a < n; a++){
            e = window.getComputedStyle(document.querySelectorAll('pre')[a], ':before')
                .getPropertyValue('content');
            e = e.substring(1, e.length-1);
            e = e.toLowerCase();
            if(checkPre.match(e) < 1){
                checkPre += "<input class='cek_highlight' type='checkbox' onchange='cek_highlight()' id='cek_"+e+"'><label for='cek_"+e+"'>"+e+"</label>\n";
            }
        }
        $('<div id="d_highlighter">'+checkPre+'</div>').insertBefore($('pre')[0]);
    }
});
    
function cek_highlight(){
    n = $('.cek_highlight').length;
    strPre = "";
    comH = "$('pre code').each(function(i, block) {";
    comH += "hljs.highlightBlock(block);";
    comH += "});";
    for(a = 0; a < n; a++){
        c = $('.cek_highlight')[a].checked;
        if(c == true){
            $('.cek_highlight')[a].disabled = true;
            at = $('.cek_highlight')[a].getAttribute('id');
            at = at.substring(4, at.length);
            at = at.replace("html", "<script>$.getScript(https://sites.google.com/site/dhanyn10/js/highlight-html.js, "+comH+")</script>");
            at = at.replace("css", "<script src='highlight-css.js'></script>"+comH);
            strPre += at;
        }
    }
    console.info($('.comH').length);
    $('#block_h').remove();
    $('<div id="block_h">'+strPre+'</div>').insertAfter($('#d_highlighter'));
}