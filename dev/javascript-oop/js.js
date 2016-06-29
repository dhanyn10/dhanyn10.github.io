var Matematika = {};
Matematika.jumlah = function(n1,n2){
    
    //get 1st value and save it to variable a
    var a = n1;
    //get 2nd value and save it to variable b
    var b = n2;
    
    //determine the longest value
     var n_length = a.length;
    if(n_length < b.length)
        n_length = b.length;
    
    //make array to gather value from each variable
    //if we've 678346 it'll become [6, 7, 8, 3, 4, 6]
    arr1 = Array(n_length);
    arr2 = Array(n_length);
    
    //memindahkan nilai1 dan nilai2 ke dalam array
    for(c = 0; c < n_length; c++){
        if(a.substring(a.length-c-1, a.length-c) == "")
            arr1[(n_length-1)-c] = 0;
        else
            arr1[(n_length-1)-c] = parseInt(a.substring(a.length-c-1, a.length-c));

        if(b.substring(b.length-c-1, b.length-c) == "")
            arr2[(n_length-1)-c] = 0;
        else
            arr2[(n_length-1)-c] = parseInt(b.substring(b.length-c-1, b.length-c));
    }

    //calculate
    var arrHasil = Array(n_length+1);
    for(var c = 0; c < arrHasil.length; c++){
        jml = arr1[(n_length-1)-c] + arr2[(n_length-1)-c];
        if(jml >= 0){
            if(jml >= 10){
                arrHasil[(arrHasil.length-1)-c] = parseInt(jml.toString().substring(1,2));
                arr1[(arr1.length-2)-c]        += parseInt(jml.toString().substring(0,1));
            }
            else
                arrHasil[(arrHasil.length-1)-c] = jml;
        }
        else
            arrHasil[(arrHasil.length-1)-c] = 0;
    }
    var hasil = "";
    for(var c = 0; c < arrHasil.length; c++){
        hasil += arrHasil[c];
    }
    return hasil;
}