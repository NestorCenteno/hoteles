//jQuery('a')[0].innerHTML="cambio de texto";====document.getElementsByTagName('a')[0].innerHTML="hola mundo";
$(function(){
    document.addEventListener("deviceready",function(){
        window.location.href="#registro";
        $('#regEnv').click(function(){
            var nom=$('#regNom').val();
            var mail=$('#regMail').val();
            var tel=$('#regTel').val();
            if(nom !='' && mail !='' && tel !=''){
                alert(nom+' - '+mail+' - '+tel);
            }else{
                navigater.notification.alert('Todos los campos son requeridos',null/*funciona cuando den aceptar*/,'Registro','Intentar de nuevo');
            }
        });     
    },false);
    
});