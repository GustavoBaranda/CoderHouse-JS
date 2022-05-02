const nombre = prompt("Bienvenido a la calculadora de Gustavo, cual es tu nombre?");
    console.log(nombre);

for (let vueltas = 0; vueltas < 5; vueltas++) { 
    
    let tipoDeOperacion = prompt(`Hola ${nombre}, Que tipo de operacion deseas realizar?

    1: Suma
    2: Resta
    3: Multiplicacion
    4: Division
    `);
       
    if (tipoDeOperacion > 0 && tipoDeOperacion < 5) {
    
        let numeroUno = parseFloat(prompt("ingrese primer numero"));
        let numeroDos = parseFloat(prompt("ingrese segundo numero")); 

        if (tipoDeOperacion == 1) {
            let resultado = numeroUno + numeroDos; 

            alert (`Tu Resultado es de la suma es ${resultado}!!`);

        } else if (tipoDeOperacion == 2) {

            let resultado = numeroUno - numeroDos; 

            alert(`Tu Resultado es de la resta es ${resultado}!!`);

        } else if (tipoDeOperacion == 3) {
            let resultado = numeroUno * numeroDos; 
            alert(`Tu Resultado es de la multiplicacion es ${resultado}!!`);  

        } else {
            let resultado = numeroUno / numeroDos; 
            alert(`Tu Resultado es de la division es ${resultado}!!`);  
        } 
   
    }
    console.log(vueltas)
}

alert("Gracias por ulizar nuestra calculadora");
