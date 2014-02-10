function tomarFoto(){
    var captureSuccess = function(mediaFiles) {
    var i, path, len;
        path = mediaFiles[0].fullPath;
        $('#regFoto').attr('rel',path);
        $('#regMFoto').html('img src="'+path+'" style="width:100%;"/>');
        };
    /*recorrer imagenes de la camara
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        
        }*/
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start video capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
}