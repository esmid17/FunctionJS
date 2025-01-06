//unshift() agrega uno o más elementos al principio o al inicio del array

let u = [1, 2, 3, 4];
u.unshift(2);console.log(u);

//splice() agrega o elimina elementos en cualquier posición dentro del array
let s = [1, 2, 3, 4];
s.splice(1, 0, 5); //Agrega el número 5 en la posición 1, sin eliminar los elementos
console.log(s);

//Modificar elementos dentro de un array

//Podemos acceder a un elemento directamente por su índice y modificarlo
let i = ['Ana', 'Juan', 'Pedro', 'José'];
i[2] = 'Maria'; //Modifica el elemento en la posición 2
console.log(i);

//Si deseamos modificar el arreglo de forma inmutable, se puede utilizar 
//el método map() => Crea un nuevo arreglo con los valores modificados.

//let arregloMap = ['Azul', 'Amarillo', 'Rojo', 'Negro'];
let arregloMap = [10, 23, 35, 26];
let arregloNuevo = arregloMap.map(num => num === 10 ? 5 : num);
console.log(arregloNuevo);

//splice() también se puede utilizar
let z = [1, 2, 3];
z.splice (1, 1, 5);
console.log(z);

//Eliminar elementos de un array

//pop() elimina el último elemento del arreglo.
let arregloE = ['Azul', 'Amarillo', 'Rojo', 'Negro'];
arregloE.pop();
console.log(arregloE);

//shift() elimina el primer elemento de un array
let arregloS = ['Azul', 'Amarillo', 'Rojo', 'Negro'];
arregloS.shift();
console.log(arregloS);

//splice() para eliminar cualquier elemento dentro de un arreglo
let arregloSP = ['Azul', 'Amarillo', 'Rojo', 'Negro', 'Verde'];
arregloSP.splice(1, 3);
console.log(arregloSP);
