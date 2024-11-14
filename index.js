//#1 Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?

const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log("#1 " + names[3]); //iochmed det börjar på 0 så måste man börja där då blir index 3 mardona

//#2 I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?

let returnvalue = names.push("drogba");
console.log("#2 " + returnvalue); //kommer ut som 7 iochmed det är hans index
//#3 Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?

const Return = names.unshift("figo"); //
console.log("#3 " + Return); //blir 8 iochmed vi la till drogba och han läggs in i början

//#4 Ta nu bort det sista namnen från array med pop(). Logga ut returvärdet av den metoden.
const value =  names.pop(); //man tar drogba
console.log("#4 " + value); //blir drogba iochmed man tog bort han (returnerar värdet man tar bort)

//#5    Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen? Visa i kod samt förklara varför du gör som du gör.
names.pop("ronaldo");
names.unshift("ronaldo"); //ronaldo kommer i början av arrayen (kan lägg till en pop för ta bort han från början)
console.log("#5 " + names);

//#6 Vid det här laget hoppas jag att du märkt att de metoderna som du har använt påverkar ursprungs-arrayn, alltså den modifierar den befintliga arrayen. Detta kallas för att en metod är "destruktiv". Så även fast vi definierar arrayen med en const-variabel så tillåts vi ändå att modifiera arrayn. Vad kan detta bero på?

//det är pga att vi ändrar inom scopet bara och modiferar arrayen i contexten, alltså referens och value som ändras inom arrayen och inte varaiablen .

//#7 Utgå från arrayen nedan. Använd metoden includes() för att kontrollera om "Messi" finns i arrayen. Vad blir resultatet, och vad innebär det?

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
if (players.includes("messi")) {
    console.log("#7 ja");
}
    else {
        console.log("#7 nej");
    }   //han fanns inte med.

//returnerar värdet false

//#8 samma sak fast zlatan ist för messi cba. säger true

//#9 Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av indexOf(). Vad är resultatet och varför?
const Maradona = players.indexOf("Maradona");
console.log("#9 " + Maradona); //5 för att array börjar på 0 och räknar uppåt därifrån

//#10 cba men den säger -1 iochmed han inte finns där. går att dubbelkolla om element finns eller inte även användbart inom if satser

//#11 Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ). Använd join() för att göra detta och logga resultatet.
const playerstr = players.join(", ");
console.log("#11 " + playerstr);

//#12 samma sak fast man ändrar inom parantesen efter join
const playerstring = players.join("-");
console.log("#12 " + playerstring);

//13 Använd splice() för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur splice() fungerar i detta fall.
players.splice(1, 2);
console.log("#13" + players); //tar bort från index pos 1 och två gånger

//#14 Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). Vilken förändring sker i arrayen och vad returnerar splice()?
players.splice(2, 0, "Ronaldinho");
console.log("#14 " + players); 
//man byter plats orginella indexpos 2 till ronaldinho och orginella blir 3 returvärdet skulle vara antingen spelare om vi tog bort någon annars tomma []

//#15 Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig.
const ronaldoi = players.indexOf("Ronaldo");
if (players.includes("Ronaldo")) {
    players.splice(ronaldoi, 1)
    console.log("#15 ronaldo är nu borta");
}
else {
    console.log("#15 ronaldo är borta redan hurra")
}

//#16 Använd slice() för att skapa en ny array från "players" som innehåller de tre första spelarna. ogga ut den nya arrayen och förklara varför slice() inte påverkar den ursprungliga arrayen.
const playersv2 = ['ronaldo', 'figo', 'Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele']
const shortplayers = playersv2.slice(0, 3); //start index inkluderas i kopieringen men slutindexet exkluderas vilket betyder vi enbart kopierar fram till slutindexpositionen
console.log("#16 " + shortplayers);

//#17 Skapa en ny array med slice() som innehåller alla spelare från index 2 och framåt i "playersv2". Vad innehåller den nya arrayen, och vad blir kvar i "playersv2"?
const anothershortlistofplayers = playersv2.slice(2)
console.log("#17 " + anothershortlistofplayers);
console.log("#17 " + playersv2);

//#18 Använd metoden with() för att ersätta spelaren på indexposition 1 i "playersv2" med "Mbappé". Vad returnerar with()-metoden och påverkas den ursprungliga arrayen?
returnwith = playersv2.with(1, "Mbappé");
console.log("#18 " + playersv2)
console.log("#18 " + returnwith);

//#19 Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.
const numbers = [5, 8, 12, 20, 3];
for (i=0; i<numbers.length; i++) {
console.log("#19 plats "+ i + " arrayen " + numbers)
}

//#20 Använd en for-loop för att summera alla tal i arrayen numbers ovan. Logga ut summan efter att loopen har körts klart.
let sumofnumbers = 0;
for (const number of numbers){
     sumofnumbers = sumofnumbers+number
    console.log("#20 " + sumofnumbers)
};

//#21 Skriv en for-loop som letar efter det största talet i numbers. Logga det största värdet.
let biggestnum = 0;
for (const number of numbers) {
    if (number>biggestnum) {
        biggestnum=number
    }
}
console.log("#21 " + biggestnum);

//#22 Skapa en ny array som heter doubledNumbers. Använd en for-loop för att fylla doubledNumbers med varje tal i numbers multiplicerat med 2.
const doubledNumbers = []
for (i=0; i<numbers.length; i++){
doubledNumbers[i] = (numbers[i]*2);
} 
console.log("#22 " + doubledNumbers)

//#23 Använd en for-loop för att räkna ut medelvärdet av talen i numbers. Logga ut medelvärdet.


//#24 Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.
let smallestnum = Infinity;
for (const number of numbers) 
    if (smallestnum>number) {
        smallestnum=number
    }; 
console.log("#24 " + smallestnum);

//#25 Skapa en ny array som heter positiveNumbers och fyll den med endast de positiva talen från arrayen nedan. Använd en for-loop och en if-sats.
const mixedNumbers = [3, -5, 12, -1, 8, -6];
const positiveNumbers = []


for (const mixed of mixedNumbers) {
     if (mixed > 0){
     positiveNumbers.push(mixed)}

}
console.log("#25 " + positiveNumbers)

//#26 Utgå från arrayen mixedNumbers nedan. Skriv en for-loop utan att använda index, där du loggar varje positivt tal.


const mixedNumbers1 = [3, -5, 12, -1, 8, -6];
const positiveNumbers1 = []


for (const mixed1 of mixedNumbers1) {
     if (mixed1 > 0){
     console.log("#26 " + mixed1)
}
}

//#27 Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10.
// const numbers = [5, 8, 12, 20, 3];
const tio = []

let j = 0; //index

while (j < numbers.length) {
    if (numbers[j] > 10) {
        break;
    }
    else {
        tio.push(numbers[j])
}
j++
}
console.log("#27 " + tio);

//#28 Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.
const mixedNumbers2 = [3, -5, 12, -1, 8, -6];
let negativa = 0;
let k = 0;

while (k < mixedNumbers2.length) {
    if (mixedNumbers2[k] < 0) {
        negativa++;
    }
        k++

}
console.log("#28 " + negativa);

//#29 Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).
const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

for (const word of words) {
    const bokstäver = word.length
    console.log("#29 " + bokstäver);
}

//#30 Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.

let string = "";

for (const word of words) {
    string += word[0];
}
console.log("#30 " + string)

//#31 Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.
index = 0;
let sum = 0;

while (25 > sum) {
    const number = numbers[index];
    sum += number;
    index++
}
console.log("#31 " + sum)

//#32 Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. Logga ut summan.
let sum2 = 0;

for (const mixed3 of mixedNumbers) {
    sum2 += mixed3
   
} 
console.log("#32 " + sum2)

//#33 Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. Använd en for-loop för att hitta den högsta temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.

const temperatures = [15, 22, 19, 30, 28, 18, 25];

let highesttemp = 0;
let jindex = 0;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > highesttemp) {
        highesttemp = temperatures[i];
        jindex = i;
    }
}
console.log("#33 Högsta tempraturen är " + highesttemp + " graden är på index " + jindex)


//#34 Använd en for-loop för att räkna antalet ord i words-arrayen som innehåller fler än fem bokstäver.

let count = 0;

for (const word of words) {
    if (word.length > 5) {
        count++
    }
}

console.log("#34 antal ord som är längre än 5; " + count)

//#35 Skriv en while-loop som räknar upp talen från numbers-arrayen ovan tills ett udda tal hittas. Avbryt loopen vid första udda talet och logga resultatet.
// const numbers = [5, 8, 12, 20, 3]; 

let kindex = 0;

while (kindex < numbers.length) {
    if (numbers[kindex] % 2 !== 0){
        break;
    }
    console.log("#35 " + numbers[kindex]);
    kindex++
}

// dålig uppgift var svin svår