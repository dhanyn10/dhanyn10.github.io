window.onload = function(){
    //get html canvas element
    var kanvas = document.getElementById('cd');
    var cd_ctx = kanvas.getContext("2d");
    
    //dapatkan lebar dan tinggi
    var lebar = window.innerWidth;
    var tinggi = window.innerHeight;
    
    kanvas.width = lebar;
    kanvas.height = tinggi;
    
    function box(bx, by){
        this.x = bx;
        this.y = by;
        
        //berikan kecepatan
        this.xvel = 0;
        this.yvel = 2;
        
        this.width = 35;
        this.height = 35;
        
        this.gambar = function(){
            cd_ctx.fillStyle = "green";
            cd_ctx.fillRect(this.x, this.y, this.width, this.height);
            this.update();
        }
        this.update = function(){
            this.x += this.xvel;
            this.y += this.yvel;
            if(this.x > (kanvas.width - 40))
                this.x = 0;
            if(this.y > (kanvas.height - 40))
                this.y = 0;
        }
    }
    var b = new box(20,20);
    
    function gambar(){
        cd_ctx.fillStyle = "black";
        cd_ctx.fillRect(0,0,lebar,tinggi);
        
        b.gambar();
        update();
    }
    function update(){
        b.update();
    }
    setInterval(gambar,30);
}