$(document).ready(function(){
cargarEstados();

    function cargarEstados(){
        // console.log("Hola Mundo");
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            data: {'lista' : 'todos' },
            dataType: "json",
            success: function(estados){
                $("#estados").append("<option value=''>Seleccione una opcion</option>");  
        $.each(estados,function(i,estado){
                $("#estados").append("<option value=" + estado.idestado + ">"+ estado.nombre + "</option>");  
            });//each
            },//succes 
            error: function(){
                alert("Error en la peticion ajax");
            }
        });//ajax
    }//funcion cargar estados

    $("#agregar").click(function(){
        //console.log("Boton click");
        var nombreEstado = $("#estado").val();
        
        $.ajax({
                url:"crud/estados.php",
                type: "POST",
                data: {
                    'ADD' : 'estado',
                    'nombre' : nombreEstado
                },//data
                dataType: 'json',
                succes: function(data){
                    alert(data.estado);
                    $("#divAgregar").toggle();
                    $("#estados").empty();
                    cargarEstados();
                },
                error : function(data){
                    alert(data.estado);
                }
        });//ajax
    });//agregar

    $("#eliminar").click(function(){
        var nombreEliminar = $("#estadoeliminar").val();
        console.log(nombreEliminar);
        $("#divEliminar").toggle();
        if(nombreEliminar===""){
            alert("El nombre es requerido");
            return;
        }
        $.ajax({
                url: "crud/estados.php",
                type: "POST",
                dataType: "json",
                data: {
                    'DELETE' : 'estado',
                    'nombre' : nombreEliminar
                },
                succes: function(data){
                    $("#estados").empty();
                    alert(data.estado);
                    cargarEstados();

                },
                error: function(data){
                    alert(data.estado);
                }
        });//ajax
    })

    $("#Actualizar").click(function(){
        var idEstado = $("#idEstado").val();
        var nombreEstado = $("estadoActualizar").val();
        if(nombreEstado===""){
            alert("Ingrese un nombre valido");
            return;
        }
        $("#divActualizar").toggle();
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            dataType: "json",
            data:{
                "UPDATE" : "estado",
                "idEstado": idEstado,
                "nombre" : nombreEstado
            },
            succes: function(data){
                $("#estados").empty();
                cargarEstados();
                alert(data.estado);
            }//succes
        });//ajax
    })

    $("#btAgregar").click(function(){
        $("#divAgregar").toggle();
    })//boton agregar
    $("#btEliminar").click(function(){
        $("#divEliminar").toggle();

    })//boton eliminar

    $("#btActualizar").click(function(){
        $("#divActualizar").toggle();
        $("#idEstado").val($("#estados").val());
        $("#estadoActualizar").val($("#estados option:selected").text());
    })
});