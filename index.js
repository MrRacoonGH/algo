
function addition(a, b) {
  let result = a + b
  return result
}

console.log(addition(2, 3));


function salutation(nom) {
    let result = "Bonjour " + nom
    return result
  
}

console.log(salutation("Alice")); 


function estPair(nombre) {
  if(nombre %2 == 0)
  {
  return true;
  }
else {
  return false;
}
}

console.log(estPair(4));
console.log(estPair(7));


function aireRectangle(longueur, largeur) {
    aire = longueur * largeur
    return aire
}
console.log(aireRectangle(5, 3));


function estMajuscule(chaine) {
  if(chaine === chaine.toUpperCase()){
    
  } else {
    
  }
}


console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false

