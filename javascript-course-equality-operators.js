/*
    Tipos de comparadores: 

    == -> si los datos son de distinto tipo intenta castearlos al mismo y compararlos (3 == '3' -> true)
    === -> los tipos de datos deben ser el mismo para que devuelva true (3 === '3' -> false)
*/
function testEqual(val){
    if (val == 12) {
        return "Equal";
    }
    else{
        return "Not Equal";
    }
}

alert(testEqual(213));