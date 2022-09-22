function suma() {
    var a = 0;
    var b = 0;
    var suma = 0;

    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));

    suma = a + b;

    alert ("El resultado de la suma es: " + suma)

}

function operaciones(){

    var a = 0;
    var b = 0;
    var suma = 0;
    var resta = 0;
    var mult = 0;
    var div = 0;

    a = parseInt(prompt('Ingrese un valor'));
    b = parseInt(prompt('Ingrese el segundo valor'));

    suma = a + b;
    resta = a - b;
    mult = a * b;
    div = a / b;
    alert ("El resultado de la suma es: " + suma);
    alert ("El resultado de la resta es: " + resta);
    alert ("El resultado de la multiplicación es: " + mult);
    alert ("El resultado de la división es: " + div);

}

function numeroMayor(){
    var n1 = 0;
    var n2 = 0;

    n1 = parseInt(prompt("Por favor ingrese el primer valor"));
    n2 = parseInt(prompt("Por favor ingrese el segundo valor"));

    if (n1==n2) {
        alert ("Los valores ingresados son iguales");
    }else if (n1>n2){
        alert (n1 + " es mayor que " + n2);
    }else {
        alert (n2 + " es mayor que "+ n1);
    }

}
function cuadrado(){
    var c1 = 0;
    var cuadrado = 0;

    c1 = parseInt(prompt("Ingrese un valor "));

    cuadrado = c1 * c1;
    c1 = parseInt(prompt("El valor del cuadrado es = " +cuadrado));

}
function triangulo(){
    var B =0;
    var H =0;
    var A =0;
    

    B = parseInt(prompt(" Ingrese la base del triángulo"));
    H = parseInt(prompt(" Ingrese la altura del  triángulo"));

    A = B*H/2;

    alert (" El área del triángulo es = " + A);

    //Determinar los centimetros y metros de un valor dado en pulgadas
}
function pulgadas(){
    var v = 0;
    var m = 0;
    var cm =0;

    v = parseInt(prompt("Ingrese un valor en pulgadas"));

    cm= v*2.54;
    m = v / 39,37;

    alert ("El valor en centimetros es = " + cm);
    alert ("El valor en metros es = " +m);   
}

function descuento(){

    var k=0;
    var tk=0;
    var desc=0;
    k=parseInt(prompt("Ingrese catidad de kilos: "));

    tk= k*4500;

    if (k<=2) {

        alert ("No tiene descuento, su total a pagar es: "+tk);
        
    }
    else if (k<=5){
        desc= tk-((10/100)*tk);
        alert ("El total es : $"+tk+" su descuento es de 10%, su total a pagar es : $"+desc);
    
    }
    else if (k<=10){
        desc= tk-((15/100)*tk);
        alert ("El total es : $"+tk+" su descuento es del 15%, su total a pagar es : $"+desc);
    }
    else{
        desc= tk-((20/100)*tk);
        alert ("El total es : $"+tk+" su descuento es del 20%, su total a pagar es : $"+desc);
    }

}
//Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganará, después de N número de años, teniendo en cuenta que el banco, pagará un interes del 1.7 % mensual
