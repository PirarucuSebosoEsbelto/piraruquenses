function soma(num1,num2){
return num1+num2;

}
console.log(soma(5,2));



function areaQuadrado(lado){

    return lado**2;
}
console.log(areaQuadrado(6));



let num1= parseInt(prompt("Insira o primeiro número"))
let num2= parseInt(prompt("Insira o segundo número"))
let num3= parseInt(prompt("Insira o terceiro número"))
document.write(media(num1,num2,num3))

let media= function(num1,num2,num3){
return (num1+num2+num3)/3;

}
console.log(media(3,2,1));


