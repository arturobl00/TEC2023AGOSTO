//Declarando constante kelvin con un valor de 293
const kelvin = 0
//Declarando variable celsius que vale kelvin - 273
var celsius = kelvin - 273
//Declaramos Fahrenheit usando el valor de celsius y una ecuación
var fahrenheit = celsius * (9/5) + 32
//Convertimos a un numero redondo el calculo anterior esto con un objeto Math y un metodo floor que redondear hacia abajo
fahrenheit = Math.floor(fahrenheit)

console.log(`the temperature is ${fahrenheit} degress fahrenhei`)

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

newVariable = 1
console.log(typeof newVariable);

var a= "Marjan"
var b= 5
var c= true
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)


var variableUno = 20
var variableDos = 30.5

var cadenaUno = "Hola"
var cadenaDos = "Como estas"

var banderaUno = true
var banderaDos = false

const constanteUno = 10
const constanteDos = "Que tal"

variableUno = variableDos + 20;

//constanteUno = 20;

console.log(variableUno)
console.log(variableDos)

console.log(cadenaUno)
console.log(cadenaDos)

console.log(banderaUno)
console.log(banderaDos)

console.log(constanteUno)
console.log(constanteDos)

//Concatenar es mezclar texto y datos

console.log(cadenaUno + " " + cadenaDos + " Este es un ejemplo de concatenar")

console.log("El dato de la variable variableUno es: " + variableUno + ", " + "el dato de la variable variableDos es " + variableDos + ", " + " el dato de la variable banderaUno es: " + banderaUno + ", el dato de la variable banderaDos es: " + banderaDos)

//Interpolar
console.log(`El valor de la variableUno es ${variableUno} y el de la variableDos es ${variableDos}`)

const x= 50;
var resultado

resultado= x*5

console.log(`El resultado de la variable es:  ${resultado}` )

