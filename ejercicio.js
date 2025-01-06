const validarNumero = (validar) => {
    if (typeof validar !== 'number' || isNaN(validar)) {
        throw new Error('Los valores deben ser números!');
    }
};


//Crea una funcion declarada llamada calcularPromedio que reciba tres números como parámetros y retorne su promedio
const calcularPromedio = (a, b, c) => {
    [a, b, c].forEach(validarNumero);
    return (a + b + c) / 3;
};


//Declara una función expresada llamada determinarMayor que reciba dos números como parámetros y retorne cuál de ellos es mayor
const determinarMayor = function(num1, num2) {
    [num1, num2].forEach(validarNumero);
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else if (num2 > num1) {
        return `${num2} es mayor que ${num1}`;
    } else {
        return `${num1} y ${num2} son iguales`;
    }
};


//Crear una función flecha llamada esPar que reciba un número y retorne true si el número es par y false si no lo es
const esPar = (numero) => {
    validarNumero(numero);
    return numero % 2 === 0;
};


//Escribe una función anónima autoejecutable que:

//Llame a las funciones anteriores (calcularPromedio, determinarMayor y esPar).
//Use los valores de ejemplo y muestre los resultados en la consola.

//Reto: Agrega validaciones para asegurate de que los parámetros son números antes de realizar las operaciones.

//Si algún parámetro no es un número, lanza un error con un mensaje descriptivo.
(function() {
    console.log('Promedio:', calcularPromedio(2, 3, 4));

    console.log(determinarMayor(10, 5));
    console.log(determinarMayor(3, 8));
    console.log(determinarMayor(7, 7));
    
    console.log(esPar(4));
    console.log(esPar(7));
})();
