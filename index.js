// Oppgave 1
// Lag et program som sjekker om et tall som brukeren legger inn, er et oddetall eller partall. 

// let number1 = Number(prompt("Skriv et tall"));

// if (number1 % 2 === 0) {
//     console.log("Tallet er partall");
// } else {
//     console.log("Tallet er oddetall");
// }

// Oppgave 2
// Lag et program som tar en alder som input og skriver ut om personen er barn (under 13), tenåring (13–19), voksen (20–64) eller pensjonist (65+). 

// let Mittalder = Number(prompt("Skriv alderen din"))

// if (Mittalder <0 || Mittalder > 130) {
//     alert("skirv et gyldig tall")
// } else if (Mittalder < 13) {
//     alert("Du er et barn")
// } else if (Mittalder < 19) {
//     alert("Du er tenåring")
// } else if (Mittalder < 64) {
//     alert("Du er en våksen")
// } else {
//     alert("Du er en pensjonist")
// }


// Oppgave 3
// Lag et program der brukeren må skrive inn et brukernavn og passord, og der programmet sjekker om de stemmer overens med forhåndsdefinerte verdier for å gi tilgang. 


// let mittpassord = "123456"
// let mittbrukernavn = "SumLumf"  

// let username = prompt("Hva er ditt brukernavn")
// let passord = prompt("Hva er ditt passord")

// if (mittpassord == passord && mittbrukernavn == username) {
//     alert("Du er logget inn")
// } else {
//     prompt(" Username og/eller passord er uriktig. prøv en gang til")
// }

// Oppgave 4
// Lag et program som tar en måned (1–12) som input og avgjør hvilken årstid det er. For eksempel, desember, januar og februar er vinter.

// let måned = Number(prompt("Skriv inn en måned (1-12):"));

// if (måned === 12 || måned === 1 || måned === 2) {
//     console.log("Vinter");
// } else if (måned >= 3 && måned <= 5) {
//     console.log("Vår");
// } else if (måned >= 6 && måned <= 8) {
//     console.log("Sommer");
// } else if (måned >= 9 && måned <= 11) {
//     console.log("Høst");
// } else {
//     console.log("Ugyldig måned. Skriv inn et tall mellom 1 og 12.");
// }

// Oppgave 5
//  Lag et program der brukeren legger inn vekt og høyde, og som beregner BMI og klassifiserer resultatet som undervekt, normalvekt, overvekt eller fedme. 

// let vekt = Number(prompt("Skriv inn vekten din i kg:"));
// let høyde = Number(prompt("Skriv inn høyden din i meter:"));    
// let bmi = vekt / (høyde * høyde);

// console.log("Din BMI er: " + bmi.toFixed(2));
// if (bmi < 18.5) {
//     console.log("Undervekt");
// } else if (bmi >= 18.5 && bmi < 24.9) {
//     console.log("Normalvekt");
// } else if (bmi >= 25 && bmi < 29.9) {
//     console.log("Overvekt");
// } else if (bmi >= 30) {
//     console.log("Fedme");
// } else {
//     console.log("Ugyldig input. Vennligst skriv inn gyldige tall for vekt og høyde.");
// }

// Oppgave 6
// Lag et program som bestemmer prisen på en billett basert på alderen til brukeren (for eksempel barn, student, voksen, pensjonist). 

// let alder = Number(prompt("Skriv inn alderen din:"));
// let pris;

// if (alder < 0 || alder > 120 || isNaN(alder)) {
//     console.log("Ugyldig alder. Vennligst skriv inn en gyldig alder.");
// } else if (alder < 13) {
//     pris = 50;  
//     console.log("Billettpris for barn: " + pris + " kr");
// } else if (alder >= 13 && alder <= 25) {
//     pris = 80;  
//     console.log("Billettpris for student: " + pris + " kr");
// } else if (alder > 25 && alder < 65) {
//     pris = 120; 
//     console.log("Billettpris for voksen: " + pris + " kr");
// } else {
//     pris = 70;  
//     console.log("Billettpris for pensjonist: " + pris + " kr");
// }

// Oppgave 7
// Lag et program der brukeren legger inn en poengsum (0–100), og programmet skriver ut en karakter som A, B, C, D eller F basert på poenggrensene.

// let poengsum = Number(prompt("Skriv inn poengsummen din (0-100):"));
// let karakter;

// if (poengsum < 0 || poengsum > 100 || isNaN(poengsum)) {
//     console.log("Ugyldig poengsum. Vennligst skriv inn et tall mellom 0 og 100.");
// } else if (poengsum >= 90) {
//     karakter = '6';
// }   else if (poengsum >= 80) { 
//     karakter = '5';
// } else if (poengsum >= 70) {
//     karakter = '4';
// } else if (poengsum >= 60) {
//     karakter = '3';
// } else {
//     karakter = '2';
// }
// console.log("Din karakter er: " + karakter);

// Oppgave 8
// Lag et program der brukeren legger inn et kjøpsbeløp, og programmet gir en rabatt hvis beløpet er over et visst nivå (for eksempel 10 % rabatt på kjøp over 500). 

// let kjøpsbeløp = Number(prompt("Skriv inn kjøpsbeløpet ditt:"));
// let rabatt = 0;

// if (isNaN(kjøpsbeløp) || kjøpsbeløp < 0) {
//     console.log("Ugyldig beløp. Vennligst skriv inn et gyldig tall.");
// } else if (kjøpsbeløp > 500) {
//     rabatt = kjøpsbeløp * 0.10;
//     console.log("Du får 10% rabatt! Rabattbeløp: " + rabatt.toFixed(2) + " kr");
// } else {
//     console.log("Ingen rabatt tilgjengelig for kjøpsbeløp under eller lik 500 kr.");
// }

// Oppgave 9
// Lag et program som sjekker om et år (f.eks. 2024) er et skuddår eller ikke (skuddår er delbart med 4, men ikke 100, bortsett fra hvis det også er delbart med 400). 

// let år = Number(prompt("Skriv inn et år (f.eks. 2024):"));

// if (isNaN(år)) {
//     console.log("Ugyldig år. Vennligst skriv inn et gyldig tall.");
// } else if ((år % 4 === 0 && år % 100 !== 0) || (år % 400 === 0)) {
//     console.log(år + " er et skuddår.");
// } else {
//     console.log(år + " er ikke et skuddår.");
// }

// Oppgave 10
//  Lag et program som tar en måned som input og viser hvor mange dager som er i denne måneden (for eksempel 30 dager i april, 28 eller 29 dager i februar). 

// let månedNummer = Number(prompt("Skriv inn en måned (1-12):"));
// let dager;

// if (isNaN(månedNummer) || månedNummer < 1 || månedNummer > 12) {
//     console.log("Ugyldig måned. Vennligst skriv inn et tall mellom 1 og 12.");
// } else {
//     switch (månedNummer) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             dager = 31;
//             break;
//         case 4: case 6: case 9: case 11:
//             dager = 30;
//             break;
//         case 2:
//             dager = "28 eller 29 (avhengig av om det er skuddår)";
//             break;
//     }
//     console.log("Måneden har " + dager + " dager.");
// }