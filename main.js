// inizio creandomi il ciclo da 1 a 100 con For 
for (let i = 1; i <= 100; i++) {

    // inizio trovandomi prima il multipli che hanno in comune 3 e 5
    // SE hanno multipli in comune vengono stampati in console come "FizzBuzz" 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    // identifico i multipli solo di 3 
    // SE il numero è multiplo di 3 viene sostituito dallla parola "Fizz"
    else if (i % 3 == 0) {
        console.log('Fizz');
    }

    //identifico i multipli solo di 5
    // SE il numero è multiplo di 5 viene sostituito dallla parola "Buzz"
    else if (i % 5 == 0) {
        console.log('Buzz');
    }

}