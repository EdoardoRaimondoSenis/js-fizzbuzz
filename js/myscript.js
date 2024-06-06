const ul = document.querySelector("ul.prisultato");


for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.append(i);

    if (i == 3 || i%3==0) {
        li.classList.add("risultatotre");
        li.innerHTML = "Buzz"
        console.log(li);
    } else {
        li.classList.add("risultato");

    }

    if (i == 5 || i%5==0) {
        li.classList.add("risultatocinque");
        li.innerHTML = "Fizz"
        console.log(li);
    } else {
        li.classList.add("risultato");

    }

    if ((i == 3 || i%3==0) && (i == 5 || i%5==0)) {
        li.classList.add("risultatotrecinque");
        li.innerHTML = "FizzBuzz"
        console.log(li);
    } else {
        li.classList.add("risultato");

    }

    ul.appendChild(li);
    
}