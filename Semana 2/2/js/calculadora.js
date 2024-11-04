
letoperacion ="";//
let primerNumero="";


function agregarNumero(num){
    const resultado = document.getElementById('resultado');
    resultado.value += num;
}

function limpiar(){
    document.getElementById('resultado').value="";
    primerNumero="";
    operacion="";
}

function agregarOperacion(op){
    const resultado= document.getElementById('resultado');
    if(resultado.value !== ''){
        primerNumero = resultado.value; //almacenamos el primer numero
        operacion =op;  //guardamos la operacion
        resultado.value='';
    }///if
}

function calcularResultado(){
    const segundoNumero = document.getElementById('resultado').value;
    let res;
    //revisamos que los numeros o las cadenas tengan valor
    if(primerNumero !== '' && segundoNumero !== '' ){
        switch(operacion){
            case '+' ://suma
                console.log(primerNumero + segundoNumero);
                res = parseFloat(primerNumero) + parseFloat(segundoNumero);
                break;

                case '-' ://resta
                console.log(primerNumero + segundoNumero);
                res = parseFloat(primerNumero) - parseFloat(segundoNumero);
                break;

                case '*' ://multiplicacion
                console.log(primerNumero + segundoNumero);
                res = parseFloat(primerNumero) * parseFloat(segundoNumero);
                break;

                case '/' ://division
                if(segundoNumero == 0){
                    alert("Division by Zero");
                    return;
                }//if
                res = parseFloat(primerNumero) / parseFloat(segundoNumero);
                break;
        }//switch
        document.getElementById('resultado').value=res;
        //reiniciamos los valores
        primerNumero='';
        operacion='';
    }//llave del if de los numeros con valor
}