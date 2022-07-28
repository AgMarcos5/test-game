
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  // Tu código:
  return String(str);  
}

export function suma(x,y) {
 // Tu código:
  return x+y;  
}

export function resta(x,y) {
 // Tu código:
  return x-y;
}

export function multiplica(x,y) {
  // Tu código:
  return x*y;
}

export function divide(x,y) { 
  // Tu código:
  return x/y;
}

export function sonIguales(x,y) {  
  // Tu código:
  return x === y;  
}

export function tienenMismaLongitud(x,y) {  
  // Tu código:
  return x.length === y.length;
}

export function menosQueNoventa(x) {  
  // Tu código:
  return x < 90;
}

export function mayorQueCincuenta(x) {  
  // Tu código:
  return x > 50;
}

export function obtenerResto(x,y) {  
  // Tu código:
  return x%y;
}

export function esPar(x) {
  // Tu código:
  return x%2 == 0;
}

export function esImpar(x) {  
  // Tu código:
  return x%2 == 1;
}

export function elevarAlCuadrado(x) {  
  // Tu código:
  return x ** 2;
}

export function elevarAlCubo(x) { 
  // Tu código:
  return x ** 3;
}

export function elevar(x,y) {  
  // Tu código:
  return x ** y;
}

export function redondearNumero(x) {  
  // Tu código:
  return Math.round(x);
}

export function redondearHaciaArriba(x) { 
  // Tu código:
  return Math.ceil(x);
}

export function numeroRandom() {  
  // Tu código:
  return Math.random();
}

export function esPositivo(x) {
  // Tu código:
  if(x<0) return "Es negativo"
  if(x>0) return "Es positivo"
  return false;
}

export function agregarSimboloExclamacion(str) {  
  // Tu código:
  return str + "!";
}

export function combinarNombres(str1,str2) {
  // Tu código:
  return str1 + " " + str2;
}

export function obtenerSaludo(name) {
  // Tu código:
  return `Hola ${name}!`;
}

export function obtenerAreaRectangulo(alto,ancho) {  
  // Tu código:
  return alto*ancho;
}


export function retornarPerimetro(lado){
  // Tu código:
  return lado*4;
}


export function areaDelTriangulo(base, altura){
  // Tu código:
  return base*altura/2;
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  return euro*1.2;
}


export function esVocal(letra){
  // Tu código:
  const vocales = ['a', 'e', 'i', 'o', 'u']
  return (vocales.indexOf(letra.toLowerCase()) !== -1) ? "Es vocal" : "Dato incorrecto";
}
