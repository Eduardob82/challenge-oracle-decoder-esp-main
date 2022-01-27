
var btnencriptarTexto = document.querySelector("#btn-encriptar");
var btndesencriptarTexto = document.querySelector("#btn-desencriptar");
var copiarTexto = document.querySelector("#btn-copy");
var textoIngresado = "";
var textoEncriptado = "";


btnencriptarTexto.addEventListener("click",function(event){
       event.preventDefault(); 
       var textoIngresado = document.querySelector("#input-texto").value;
       encriptar(textoIngresado);      
               
           
});     
                             

btndesencriptarTexto.addEventListener("click",function(event){
       event.preventDefault();
       var textoEncriptado = document.querySelector("#input-texto");
       desencriptar(textoEncriptado);
       Input.value = " "
});

copiarTexto.addEventListener("click", function(event){
       event.preventDefault();

       console.log(copiarTexto);
});



function encriptar(textoIngresado){
       var textoIngresado = document.querySelector("#input-texto").value;
       var cajaEncriptacion = document.querySelector("#msg");
       var textoEncriptado = textoIngresado

       .replace(/e/gi, "enter")
       .replace(/i/gi, "imes")
       .replace(/a/gi, "ai")
       .replace(/o/gi, "ober")
       .replace(/u/gi, "ufat");
       

  cajaEncriptacion.value = textoEncriptado;

  return textoEncriptado;
   
   
}

    

function desencriptar(textoIngresado){
       var textoIngresado = document.querySelector("#input-texto").value;
       var cajaEncriptacion = document.querySelector("#msg");
       var textoEncriptado = textoIngresado

       .replace(/enter/gi,"e")
       .replace(/imes/gi,"i")
       .replace(/ai/gi,"a")
       .replace(/ober/gi, "o")
       .replace(/ufat/gi, "u");

       cajaEncriptacion.value = textoEncriptado;

       return textoIngresado;
}






/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/