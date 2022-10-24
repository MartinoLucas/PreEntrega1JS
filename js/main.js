function mensajeComer(num){
    console.log("El valor de tu gasto de comercialización es de $" + num);
};
function mensajeAdmin(num){
    console.log("El valor de tu gasto de administración es de $" + num);
};
function mensajeError(){
    console.log("¡Valor invalido!");
};

function tituloCuadro(){
    console.log("Los Gastos del último período son los siguientes:")
}

function crearCuadroDeGastos(){

    let numGastos = prompt("Ingrese la cantidad de gastos a ordenar:"); 

    tituloCuadro();

    for(let i = 1; i <= numGastos; i++){
        let gast1 = prompt("Ingrese el tipo de gasto(Comercialización/Administración):");
        gast1 = gast1.toLowerCase();
        if(gast1 == "comercializacion" || gast1 == "comercialización"){
            let comer = parseInt(prompt("Ingrese el valor del gasto:"));
            mensajeComer(comer);
        } else if (gast1 == "administracion" || gast1 == "administración"){
            let admin = parseInt(prompt("Ingrese el valor del gasto:"));
            mensajeAdmin(admin);
        } else {
            mensajeError();
            break;
        };
    };
};

crearCuadroDeGastos();