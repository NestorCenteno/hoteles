//jQuery('a')[0].innerHTML="cambio de texto";====document.getElementsByTagName('a')[0].innerHTML="hola mundo";
$(function(){
    document.addEventListener("deviceready",function(){
        //seccion de registro INICIO---------------------------------------------------------------------------
        if(!estaRegistrado())
            window.location.href="#registro";
        $('#regEnv').tap(function(){ //tap es el click en dispositicos moviles
            var nom=$('#regNom').val();
            var mail=$('#regMail').val();
            var tel=$('#regTel').val();
            var foto=$('#regFoto').attr('rel');
            if(nom !='' && mail !='' && tel !='' && foto !='' && foto !=undefined){
                enviardatos(nom,mail,tel,foto);
            }else{
                navigator.notification.alert('Todos los campos son requeridos',null/*funciona cuando den aceptar*/,'Registro','Intentar de nuevo');
            }
        });
        
        $('#regFoto').tap(function(){
            tomarFoto(); 
        });
        //seccion de registro FIN-----------------------------------------------------------------------------
    },false);
    
});