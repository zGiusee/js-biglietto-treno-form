// Button

const mybutton = document.getElementById("mybtn");

mybutton.addEventListener("click", function(){
    
    // RECUPERO I VALORI

    // KM
    let km = document.getElementById("km").value;
    // ETA
    let eta = document.getElementById("eta").value;
    // NOME
    let nome = document.getElementById("nome").value;
    // COGNOME
    let cognome = document.getElementById("cognome").value;

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
        message = "Rientri nella categoria degli Over.65 e questo ti garantisce uno sconto del 40%! Il tuo prezzo finale sarà di:"
    }
    else if(eta < 18){
        sconto = ticketPrice * 20 / 100;
        ticketPrice = km - sconto;
        // AGGIUNGO UN MESSAGGIO DI AVVISO
        message = "Rientri nella categoria Under.18 e questo ti garantisce uno sconto del 20%! Il tuo prezzo finale sarà di:"
    
    }
    else{
        // AGGIUNGO UN MESSAGGIO DI AVVISO
        message = "Il tuo prezzo finale sarà di:"
    }
    
    // ARROTONDO IL PREZZO FINALE DEL BIGLIETTO
    ticketPrice = ticketPrice.toFixed(2);

    document.getElementById("ticketprice").innerHTML = ticketPrice + "€";
    document.getElementById("message").innerHTML = message;
    document.getElementById("congratulations").innerHTML = `Complimenti ${nome} ${cognome}`;

});

