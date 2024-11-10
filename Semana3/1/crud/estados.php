<?php
header('Content-Type: application/json');
include ("dbcontext.php");
//obtener todos los estados
if($_POST['lista']=="todos"){
    $con = conectar();
    
    //formamos el sql para leer
    $sql = "select * from estados";
    //ejecutamos la consulta sql
    $rs= $con->query($sql);
    $estados=[];
    while( $row = $rs->fetch_assoc() )
        $estados[]=$row;
    //retormamos en formato json el array
    echo json_encode($estados);
}
if($_POST['ADD']=="estado"){
    $nombreEstado = $_POST['nombre'];
    try{
        $con = conectar();
        $sql= "insert into estados(nombre) values(?)";
        $stmt= $con->prepare($sql);
        $stmt->bind_param("s",$nombreEstado);
        $stmt->execute();
        echo json_encode(array('estado' => 'Estado Agregado!!'));
        //return;
    }//try
    catch(Exception $e){
        echo json_encode(array('estado' => $e->getmessage())
    );
    }
}
if($_POST["DELETE"]=="estado"){
    try{
    $con = conectar();
    $sql = "DELETE from estados where nombre = ?";
    $stmt = $con->prepare($sql);
    $stmt -> bind_param("s",$_POST['nombre']);
    $stmt -> execute();
    if($stmt->affected_rows > 0)
        echo json_encode(array("estado "=> "Estado eliminado!!"));
    else
        echo json_encode(array("estado "=> "Estado no Existe!!"));
    }//try
    catch(Exception $e){
        echo json_encode(array("estado"=> "error en el sql"));
    }

}

if ($_POST["UPDATE"]=="estado"){
    $con = conectar();
    try{
        $sql = "update estados set nombre = ? where idestado=?";
        $stmt = $con ->prepare($sql);
        $stmt-> bind_param("sd",$_POST['nombre'] ,$_POST['idEstado']);
        $stmt-> execute();
        if($stmt->affected_rows > 0)
        echo json_encode(array("estado "=> "Estado Actualizado!!"));
    else
        echo json_encode(array("estado "=> "Estado no Existe!!"));
    }
    catch(Exception $e){
        echo json_encode(array("estado"=> "Error en el sql"));
    }
}
?>