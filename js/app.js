function validar() {
    var form=document.form;

if (form.nombre.value==0)
{alert ("El campo nombre está vacío");

return false;}
 

if (form.email.value==0) 
{alert ("El campo email está vacío");

return false;}

if (form.telefono.value==0) 
{alert ("El campo teléfono está vacío");

return false;}

if (form.comentario.value==0) 
{alert ("Debe dejar un comentario");

return false;}

alert("Datos enviados con éxito");
form.submit();

}