/**
 * Función para encriptar el texto ingresado.
 * Reemplaza las vocales con sus valores encriptados según el diccionario 'traduccion'.
 * Si el texto contiene caracteres no válidos o está vacío, muestra un mensaje de advertencia.
 * 
 * @param {Object} traduccion - Diccionario con la traducción de vocales.
 */
function encriptar(traduccion) {
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    const texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");

    if (texto != "") {
        var out = "";
        for (var i = 0; i < texto.length; i++) {
            if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')) {
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            } else if ((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == "") {
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if (texto[i] == 'a') {
                out += traduccion["a"];
            } else if (texto[i] == 'e') {
                out += traduccion["e"];
            } else if (texto[i] == 'i') {
                out += traduccion["i"];
            } else if (texto[i] == 'o') {
                out += traduccion["o"];
            } else if (texto[i] == 'u') {
                out += traduccion["u"];
            } else {
                out += texto[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = out;
    }

    return;
}

/**
 * Función para desencriptar el texto ingresado.
 * Reemplaza los valores encriptados con sus vocales correspondientes según el diccionario 'traduccion'.
 * Si el texto contiene caracteres no válidos o está vacío, muestra un mensaje de advertencia.
 * 
 * @param {Object} traduccion - Diccionario con la traducción de vocales.
 */
function desencriptar(traduccion) {
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");

    if (texto != "") {
        for (var i = 0; i < texto.length; i++) {
            if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')) {
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            } else if ((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == "") {
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
        texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
        texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
        texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
        texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
        texto_out.innerHTML = texto;
    }
    return;
}

/**
 * Función para copiar el texto encriptado/desencriptado al portapapeles.
 */
function clipboard() {
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}

// Asignar funciones a los botones
const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener('click', function() { encriptar(traduccion); });
des.addEventListener('click', function() { desencriptar(traduccion); });
copy.addEventListener('click', function() { clipboard(); });
