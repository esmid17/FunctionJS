/***********************************************************
                        FUNCIONES
************************************************************/ 

//Funciones en JS

//Función declarada
function miFuncion(a, b, c){
    console.log(arguments.length);
    console.log('La suma es: ' + (a + b + c));
}

miFuncion(2, 3, 4);

//La palabra return dentro de la función
function miReturn(a, b){
    return a + b;
}

let resultado = miReturn(4, 5);
console.log(resultado);

//Funcion de tipo expresión
//Declaración de una función que es igual a una expresión
let sumar = function (a, b){return a * b};
resultado = sumar(2, 4);
console.log(typeof sumar);
console.log(resultado);

//Funciones de tipo Self-Involking
//Porque son funciones que llaman a sí mismas
//Funciones anónimas
//No son muy comúnes pero pueden ser útiles en algunos casos
(function (a, b){
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);

//Funciones anónimas
/*setTimeout(function (){
    console.log('Hola desde una función anónima');
},10000);*/

const persona = {
    nombre: 'Diego',
    saludar(){
        return `Hola, soy ${this.nombre}`;
    },
    apellido: 'Gamboa'
}

console.log(persona.saludar());

//Funciones tipo flecha (arrow function)
//Se mantiene como una forma concisa de declarar funciones y es ampliamente utilizado.
const sumarValores = (a, b) => a + b;
console.log(sumarValores(5, 7));

const operaciones = { sumar: (a, b) => a + b,  restar: (a, b) => a - b};
console.log(operaciones.sumar(2, 3));
console.log(operaciones.restar(2, 3));