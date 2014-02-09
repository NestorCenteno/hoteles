function subirFoto(foto,nom){
    var options = new FileUploadOptions();
    options.fileKey="archivo";
    //options.fileName=foto.substr(foto.lastIndexOf('/')+1);
    options.fileName="foto01-nestor";
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "registro";
    params.value2 = "toma foto";
    params.value2 = "hotelC";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(foto, "http://igitsoft.com/pgtest.php", function(r){
        if(r.response==1){
            naviagtor.notification.confirm("Registro Realizado Satisfactoriamente",/*funcionalidad de los botones*/function(btn){
                switch(btn){
                    case 1:
                        navigator.notification.vibrate(1000);
                        break;
                    case 2:
                        navigator.notification.beep(2);
                        break;
                }
                window.location.href="#home";
                guardarUsuario(nom,infoDispositivo('id'));
            },"Registro",/*botones separados con coma*/"Vibrar,Beep,Aceptar");
        }else{
            navigator.notification.alert("Error al subir el archivo",null,"Error de Servidor","Aceptar");
        }
    }, fail, options);
}