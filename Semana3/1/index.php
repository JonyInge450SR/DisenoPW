<?php
include ("crud/dbcontext.php");
echo "Pagina de conexion<br>";
$con = conectar();
//http://localhost/dpw/semana3/1/index.php
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Estados</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/index.js"></script>
</head>
<body>
    <select id="estados">
       -
    </select>
    <br>
    <label for="estado">Nombre</label>
    <input type="text" id="estado" >
    <button id="agregar">Agregar</button>
</body>
</html>