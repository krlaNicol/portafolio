// Funcion para convertir de C a F

function convertirAF() {
    // Obtener el valor del input
    let celsius = document.getElementById('celsius').value;
    
    // Convertir el valor a número
    celsius = parseFloat(celsius);
    
    // Verificar que el valor sea un número
    if (isNaN(celsius)) {
        alert("Por favor, introduce un número válido.");
        return;
    }
    // celsius
    let f= celsius*(9/5);
    resultadoF= f+32;
    // Kelvin
    let k= celsius+273.15
    //Mostrar resultado
    document.getElementById('resultadoC').textContent = `Temperatura en Fahrenheit:
     ${resultadoF.toFixed(2)} °F`;
    
     document.getElementById('resultadoK').textContent=`Temperatura en Kelvin: ${k.toFixed(2)} °K`;
 }