function saludar (nombre){
    return `Hola ${nombre}`;

}

//que es ES6 (enma script 6)
const sayHello = (nombre) => {
    return `Hello ${nombre}`;
    //return `Hola ` + nombre+ `! bienvenido`
}

console.log("arrow functions ", sayHello("Juanito"))
console.log("arrow functions " + sayHello("Juani"))
console.log(`salida de la funcion ${sayHello("Juan")}`)
//console.log(`salida de la funcion`)

const sumar = (a,b) => a+b;
console.log(`salida de la suma ${sumar(3,4)}`);





const fibonacci = (n) =>{
    let a=0, b=1;
    let serie = [];

    for(let i=0; i<n;i++){
        serie.push(a);
        [a,b] = [b,a+b]
    }//Fin del for
    return serie;
};




document.getElementById(`resultado`).innerHTML=`
    <div class="salidas">
        <p>10 elementos de fibonacci</p>
        <strong>${fibonacci(10)}</strong>
    </div>
`;

//como sacamos los n elemtos de la serie pidiendo al usuario
console.log(`10 primeros elementos: ${fibonacci(10)}`)


const mostrarResultado = () =>{
    
    const num = parseInt(document.getElementById("txtInput").value);
    console.log(`${num} primeros elemtos: ${fibonacci(num)}`)

    document.getElementById(`resultado`).innerHTML=`
    <div class="salidas">
        <p>${num} elementos de fibonacci</p>
        <strong>${fibonacci(num)}</strong>
    </div>
`;
}