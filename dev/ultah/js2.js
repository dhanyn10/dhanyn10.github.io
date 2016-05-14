function gantiGambar(str){
    if(typeof str === "object"){
        str = str.target.result;
    }
    document.getElementsByClassName("outer")[0].style.backgroundImage = "url('"+ str + "')";
}
document.getElementsByName("gambar")[0].onchange = function(){
    fileObjek = this;
    if(fileObjek.files){
        file = fileObjek.files[0];
        pembacaFIle = new FileReader;
        pembacaFIle.onloadend = gantiGambar;
        pembacaFIle.readAsDataURL(file);
    }else{
        file = fileObjek.value;
        gantiGambar(file);
    }
}

document.getElementsByName("warna")[0].addEventListener("keyup",function(){
    document.getElementsByClassName("outer")[0].style.backgroundColor = document.getElementsByName("warna")[0].value;
});

document.getElementsByName("gambar")[0].addEventListener("change",function(){
    document.getElementsByClassName("outer")[0].style.backgroundImage = "url(" + this.File[0].mozFullPath + ")";
    console.info(this.File[0].mozFullPath);
});

document.getElementsByName("h")[0].addEventListener("keyup",function(){
    d = document.getElementsByName("h")[0].value;
    if(d.length < 1){
        d = "H";
    }
    document.getElementById("no1").getElementsByTagName("h1")[0].innerHTML = d;
});

document.getElementsByName("s")[0].addEventListener("keyup",function(){
    d = document.getElementsByName("s")[0].value;
    if(d.length < 1){
        d = "Selamat";
    }
    document.getElementById("no1").getElementsByTagName("p")[0].innerHTML = d;
});

document.getElementsByName("b")[0].addEventListener("keyup",function(){
    d = document.getElementsByName("b")[0].value;
    if(d.length < 1){
        d = "B";
    }
    document.getElementById("no2").getElementsByTagName("h1")[0].innerHTML = d;
});

document.getElementsByName("u")[0].addEventListener("keyup",function(){
    d = document.getElementsByName("u")[0].value;
    if(d.length < 1){
        d = "Ulang";
    }
    document.getElementById("no2").getElementsByTagName("p")[0].innerHTML = d;
});

document.getElementsByName("d")[0].addEventListener("keyup",function(){
    d = document.getElementsByName("d")[0].value;
    if(d.length < 1){
        d = "D";
    }
    document.getElementById("no3").getElementsByTagName("h1")[0].innerHTML = d;
});

document.getElementsByName("t")[0].addEventListener("keyup",function(){
    d = document.getElementsByName("t")[0].value;
    if(d.length < 1){
        d = "Tahun";
    }
    document.getElementById("no3").getElementsByTagName("p")[0].innerHTML = d;
});

document.getElementsByName("20")[0].addEventListener("keyup",function(){
    d = document.getElementsByName("20")[0].value;
    sup = "th";
    if(d.length > 0){
        ld = d.substring(d.length-1, d.length);
        if(parseInt(ld) == 1){
            sup = "st";
        }else if(parseInt(ld) == 2){
            sup = "nd";
        }else if(parseInt(ld) == 3){
            sup = "rd";
        }else{
            sup = "th";
        }
    }else{
        d = "20";
    }
    dsup = document.getElementById("no4").getElementsByTagName("sup")[0].innerHTML;
    dsup = sup;
    document.getElementById("no4").getElementsByTagName("h1")[0].innerHTML = d + "<sup>" + dsup + "</sup>";
});

document.getElementsByName("l")[0].addEventListener("keyup",function(){
    d = document.getElementsByName("l")[0].value;
    if(d.length < 1){
        d = "Lipsum";
    }
    document.getElementById("no4").getElementsByTagName("p")[0].innerHTML = d;
});
