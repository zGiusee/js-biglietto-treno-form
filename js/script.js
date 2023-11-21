// Button

const mybutton = document.getElementById("mybtn");

mybutton.addEventListener("click", function(){
    
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;

    // CALCOLO TARIFFA KILOMETRI
    km = km * 0.21;

    // VARIABILI
    let ticketPrice = km;
    let sconto;
    let message;

    if(eta >= 65){
        sconto = ticketPrice * 40 / 100;
        ticketPrice = km - sconto;
        // AGGIUNGO UN MESSAGGIO DI AVVISO
        message = "Complimenti rientri nella categoria degli Over.65 e questo ti garantisce uno sconto del 40%! Il tuo prezzo finale sarà:"
    }
    else if(eta < 18){
        sconto = ticketPrice * 20 / 100;
        ticketPrice = km - sconto;
        // AGGIUNGO UN MESSAGGIO DI AVVISO
        message = "Complimenti rientri nella categoria Under.18 e questo ti garantisce uno sconto del 20%! Il tuo prezzo finale sarà:"
    
    }
    else{
        // AGGIUNGO UN MESSAGGIO DI AVVISO
        message = "Ecco il tuo prezzo finale."
    }
    
    // ARROTONDO IL PREZZO FINALE DEL BIGLIETTO
    ticketPrice = ticketPrice.toFixed(2);

    document.getElementById("ticketprice").innerHTML = ticketPrice;

    console.log(eta);
    console.log(km);
    console.log(ticketPrice);
});

