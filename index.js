
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

function motsLongueurPaire(tableau) {
  let result = []
  for (let i = 0; i < tableau.length; i++) {
            if (tableau[i].length % 2 === 0) {
            result.push(tableau[i]);
        }
  }
  return result
}

console.log(motsLongueurPaire(["chien", "chat", "tortue", "lion", "singe"])); // Output: ["chat", "tortue", "lion"]



// Exercice 2

function compterNegatifs(tableau) {
    let compter = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] < 0) {
            compter++;
        }
    }
    return compter;
}

console.log(compterNegatifs([3, -1, -7, 5, 0, -3])); // Output: 3

// Exercice 3


function transformerMajusculesSaufPremier(tableau) {
    for (let i = 1; i < tableau.length; i++) {
        tableau[i] = tableau[i].toUpperCase();
    }
    return tableau;
}

console.log(transformerMajusculesSaufPremier(["bonjour", "tout", "le", "monde"])); // Output: ["bonjour", "TOUT", "LE", "MONDE"]


// Exercice 4

function supprimerDoublons(tableau) {
    let resultat = [];
    for (let i = 0; i < tableau.length; i++) {
        if (!resultat.includes(tableau[i])) {
            resultat.push(tableau[i]);
        }
    }
    return resultat;
}

console.log(supprimerDoublons([1, 2, 3, 2, 4, 1, 5])); 



// Exercice 5

function filtrerPairs(tableau) {
    return tableau.filter(nombre => nombre % 2 === 0);
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6, 7, 8])); // Output: [2, 4, 6, 8]


// Exercice 6

function calculerMoyenne(tableau) {
}

console.log(calculerMoyenne([10, 20, 30, 40])); // Output: 25

