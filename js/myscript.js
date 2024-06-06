// do una variabile alla classe prisultato
const ul = document.querySelector(".prisultato");

// il for ricomincia fino ad arrivare a 99 cicli
for (let i = 1; i <= 100; i++) {
    
    // creo l'elemento li nell'HTML e gli do la variabile li
    const li = document.createElement("li");
    
    // creo gli li dentro l'ul (.prisultato)
    ul.appendChild(li);

    // creo tanti li quanti cicli compie il for
    li.append(i);

    // se il numero è 3 o multiplo di 3
    if (i == 3 || i%3==0) {
        li.classList.add("risultatotre");
        li.innerHTML = "Buzz"
    } else {
        li.classList.add("risultato");
    }

    // se il numero è 5 o multiplo di 5
    if (i == 5 || i%5==0) {
        li.classList.add("risultatocinque");
        li.innerHTML = "Fizz"
    } else {
        li.classList.add("risultato");
    }

    // se il numero è sia multiplo di 5 che multiplo di 3 
    if ((i == 3 || i%3==0) && (i == 5 || i%5==0)) {
        li.classList.add("risultatotrecinque");
        li.innerHTML = "FizzBuzz"
    } else {
        li.classList.add("risultato");
    }
    
}