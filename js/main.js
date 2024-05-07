// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creo il ciclo for 
for(let i=1; i<=100; i++){
    // controllare per 15 è come controllare sia per 5 che per 3
    if(i % 15 === 0 ){
        console.log(i, 'FizzBuzz');
    }else if(i % 3 === 0){
        console.log(i, 'Fizz')
    }else if (i % 5 === 0){
        console.log(i, 'Buzz')
    }else{
        console.log(i);
    }
}