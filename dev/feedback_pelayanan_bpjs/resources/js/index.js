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
    */
    $("#loket button").click(function(){
        var kepuasan = $("input[name='puas']:checked").val();
        if(kepuasan == "tidak puas"){
            $("#loket").css("display","none");
            $("#tidakpuas").css("display","block");
        }
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
                if(info == "sukses")
                    $(".box").append("<span>Sukses</span>");
                else if(info == "gagal")
                    $(".box").append("<span>gagal</span>");
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
                if(info == "sukses")
                    $(".box").append("<span>Sukses</span>");
                else if(info == "gagal")
                    $(".box").append("<span>gagal</span>");
                    
            }
        });
    });
});