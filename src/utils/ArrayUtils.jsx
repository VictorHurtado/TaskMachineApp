
function SeparateArrayByChuncks(arregloOriginal= ["PHP", "JavaScript", "Go", "Rust", "Java", "C", "CSS", "Python"], LONGITUD_PEDAZOS = 5 ) {
   
    var  arregloDeArreglos = []; // Aquí almacenamos los nuevos arreglos

 // Partir en arreglo de 3
    for (let i = 0; i < arregloOriginal.length; i += LONGITUD_PEDAZOS) {
        let pedazo = arregloOriginal.slice(i, i + LONGITUD_PEDAZOS);
        arregloDeArreglos.push(pedazo);
    }
    return arregloDeArreglos;
}

export {SeparateArrayByChuncks};