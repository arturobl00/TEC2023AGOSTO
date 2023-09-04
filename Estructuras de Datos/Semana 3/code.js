//Trabajando Variables
//Var de tipo entero
var entero = 10;
//Var de tipo Flotante
var real = 20.89;
//Var de tipo Cadena
var cadena = "Mi Saludo";
//Var de tipo Boleano
var banderaT = true;
var banderaF = false;

var elemento1 = document.getElementById("miEntero");
elemento1.textContent = entero;

var elemento2 = document.getElementById("miReal");
elemento2.textContent = real;

var elemento3 = document.getElementById("miCadena");
elemento3.textContent = cadena;

var elemento4 = document.getElementById("miBanderaT");
elemento4.textContent = banderaT;

var elemento5 = document.getElementById("miBanderaF");
elemento5.textContent = banderaF;

//Trabajando con arreglos
//Arreglo con datos constantes
var arregloTipo1 = [20,90,10,7,8,12];
//Arreglo con datos variados
var arregloTipo2 = ["uno",1,"dos",2,"tres",3];


function mostrarLista1(){
    var lista = document.getElementById("miLista1");

    for(var i=0; i<arregloTipo1.length; i++){
        var elementoLista = document.createElement("li");
        elementoLista.textContent = arregloTipo1[i];
        lista.appendChild(elementoLista); 
    }
}

mostrarLista1();

function mostrarLista2(){
    var lista = document.getElementById("miLista2");

    for(var i=0; i<arregloTipo2.length; i++){
        var elementoLista = document.createElement("li");
        elementoLista.textContent = arregloTipo2[i];
        lista.appendChild(elementoLista); 
    }
}

mostrarLista2();