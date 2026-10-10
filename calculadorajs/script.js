
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
    
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multi = num1 * num2;
    let division = num1 / num2;
    alert(
        "Resultados:\n" +
        "Suma: " + suma + "\n" +
        "Resta: " + resta + "\n" +
        "Multiplicación: " + multi + "\n" +
        "División: " + division
    );

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multi);
    console.log("División:", division);

} else {
    
    alert("Error: El primer número debe ser mayor que el segundo.");
    console.log("Error: El primer número debe ser mayor que el segundo.");
}