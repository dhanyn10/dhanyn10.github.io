function jumlah(){
    
    //mengambil nilai dari nama elemen
    nilai1 = document.getElementsByName('nilai1')[0].value;
    nilai2 = document.getElementsByName('nilai2')[0].value;
    
    //menentukan nilai terpanjang
    n_length = nilai1.length;
    if(n_length < nilai2.length)
        n_length = nilai2.length
    
    //membuat 2 array dengan panjang sesuai dengan n_length
    arr1 = Array(n_length);
    arr2 = Array(n_length);
    
    //memindahkan nilai1 dan nilai2 ke dalam array
    for(a = 0; a < n_length; a++){
        if(nilai1.substring(nilai1.length-a-1, nilai1.length-a) == "")
            arr1[(n_length-1)-a] = 0;
        else
            arr1[(n_length-1)-a] = parseInt(nilai1.substring(nilai1.length-a-1, nilai1.length-a));

        if(nilai2.substring(nilai2.length-a-1, nilai2.length-a) == "")
            arr2[(n_length-1)-a] = 0;
        else
            arr2[(n_length-1)-a] = parseInt(nilai2.substring(nilai2.length-a-1, nilai2.length-a));
    }


    arrHasil = Array(n_length+1);
    for(a = 0; a < arrHasil.length; a++){
        jml = arr1[(n_length-1)-a] + arr2[(n_length-1)-a];
        if(jml >= 0){
            if(jml >= 10){
                arrHasil[(arrHasil.length-1)-a] = parseInt(jml.toString().substring(1,2));
                arr1[(arr1.length-2)-a]        += parseInt(jml.toString().substring(0,1));
            }
            else
                arrHasil[(arrHasil.length-1)-a] = jml;
        }
        else
            arrHasil[(arrHasil.length-1)-a] = 0;
    }
    console.info("arr1: "   +arr1);
    console.info("arr2: "   +arr2);
    console.info("hasil: "  +arrHasil);
}
function kurang(){
    //mengambil nilai dari nama elemen
    nilai1 = document.getElementsByName('nilai1')[0].value;
    nilai2 = document.getElementsByName('nilai2')[0].value;
    
    //menentukan nilai terpanjang
    n_length = nilai1.length;
    if(n_length < nilai2.length)
        n_length = nilai2.length
    
    //membuat 2 array dengan panjang sesuai dengan n_length
    arr1 = Array(n_length);
    arr2 = Array(n_length);

    if(nilai1.length >= nilai2.length){//jika nilai1.length lebih besar dari nilai2.length
        
        //masukkan nilai1 ke dalam arr1 dan nilai2 ke dalam arr2
        for(a = 0; a < n_length; a++){
            
            //untuk arr1
            jArr1 = parseInt(nilai1.charAt(nilai1.length-1-a));
            if(jArr1 > 0)
                arr1[(n_length-1)-a] = jArr1;
            else
                arr1[(n_length-1)-a] = 0;

            //untuk arr2
            jArr2 = parseInt(nilai2.charAt(nilai2.length-1-a));
            if(jArr2 > 0)
                arr2[(n_length-1)-a] = jArr2;
            else
                arr2[(n_length-1)-a] = 0;
        }
        
        arrHasil = Array(n_length);
        for(a = 0; a < n_length; a++){
            hsl = arr1[n_length-1-a] - arr1[n_length-1-a];
            if(hsl >= 0)
                arrHasil[n_length-1-a] = hsl;
            else if(hsl < 0)
                
        }
        console.info(arr1);
        console.info(arr2);
        
    }else{
        
        for(a = 0; a < n_length; a++){
            
            //untuk arr1
            jArr1 = parseInt(nilai2.charAt(nilai2.length-1-a));
            if(jArr1 > 0)
                arr1[(n_length-1)-a] = jArr1;
            else
                arr1[(n_length-1)-a] = 0;

            //untuk arr2
            jArr2 = parseInt(nilai1.charAt(nilai1.length-1-a));
            if(jArr2 > 0)
                arr2[(n_length-1)-a] = jArr2;
            else
                arr2[(n_length-1)-a] = 0;
        }

        console.info(arr1);
        console.info(arr2);
    }
}