//comentarios

//variables
let nombre = "Juanito"
let apellido = 'Perez'
let nomMigue = "Miguel Alejandro Cabrera Diaz"


console.log("Hola " + nombre + " " + apellido) //si ponemos asi 0



console.log(`Hola, Bienvenido ${nombre} ${apellido}`)
//alert(`Hola, Bienvenido ${nombre} ${apellido}`)

document.getElementById('container').innerHTML += `
    <div class="resultados">
        <h3>Variables</h3>
        <strong>hola ${nombre} ${apellido}</strong>
        <br>
        <strong>hola ${nomMigue}</strong>
    </div>
`;


//Tipos de datos
let edad = 20;
let peso = 175.5; 
let estudiante = 'Anita';
let eEstudiante = true;
let equipo; //no definido
let mascota = null;



document.getElementById('container').innerHTML += `
    <div class='resultados'>
        <h3>BIENVENIDOS</h3>
        <strong>tu edad es: ${edad} años y  ${peso} kg  nombre ${estudiante} es ${eEstudiante} </strong><br>
        <strong> su equipo es  ${
            equipo==undefined? "no tienes equipo" : "Tienes equipo favorito"}</strong><br>
        <strong>tambien ${
            mascota==null?"no tiene mascota" : "tiene mascota"}</strong>
    </div>

`;

//arrays

let frutas = ["manzanas", "pera", "Uva", "piña", "Sandia", "Sandia"]
console.log(frutas[0])

frutas.push('mango')

frutas.join(" , ")

document.getElementById('container').innerHTML += `
    <div class="resultados">
        <h3>Arreglos</h3>
        <strong>Frutas</strong>
        ${frutas.join(" , ")}

    </div>
`;


let numeros = [2,3,4,5,6,7,8,9,10,11,12,13]
let dobles = numeros.map((num) => num*2)
let pares = numeros.filter(n=>n%2==0)
let total = numero.reduce((suma,acum) => suma + numero, 0)

document.getElementById('container').innerHTML += `
    <div class="resultados">
        <strong>dobles</strong>
        ${dobles.join(" , ")}
        <br>
        <strong>pares</strong>
        ${pares.join(" , ")}
    </div>
`;w