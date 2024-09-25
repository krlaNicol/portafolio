// encontrar el factorial del numero ingresado

function factorialN(){
    let factorialN = document.getElementById ('factorial').value;

  // Convertir el valor a número
  factorialN = parseFloat(factorialN);

        // Verificar que el valor sea un número
        if (isNaN(factorialN)) {
            alert("Por favor, introduce un número válido.");
            return;
        }
//verificar ecuación
       if(factorialN<0){
        alert("El numero ingresado no es valido, ingrese numeros positivos")
        return;
       }
       let resultadoF=1;
       for(let i=1; i<=factorialN;i++){
        resultadoF *= i;

       }
    

    //Mostrar resultado
    document.getElementById('resultado').textContent = `El factorial de:
     ${factorialN} es: ${resultadoF}`;
    }