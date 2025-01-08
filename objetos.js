/***********************************************
                    OBJETOS
************************************************/

//Características principales de los objetos en JS

//Claves y valores:

//Las claves son cadenas o símbolos(únicos).
//Los valores pueden ser de cualquier tipo: números, cadenas, funciones, otros tipos de objetos, etc.

//Dinamismo:

//Los objetos pueden modificarse en tiempo de ejecución(agregar, modificar, o eliminar propiedades de un object).

//Nota especial:
//Objetos se pueden incluir métodos
//Los métodos son funciones asociados a un objeto.

//Objetos ==> propiedades y métodos

let persona = {
    nombres: 'Juan',
    apellido:'Pérez',
    email: 'jperez@gmail.com',
    edad: 35
}

console.log(persona);

//Incluir métodos en los objetos

let people = {
    name: 'Andy',
    lastname:'Cooks',
    age: 34,
    fullname: function (){
        return this.name + ' ' + this.lastname;
    }
}

console.log(people.fullname());
const people2 = {
    name: 'Mary',
    latname: 'Dalas',
    age: 22,
    saludo: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}

console.log(people2.name);
people2.saludo();

//Usando el constructor Object
//Otra forma de crear un objeto

const persona1 = new Object();
persona1.nombre = 'Maria';
persona1.apellido = 'Velez';
persona1.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre}+ ' ' + ${this.apellido}`);
}

//Usando la clase Object.create()
//Permita crear un objeto basado en un prototipo
const prototipoPersona = {
    saludar: function(){
        console.log(`Hola desde prototipo, soy ${this.nombre}`);
    }
}

const persona2 = Object.create(prototipoPersona);
persona2.nombre = 'Carlos';
persona2.saludar();

//Usando clases (introducido desde ES6 ==> ES2024)
//Proporcionar una sintaxis más estructurada para crear objetos
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Hola desde clase, soy ${this.nombre}`)
    }
}

const persona3 = new Persona('Ana', 'Rios');
persona3.saludar();

//Usando funciones constructoras
//Forma clásica, utilizada no muy frecuente

function Persona1(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola desde función, soy ${this.nombre}`)
    }
}

const persona4 = new Persona1('Luis', 45);
persona4. saludar();

//Manipulación de los datos o propiedades de los objetos
//1. Agregar o modificar propiedades

const persona5 = {nombre: 'Pedro'}
persona5.edad = 34;
persona5.nombre = 'Pedro Martinez';
console.log(persona5);

//2. Eliminar propiedades
//delete persona5.edad;
console.log(persona5);

//3. Iterar sobre las propiedades

for(nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad])
}

for (let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`);
}

//4. Verificar propiedades
console.log('name' in persona5);
console.log(persona5.hasOwnProperty('nombre'));

//Métodos útiles para trabajar con objetos
//1. Object.keys()
//Devolver un array con las claves del objeto
console.log(Object.keys(persona5));

//2. Object.values()
//Devuleve un array con los valores del objeto
console.log(Object.values(persona5));

//3. Object.entries()
//Devuelve un array de pares [claves, valores]
console.log(Object.entries(persona5));

//4. Object.assign()
//Copia las propiedades de un objeto a otro
const copia = Object.assign({}, persona5);
console.log(copia);

//5. Object.freeze()
//Congelar un objeto para evitar modificaciones
//Object.freeze(persona5);

//6. Object.seal()
//Permite modificar propiedades existentes, pero no agregar o eliminar propiedades
Object.seal(persona5);

persona5.direccion = 'Quito';
console.log(persona5);

//Nota:
//Impresión de los valores de las propiedades de un objeto
let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//JSON es una notación, o sea, un objeto
//stringify convierte a cadena o String cada propiedad

console.log(personaString);

