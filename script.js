const textoIngreso = document.querySelector(".texto-ingreso");
const textoResultado = document.querySelector(".texto-resultado");

const mensajeContenedor = document.getElementById("mensaje-contenedor");
const textoResultadoStyle = document.getElementById("texto-resultado");
const textoIngresoStyle = document.getElementById("texto-ingreso");
const btnDesencriptarSyle = document.getElementById("boton-copiar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(stringEncriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;

}

function btnEncriptar(){
    const textoEncriptado = encriptar(textoIngreso.value);
    textoResultado.value = textoEncriptado;
    textoIngreso.value = "";
    mensajeContenedor.style.display = "none";
    textoResultadoStyle.style.display = "block";
    btnDesencriptarSyle.style.display = "block";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoIngreso.value);
    textoResultado.value = textoEncriptado;
    textoIngreso.value = "";
    mensajeContenedor.style.display = "none";
    textoResultadoStyle.style.display = "block";
    btnDesencriptarSyle.style.display = "block";
}

function btnCopiar() {
    const content = document.getElementById("texto-resultado").value;
    textoIngreso.value = content; // Valor se copia en el textarea de ingreso de texto

    textoResultado.select(); // Selecciona el texto en el textarea de ingreso de texto
    document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
}
