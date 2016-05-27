$(document).ready(function(){
    /*
    =======================================================
    | tombol toggle menu
    =======================================================
    | berfungsi untuk toggle buka/tutup menu sidebar di
    | bagian kiri tampilan
    */
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    /*
    ========================================================
    | menu User di bagian sidebar kiri
    ========================================================
    | berfungsi untuk menayangkan tabel user dari database
    */
    $("#lihat-tabel-user").click(function(){
        $(".tabel-user").css("display","inline-table");
        $(".tabel-feedback").css("display","none");
    });
    /*
    ========================================================
    | menu Tanggapan Pengguna
    ========================================================
    | digunakan untuk mengakses tabel yang berisi data
    | tanggapan pengguna tentang layanan dari BPJS
    */
    $("#lihat-tabel-feedback").click(function(){
        $(".tabel-feedback").css("display","inline-table");
        $(".tabel-user").css("display","none");
    });
    /*
    =======================================================
    | tombol "Pilih" pada kuisioner pilihan loket
    =======================================================
    | ketika tombol ini diklik, pengguna yang berada di
    | kuisioner pilihan loket diarahkan menuju kuisioner
    | selanjutnya
    */
    $("#pilihanloket button").click(function(){
        var pilihan = $("input[name='pilihanloket']:checked").val();
        $("#loket").css("display","block");
        $("#pilihanloket").css("display","none");
        $("#nomorloket").html(pilihan);
    });
    /*
    ========================================================
    | tombol "Pilih" atau "Selesai" pada kuisioner kepuasan
    | pengguna
    ========================================================
    | tombol ini dibuat berdasarkan dua kondisi,
    | yang pertama yaitu kondisi jika pengguna sudah puas
    | atas layanan BPJS, maka pengguna dapat langsung
    | mengakhiri pengisian kuisioner, sementara jika tidak
    | puas akan diberikan kuisioner tambahan yaitu
    | detail/alasan ketidakpuasannya
    xxxxxxxxxxxxxxxxxxxxxxxxx
    */
    $("#loket button").click(function(){
        var kepuasan = $("input[name='puas']:checked").val();
        if(kepuasan == "tidak puas"){
            $("#loket button").eq(0).addClass("disabled").attr("disabled");
            $("#loket button").eq(1).addClass("disabled").attr("disabled");
            $("#tidakpuas").css("display","block");
        }
    });
    $("input[name='tp']").click(function(){
        var n = $("input[name='tp']:checked").val();
        if(n == "lain-lain")
            $("textarea[name='tp']").css("display","block");
        else
            $("textarea[name='tp']").css("display","none");
    });
    /*
    =======================================================
    | tombol "Pilih" ditampilkan
    =======================================================
    | tombol "Pilih" ditampilkan ketika Pengguna memilih
    | pilihan "tidak puas" terhadap layanan
    */
    $("#loket #tdkpuas").click(function(){
        $("#loket .btn-primary").css("display","inline-block");
        $("#loket .btn-success").css("display","none");
    });
    /*
    ========================================================
    | tombol "Selesai" ditampilkan
    ========================================================
    | tombol "Selesai" ditampilkan ketika pengguna memilih
    | pilihan "puas" terhadap layanan
    */
    $("#loket #puas").click(function(){
        $("#loket .btn-primary").css("display","none");
        $("#loket .btn-success").css("display","inline-block");
    });
    /*
    =========================================================
    | tombol "Selesai" pertama pada kuisioner
    =========================================================
    | tombol ini muncul jika Pengguna merasa puas terhadap
    | layanan yang diberikan. ketika diklik, tombol ini
    | menggunakan perintah jQuery Ajax untuk mengirimkan data
    | kuisioner yaitu berupa nama Pengguna, nomor loket, dan
    | data kepuasannya
    */
    var sukses =    '<div class="alert alert-success fade in">'+
                        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
                        '<strong>Sukses!</strong> data berhasil disimpan.'+
                    '</div>',
        gagal =     '<div class="alert alert-danger">'+
                        ' <strong>Gagal!</strong>Terjadi kesalahan.'+
                    '</div>';
    $("#loket button").eq(1).click(function(){
        $("#loket button").remove();
        $("#loket input[type='radio']").attr("disabled",true)
    });
    $("#selesai1").click(function(){
        var nama, pilihanloket, kepuasan;
        nama         = $("#nama").html();
        pilihanloket = $("input[name='pilihanloket']:checked").val();
        kepuasan     = $("input[name='puas']:checked").val();
        jQuery.ajax({
            url     :   "/feedback_pelayanan_bpjs/controller/input.php",
            data    :   {nama:nama, loket:pilihanloket, puas:kepuasan},
            type    :   "POST",
            success :
            function(info){
                if(info == "sukses"){
                    $(".box").append(sukses);
                    $("#loket button").eq(0).addClass("disabled").attr("disabled",true);
                    $("#loket button").eq(1).addClass("disabled").attr("disabled",true);
                    setTimeout(function(){
                        window.location.href = "masuk.php";
                    },2000);
                }else{
                    $(".box").append(gagal);
                    $("#loket button").eq(0).addClass("disabled").attr("disabled",true);
                    $("#loket button").eq(1).addClass("disabled").attr("disabled",true);
                }
            }
        });
    });
    /*
    =========================================================
    | tombol "Selesai" kedua pada kuisioner
    =========================================================
    | tombol ini muncul jika pengguna merasa tidak puas
    | terhadap layanan yang diberikan. Ketika diklik,
    | tombol ini mengeksekusi perintah jQuery Ajax untuk
    | mengirimkan data kuisioner yaitu berupa nama Pengguna,
    | nomor loket, data kepuasannya, serta alasan.
    */
    $("#selesai2").click(function(){
        var nama, pilihanloket, kepuasan, alasan;
        nama         = $("#nama").html();
        pilihanloket = $("input[name='pilihanloket']:checked").val();
        kepuasan     = $("input[name='puas']:checked").val();
        alasan       = $("input[name='tp']:checked").val();
        if(alasan == "lain-lain"){
            alasan = $("textarea").val();
        }
        jQuery.ajax({
            url     : "/feedback_pelayanan_bpjs/controller/input.php",
            data    : {nama:nama, loket:pilihanloket, puas:kepuasan, alasan:alasan},
            type    : "post",
            success : function(info){
                if(info == "sukses"){
                    $(".box").append(sukses);
                    $("#tidakpuas button").eq(0).addClass("disabled").attr("disabled","disabled");
                    setTimeout(function(){
                        window.location.href = "masuk.php";
                    },2000);
                }else{
                    $(".box").append(gagal);
                    $("#tidakpuas button").eq(0).addClass("disabled").attr("disabled","disabled");
                }
            }
        });
    });
});