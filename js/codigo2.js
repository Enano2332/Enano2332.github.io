/* Todos las funciones de jquery Inician con el $ */
$(document).ready(function () {

    /* Ready--> Verifica que este listo y carga la pagina */

    /* JQUERY nos permite utilizar y dar funcionalidad a todos los elementos cargandos en el html */

    /* Busca un elemento llamado botton y tenga la clase llamada cargar */
    $("button#cargar").click(function () {
        /* Al presionar el botton , llama y ejecuta una funcion */
        funCargarDatos();
    })

    $("button#elimina").click(function () {
        /* Al presionar el botton , llama y ejecuta una funcion */
        funEliminarDatos();
    })


    /* Oculta el id contenido desde el principio en la carga del html */
    $("#contenido").hide();

})/* Fin de JQUERY */

function funCargarDatos() {
    /* hace un llamado a JAX */
    $.ajax({
        url: "./js/datos.json"
    }).done(function (respuesta) {
        /* done-->responde cuando todos los datos han sido cargandos exitosamente, y si son correctos ejecuta el codigo de la funcion destinada.(el done == status 200 ) */

        /* respuesta es el nombre que se creo para el objeto de Json */

        console.log("respuesta", respuesta);

        /* mostrar datos obtenido del JSON , en la pantalla del HTML */
        $("#contenido").html("Nombre: " + respuesta.nombre
            + " " + respuesta.apellido
            + "<br> Edad:" + respuesta.edad
            + "<br>Telefono " + respuesta.telefono
            + "<br>Direccion:" + respuesta.direccion);


        /* Muestra los datos dentro de contenido usando un efecto de slide*/

        $("#contenido").slideDown("slow"); //slow-fast

        /* Mostrar en formulario */
        $("#formNombre").val(respuesta.nombre + " " + respuesta.apellido);
        $("#formEdad").val(respuesta.edad);
        $("#formTelefono").val(respuesta.telefono);
        $("#formDireccion").val(respuesta.direccion);
    })
}//FiN de la funcion 

function funEliminarDatos() {
    $("#contenido").html("");
    $("#contenido").hide(2000);

    $("#formEdad").val("");
    $("#formTelefono").val("");
    $("#formDireccion").val("");
    $("#formNombre").val
}