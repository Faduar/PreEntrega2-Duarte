let opcion;
let mes;
let dia;
let anio;
let cliente= prompt("Ingrese su nombre para continuar con el registro:").toUpperCase();
let apellido= prompt ("Ingrese su apellido:").toUpperCase();
let direccion= prompt ("Ingrese su direccion de correo electrónico").toUpperCase();

function saludar(){
    alert ("Bienvenidx " + cliente + " " + apellido + " a Sumar viajes")
}

const arrayReservas = []

class paquete {
    constructor (destino, precio, duracion) {
        this.destino = destino;
        this.precio = precio;
        this.duracion = duracion;
    }
}

const viajeSanLuis = new paquete ("San Luis", "25000", "5 DIAS");
const viajeMendoza  = new paquete ("Mendoza", "30000", "7 DIAS");
const viajeCataratas  = new paquete ("San Luis", "20000", "3 DIAS");
const viajeSalta = new paquete ("Salta", "35000", "10 DIAS");

function elegirOpcion(){
    let opcion;


    do {
        opcion = parseInt(prompt("Seleccione la opción que desea utilizar: \n 1- Consultar destinos disponibles \n 2- Realizar una reserva \n 3- Dar de baja una reserva \n 4- Ver mis reservas \n 5- Si solo quiere navegar por la pagina"))
    }while (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4 && opcion != 5);
    switch(opcion){
        case 1:
            return "consultar";
        case 2:
            return "reservar";
        case 3:
            return "cancelar";
        case 4:
            return "misreservas";
        case 5:
            alert("Que lo disfrutes!");
            break;
    }    
}
function flow(){
    let opcion = elegirOpcion();

    if (opcion == "consultar"){
        consultar();
    }else if (opcion == "reservar"){
        reservar();
    }else if (opcion == "cancelar"){
        cancelar();
    }else if (opcion =="misreservas"){
        misReservas();
    }else{
        alert("Que lo disfrutes!");
    }
}
function getDia(){
    let diaElegido
    do{
        diaElegido = parseInt (prompt("Elija el dia. Tenga en cuenta que los viajes solo se realizan del día 1 al 10 del mes."))
    }while (diaElegido !=1 && diaElegido !=2 && diaElegido !=3 && diaElegido !=4 && diaElegido !=5 && diaElegido !=6 && diaElegido !=7 && diaElegido !=8 && diaElegido !=9 && diaElegido !=10)
    return diaElegido;
}
function getMes(){
    let mesElegido
    do{
        mesElegido = parseInt (prompt("Elija el mes. Escribalo en numeros (del 1 al 12)"))
    }while (mesElegido !=1 && mesElegido !=2 && mesElegido !=3 && mesElegido !=4 && mesElegido !=5 && mesElegido !=6 && mesElegido !=7 && mesElegido !=8 && mesElegido !=9 && mesElegido !=10 && mesElegido !=11 && mesElegido !=12)
    return mesElegido;
}
function getAnio(){
    let anioElegido
    do{
        anioElegido = parseInt (prompt("Elija el año. Solo se puede consultar y reservar en año actual y el siguiente."))
    }while (anioElegido !=2022 && anioElegido !=2023)
    return anioElegido;
}
function getDestino(){
    let destinoElegido
    const destinosDisponibles = ["San Luis", "Mendoza", "Cataratas", "Salta"]
    do{
        destinoElegido = parseInt (prompt("Elija el destino, siendo \n 1."+ viajeSanLuis.destino + "\n 2." + viajeMendoza.destino + "\n 3." + viajeCataratas.destino + "\n 4." + viajeSalta.destino))
        if (destinoElegido == 1){
            destinoElegido= "SanLuis"
        }else if (destinoElegido == 2){
            destinoElegido = "Mendoza"
        }else if (destinoElegido == 3){
            destinoElegido = "Cataratas"
        }else {
            destinoElegido = "Salta"
        }
    }while (destinoElegido !="SanLuis" && destinoElegido !="Mendoza" && destinoElegido !="Cataratas" && destinoElegido !="Salta" )
    return destinoElegido;
}

function consultar (){
        let dia = getDia();
        let mes = getMes();
        let anio = getAnio ();
        let destino = getDestino();
    
    if (anio == 2022 && mes < 12){
        alert("Esos destinos ya fueron visitados.");
    }else {
        alert("Hay disponibilidad de viaje.");
    }
    let quiereRealizar = parseInt (prompt("Si quiere realizar otra operacion escriba 1, de lo contrario escriba cualquier otro numero"))
        if (quiereRealizar == 1){
            flow();
        }
}

function reservar(){
        let dia = getDia();
        let mes = getMes();
        let anio = getAnio();
        let destino = getDestino();

        if (anio == 2022 && mes < 12){
            alert("Esos destinos ya fueron visitados.");
        }else {
            arrayReservas.push(destino);
        }
        let quiereRealizar = parseInt (prompt("Si quiere realizar otra operacion escriba 1, de lo contrario escriba cualquier otro numero"))
        if (quiereRealizar == 1){
            flow();
        }
    }

function cancelar (){
    let cualCancelo = parseInt (prompt("Elija de la siguiente lista, que elemento quiere eliminar:" + " " + arrayReservas))
    arrayReservas.splice(cualCancelo-1, cualCancelo);
    let quiereRealizar = parseInt (prompt("Si quiere realizar otra operacion escriba 1, de lo contrario escriba cualquier otro numero"))
        if (quiereRealizar == 1){
            flow();
        }
}

function misReservas(){
    alert(arrayReservas[0])
    let quiereRealizar = parseInt (prompt("Si quiere realizar otra operacion escriba 1, de lo contrario escriba cualquier otro numero"))
        if (quiereRealizar == 1){
            flow();
        }
}

saludar();
flow();
