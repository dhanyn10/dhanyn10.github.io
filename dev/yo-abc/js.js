document.getElementsByClassName("fa-play-circle")[0].addEventListener("click",function(){
    document.getElementsByClassName("lingkaran")[0].style.display = "block";
    document.getElementsByClassName("fa-play-circle")[0].style.display = "none";
    var c = 0;
    var int = setInterval(function(){
        c++;
        document.getElementsByClassName("progress-bar")[0].innerHTML = c + "%";
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width: "+ c + "%");
        if(c >= 100)
            clearInterval(int);
    },100);
});