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

//#19 hola hola
