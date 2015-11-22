$('document').ready(function(){
    $('#sidebar_kiri li').click(function(){
        $('li').removeClass('active');
        $(this).addClass('active');
    });
});