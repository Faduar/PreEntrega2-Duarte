let mes;
let dia;
let anio;
let destino;

let decision = parseInt (prompt("Bienvenido a la sección de viajes. Ingrese 1 si quiere consultar por disponibilidad o cualquier otro numero, si quiere navegar simplemente."))
    

    function getDia(){
        let diaElegido
        do{
            diaElegido = parseInt (prompt("Elija el dia a consultar. Tenga en cuenta que los viajes solo se realizan del día 1 al 10 del mes."))
        }while (diaElegido !=1 && diaElegido !=2 && diaElegido !=3 && diaElegido !=4 && diaElegido !=5 && diaElegido !=6 && diaElegido !=7 && diaElegido !=8 && diaElegido !=9 && diaElegido !=10)
        return diaElegido;
    }
    function getMes(){
        let mesElegido
        do{
            mesElegido = parseInt (prompt("Elija el mes a consultar. Escribalo en numeros (del 1 al 12)"))
        }while (mesElegido !=1 && mesElegido !=2 && mesElegido !=3 && mesElegido !=4 && mesElegido !=5 && mesElegido !=6 && mesElegido !=7 && mesElegido !=8 && mesElegido !=9 && mesElegido !=10 && mesElegido !=11 && mesElegido !=12)
        return mesElegido;
    }
    function getAnio(){
        let anioElegido
        do{
            anioElegido = parseInt (prompt("Elija el año. Solo se puede consultar del año actual y el siguiente."))
        }while (anioElegido !=2022 && anioElegido !=2023)
        return anioElegido;
    }
    function getDestino(){
        let destinoElegido
        do{
            destinoElegido = parseInt (prompt("Elija el destino, siendo 1.Cataratas, 2.San Luis, 3.Cordoba"))
        }while (destinoElegido !=1 && destinoElegido !=2 & destinoElegido !=3)
        return destinoElegido;
    }

    if(decision == 1){
        let dia = getDia();
        let mes = getMes();
        let anio = getAnio ();
        let destino = getDestino();
        
        if (anio == 2022 && mes < 12){
            alert("Esos destinos ya fueron visitados.");
        }else{
            alert("Hay disponibilidad de viaje. Por favor, consultar desde el boton del destino específico.");
        }
    }else{
        alert("Si tenés alguna duda podés contactarnos vía Whatsapp.");
    }
