//inisiasi variabel
var profil  = "";
var nim     = "";
var gantivalue = "";

//fungsi jquery ketika dokumen html sudah siap
$('document').ready(function(){
    //jika element dengan id "sidebar-kiri" pada child elemen "li" diklik
    $('#sidebar_kiri li').click(function(){
        $('#sidebar_kiri li').removeClass('active');
        $(this).addClass('active');
    });
});

function aturUlang(){
    
    //menghitung panjang baris pada tabel profil
    n = $('table')[0].rows.length;
    
    //#data pilihan#
    //mengubah nama kode akses
    h_akses         = ["","Administrator","Publisher","Mahasiswa"];
    
    //data fakultas
    fakultas        = ["","Informatika","Rekayasa Industri", "Elektro"];
    
    //data angkatan
    angkatan        = ["",2011,2012,2013,2014,2015];
    
    //inisiasi pengaturan html
    html_akses      = "";
    html_fakultas   = "";
    html_angkatan   = "";
    
    //#pembuatan html option dan valuenya untuk data pilihan#
    
    //html option pada data pilihan akses
    for(a = 0; a < h_akses.length; a++)
        html_akses += "<option value='"+h_akses[a]+"'>"+h_akses[a]+"</option>";
    
    //html option pada data pilihan fakultas
    for(a = 0; a < fakultas.length; a++)
        html_fakultas += "<option value='"+(fakultas[a].replace(' ','_'))+"'>"+fakultas[a]+"</option>";
    
    //html option pada data pilihan angkatan
    for(a = 0; a < angkatan.length; a++)
        html_angkatan += "<option value='"+angkatan[a]+"'>"+angkatan[a]+"</option>";
    
    //perulangan mengubah struktur html kolom kedua
    for(a = 0; a < n; a++){
        
        //mendapatkan nama value dan membuatnya menjadi teks lowercase
        nv = $('table')[0].rows[a].cells[0].innerHTML.toLowerCase();
        iv = $('table')[0].rows[a].cells[1].innerHTML;
        
        //membuat penyimpanan lokal, mengatur nama value dan nilai value
        localStorage.setItem(nv, iv);
        
        // #mengganti setiap kolom kedua dari tabel profil menjadi kolom input nilai#
        //jika ditemukan baris fakultas pada kolom pertama
        if(nv == "fakultas"){
            
            //mengatur metode pengisian nilai fakultas
            $('table')[0].rows[a].cells[1].innerHTML =
            "<select onchange='gantinilai()' class='atur-profil' required>"+html_fakultas+"</select>";
        }else{
            //jika ditemukan baris angkatan pada kolom pertama
            if(nv == "angkatan"){
                //mengatur metode pengisian nilai angkatan
                $('table')[0].rows[a].cells[1].innerHTML =
                "<select onchange='gantinilai()' class='atur-profil' required>"+html_angkatan+"</select>";
            }else{
                if(nv == "akses"){
                    $('table')[0].rows[a].cells[1].innerHTML =
                    "<select onchange='gantinilai()' class='atur-profil' required>"+html_akses+"</select>";
                }else{
                    $('table')[0].rows[a].cells[1].innerHTML =
                    "<input onkeyup='gantinilai()' class='atur-profil' type='text' placeholder='"+iv+"'/>";
                }
            }
        }
    }
    //buat tombol "Perbaharui" didalam id "konten"
    $('#konten').append('<button id="perbaharui" onclick="perbaharui()">Perbaharui</button>');
    //hapus elemen dengan id "atur-ulang-profil"
    $('#atur-ulang-profil').remove();

}
function gantinilai(){
    
    //menghitung jumlah baris pada tabel
    n = $('table')[0].rows.length;
    
    /*
    inisiasi array "newprofil" dengan panjang array 2 kali panjang baris
    kali panjang baris karena digunakan untuk menampung nilai dari
    nama baris pertama dan baris kedua
    */
    newprofil = Array(n * 2);
    
    //inisiasi variabel penunjuk baris
    r = 0;
    
    /*
    variabel yang menampung informasi perubahan data
    misalkan nama='abcde'
    */
    gantivalue = "";
    for(var a = 0; a < n * 2; a+= 2){
        newprofil[a]    = $('table')[0].rows[r].cells[0].innerHTML;
        newprofil[a+1]  = document.getElementsByClassName('atur-profil')[r].value;
        r++;
        if(newprofil[a+1].length > 0)
            gantivalue += " " + newprofil[a] + "='" + newprofil[a+1] + "',";
    }
    gantivalue = gantivalue.substring(0, gantivalue.length-1);
}
function perbaharui(){
    
    //menghitung jumlah baris di tabel
    n = $('table')[0].rows.length;
    
    //mengisi data nim lama ke variabel "nim"
    nim = localStorage.getItem("nim");
    
    //ambil data nim baru
    //lakukan perulangan sebanyak jumlah baris yang telah dihitung sebelumnya
    for(a = 0; a < n; a++){
        
        //mengambil setiap nama baris pada kolom pertama
        cariNim = $('table')[0].rows[a].cells[0].innerHTML;
        
        //melakukan sesuatu jika nama baris adalah "nim"
        if(cariNim == "nim"){
            
            //ambil value kolom kedua pada baris saat ini
            newNim = document.getElementsByClassName('atur-profil')[a].value;
            
            //jika nim yang dimasukkan tidak kosong dan
            //berbeda dengan nim yang disimpan di localstorage
            if(newNim.length > 0 && newNim != localStorage.getItem("nim"))
                nim = newNim;
        }
    }
    
    //mengirim data dengan menggunakan AJAX
    jQuery.ajax({
        //tentukan url tujuan untuk mengirim dan menerima informasi melalui ajax
        url : "../controller/update-profil.php",
        
        /*
        isi data-data yang diperlukan untuk proses pengiriman dan menerima informasi
        jika data hanya satu, bisa menggunakan "varibel=value_variabel"
        jika data lebih dari satu, gunakan "{varabel1:value_variabel1, variabel2:value_variabel2}"
        */
        data : {perintah:gantivalue, nim:nim},
        
        //melakukan pengiriman data dengan type "POST"
        type : "POST",
        
        //mengatur type data menjadi json
        dataType : 'json',
        success : function(hasil){
            
            //menerima kembali informasi dari update-profil.php
            if(hasil != "gagal"){
                //ubah data seluruh baris kolom kedua sesuai dengan
                //data array yang diterima dari update-profil.php
                for(a = 0; a < hasil.length; a++)
                    $('table')[0].rows[a].cells[1].innerHTML = hasil[a];
            }else{
                
                //lakukan perulangan sebanyak jumlah baris yang ada di tabel profil
                for(a = 0; a < n; a++){
                    //ambil nama kolom pertama dan masukkan nilainya pada variabel nm_kolom
                    nm_kolom = $('table')[0].rows[a].cells[0].innerHTML;
                    //ambil nilai kolom sesuai dengan nama kolom yang telah diambil sebelumnya
                    //nilai kolom berasal dari localStorage
                    nilai_kolom = localStorage.getItem(nm_kolom);
                    //atur nilai kolom pada tabel kolom kedua sesuai dengan nilai variabel nilai_kolom
                    $('table')[0].rows[a].cells[1].innerHTML = nilai_kolom;
                }
            }
        }
    });
    //buat kembali tombol Atur ulang profil yang sebelumnya dihapus
    $('<button id="atur-ulang-profil" onclick="aturUlang()">Atur ulang profil</button>').insertBefore($('table')[0]);
    //hapus elemen dengan id "perbaharui"
    $('#perbaharui').remove();
}