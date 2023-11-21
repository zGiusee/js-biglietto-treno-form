esercizio di oggi: calcolo del prezzo del biglietto del treno

cartella/repo js-biglietto-treno-formDescrizione:

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.Sono richiesti almeno 5 push.


1 - Creo l'input che permetta all'utente di inserire il numero di km;
2 - Creo l'input che permetta all'utente di inserire la sua età;
3 - Eseguo il calcolo della tariffa per km;
4 - Applico gli sconti in base all'età;
4.1 - Se l'utente è minorenne applico uno sconto del 20%;
4.2 - Altrimenti, se l'utente ha più di 65 anni applico uno sconto del 40%;
4.3 - se invece il passeggero ha un età compresa tra i 18 anni e 65 anni non applico nessuno sconto;
5 - Completo il calcolo e ottengo il risultato finale;