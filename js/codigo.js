/* Llama a la infotmacion ingresada en un archivo json */

function funCargarDatos() {
    let peticion = new XMLHttpRequest();

    /* Interfaz que permite realizar peticiones HTTP a servidores WEB */

    /* OPEN --> Funcion que solicita a un archivo json para obtener los datos */
    // peticion.open("GET","http://127.0.0.1:5500/js/datos.json");
    // /OTRA FORMA ES :
    peticion.open("GET",".js/datos.json");

    /* onload -->la funcion para cuando los datos sean recibidos */
    peticion.onload = function () {
        if (peticion.status==200) {
            let datos = JSON.parse(peticion.response);

            /* Muestra los datos en el div */
            document.getElementById("contenido").innerHTML="Nombre:"+datos.nombre
            +" "+datos.apellido
            +"<br> Edad:"+datos.edad
            +"<br>Telefono "+datos.telefono
            +"<br>Direccion:"+datos.direccion;

            /* Muestra los datos en el formulario */
            document.getElementById("formNombre").value = datos.nombre+" "+datos.apellido;
            document.getElementById("formEdad").value = datos.edad;
            document.getElementById("formTelefono").value = datos.telefono;
            document.getElementById("formDireccion").value = datos.direccion;
        }
        
    }/* fin de onload */

    peticion.send();
}/* FIN FUNCION */