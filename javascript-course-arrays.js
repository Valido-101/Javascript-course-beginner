//los arrays pueden almacenar distintos tipos de datos
var myArray = ['Guapo',1,true];

//arrays multidimensionales
var myArray2 = [['Perro','bonito'],['Gato','estupido']];

//añadir elemento al final del array con .push()
myArray.push('Gorila');

alert(myArray);

//eliminar último elemento de array .pop() y devuelve un array compuesto por el elemento eliminado
var myArray3 = myArray.pop();

alert(myArray);

//el método .shift() funciona igual que .pop() solo que con el primer elemento