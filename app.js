const textoUsuario = document.querySelector('.texto-usuario textarea');
const cifrado = document.querySelector('.mensaje textarea');
const copiar = document.getElementById('copiar');
const encri = document.getElementById('encri');

function mostrar() {
  document.getElementById('mencritado').style.display = 'block';
}

function no_mostrar() {
  document.querySelector('.contenido .decripcion').style.display = 'none';
  document.querySelector('.texto-encriptado .contenido img').style.display = 'none'
}

function aceptacion(mensaje){
  swal("Felicidades!!!", mensaje, "success");
}

function rechazo(mensaje){
  swal("Error!!!", mensaje, "error")
}

function copiado(mensaje){
  swal("Copiado!!!", mensaje, "info")
}

function encritar() {
  const texto = textoUsuario.value;

  if (!texto) {
    rechazo("Debes ingresa un Texto!");
    return;
  }

  if (/[^a-z]/.test(texto)) {
    rechazo("Solo letras minúsculas y sin acentos!");
    document.querySelector('.btn p').style.color = 'red';

   
    return;
  }


  no_mostrar();
  mostrar();

  let arr = texto.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      arr[i] = 'ai';
    }
    if (arr[i] === "e") {
      arr[i] = 'enter';
    }
    if (arr[i] === "i") {
      arr[i] = 'imes';
    }
    if (arr[i] === "o") {
      arr[i] = 'ober';
    }
    if (arr[i] === "u") {
      arr[i] = 'ufat';
    }
  }

  aceptacion('Tu texto fue Encriptado con Exito!');
  const cifra = arr.join('');
  cifrado.value = cifra;
}


function desencritar() {
  const texto = textoUsuario.value;

  if (!texto) {
    rechazo("Debes ingresa un Texto!");
    return;
  }
  no_mostrar();
  mostrar();

  const mapaReemplazos = {
    "ai": 'a',
    "enter": 'e',
    "imes": 'i',
    "ober": 'o',
    "ufat": 'u'
  };

  const regex = new RegExp(Object.keys(mapaReemplazos).join("|"), "ig");
  const resultado = texto.replace(regex, match => mapaReemplazos[match.toLowerCase()]);

  aceptacion("Tu texto fue Desencriptado con Exito!")
  cifrado.value = resultado;
}




function copyToClipboard () {
  no_mostrar();
  copiado("Texto copiado con Exito!")
  encri.select();
  navigator.clipboard.writeText(encri.value)
  window.getSelection().removeAllRanges();
}



