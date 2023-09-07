console.log("OPERADORES DE COMPARACION----------------------------------");
let a = 2, b=3, c = "2";

if(a===b){
    console.log("Es cierto");
}else{
    console.log("No es cierto");
}
console.log("\nOPERADORES no es igual por VALOR  !=   ------------------------------------");
    if (a != c) {
        console.log("Es cierto");
    }else{
        console.log("No es cierto");
    }

console.log("\nOPERADORES no es igual por VALOR !==  ------------------------------------");
if (a !== c) {
    console.log("Es cierto");
}else{
    console.log("No es cierto");
}       

console.log("\nOPERADORES resto numero par o impar  ------------------------------------");
let x = 5;
if(x % 2 === 0){
    console.log("Es Par")
}else{
    console.log("Es Impar")
}

console.log("\nEstructura de control repetitivas  ------------------------------------");
console.log("\nUtilizando el for--------------------------------\n");
//tabla del 5
for (let i = 0; i < 11; i++) {
    console.log("5 * "+[i]+" = "+(5*i));
}
console.log("");
let listaCompras = ["Pan","Azucar","Tomate","Lecherita","Yerba","Cafe"];
for (let i = 0; i < listaCompras.length; i++) {
    //let insumos=listaCompras[i];
    //console.log(insumos);
    console.log(`${i+1}-${listaCompras[i]}`); 
}
   
//while
console.log("\nUtilizando el while--------------------------------\n");
let contador = 0;
let i =0;
while (contador<listaCompras.length) {
    console.log(listaCompras[i]);
    i++;
    contador++;
}
console.log("\nUtilizando el DO While--------------------------------\n");
let cont = 0;
let j =0;
do{
    console.log(listaCompras[j]);
    j++;
    cont++;
}while (cont<=listaCompras.length); 

console.log("\nUtilizando prompt  ingreso de numeros--------------------------------\n");
let respuesta = prompt("ingrese un numero")
let cierre = false;

while (cierre!== true) {
    console.log("respuesta")
    respuesta = prompt("Desea ingresar mas numeros");
    if(respuesta==="s"){
        respuesta = prompt("Ingresar otor numero");
        console.log(respuesta);
    }else if(respuesta === "n"){
        cierre = true;
    }else{
        break;
    }
}    

console.log("\nUtilizando Funciones-------------------------------\n");
//funcion Declarativa-------------------------------
//Implementacion
function saludo(){
    console.log("Bienvenido a mi sitio");
}
//Invocacion
saludo();

//funcion de Expresion----------------------------------
//Implementacion
const saludar = function(nombre){
    console.log("Bienvenido a mi sitio "+nombre);
}
//Invocacion
saludar("Jhon");



const suma = function(suma1 = 4,suma2=0){
    return suma1+suma2;
}   
    console.log("El resultado de la suma es "+suma(5,5));//si en esta linea no hay argumentos el resultado es 4 y si tiene el res es 10 lo pisa al 4

//funcion Flecha (arrow function)----------------------------------    

const suma2 = (num3=0,num4=0) => num3+num4;

console.log(suma2());

//como devolver un objeto-------------------------------------------
const devolverObjeto = () => ({ nombre:"Jhon Wick"})//para retornar objeto se escribe con parentesis ({ nombre:"Jhon Wick"})


const nombreCompleto = devolverObjeto();
console.log(nombreCompleto);

//Objetos Literales-------------------------------------------
let persona ={
    nombre : "Jhon",
    apellido : "Wicks",
    "edadpersona" : 50,
    estaVivo : true,
    domicilio: {
        pais: "EEUU",
        calle: "123 street",
        CP: "1568"
    },
    tel: ["12345","98765"],
    correr: function(){
        console.log("Estoy corriendo")
        return"ok"
    }   
    
}
//acceso a propiedades
console.log(persona.correr());
console.log(persona.tel[1]);
console.log(persona.nombre);
console.log(persona["edadpersona"]);

//Desestructurar

/*const {apellido} = persona;
console.log(apellido);*/

//otro ejemplo
const {apellido,nombre} = persona;
console.log(apellido,nombre);

persona.nombre="Ale";
console.log(persona.nombre);

const {nombre:nuevoNombre}= persona;//sobreescribir
console.log(nuevoNombre);
console.log(persona.nombre);