function cambiarImagen(){
    //menu desplegable
    const select = document.getElementById('imagen');
    //division para mostrar la imagen
    const backGroundBox = document.getElementById('backGroundBox');
    //obtenemos la imagen seleccionada
    const selectImagen = select.value;

    if(selectImagen)
        backGroundBox.style.backgroundImage = `url('${selectImagen}')`;
    else
    backGroundBox.style.backgroundImage = 'none';

}