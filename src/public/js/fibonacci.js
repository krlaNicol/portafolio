function fibonacciR(){
    let fibonacciR = document.getElementById ('fibonacci').value;

  // Convertir el valor a número
  fibonacciR = parseFloat(fibonacciR);

        // Verificar que el valor sea un número
        if (isNaN(fibonacciR)) {
            alert("Por favor, introduce un número válido.");
            return;
        }

        //inicializacion de la secuencia

        let numeroDeElementos = fibonacciR;
        let secuencia = []; // se establece un array para guardar la secuencia
        let a = 0;
        let b = 1;
        
        //se crea condicional para el dato de 0, por algun motivo no lo estaba mostrando con el >=
        if (fibonacciR == 0) {
            secuencia.push(a);
            }
        if (fibonacciR >= 1) {
            secuencia.push(a);
            }
        if (fibonacciR >= 2) {
            secuencia.push(b);
            }

        for (let i = 2; i <= fibonacciR; i++) {
        let resultadoF = a + b;
        a = b;
        b = resultadoF;
        secuencia.push(resultadoF);

        // splice se usa para limitar el numero de elementos a ver en un array
        secuencia.splice(numeroDeElementos)
    } 
       

    //Mostrar resultado
    document.getElementById('resultado').textContent = `la Secuencia Fibonacci del numero
     ${fibonacciR} es: ${secuencia.join(', ')}`;

    }




    

   