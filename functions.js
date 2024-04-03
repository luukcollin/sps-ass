const opties = ["steen", "papier", "schaar"];

function hi(){
    console.error("hi");
}

function battle(wapen){
    const wapenTegenstander = opties[parseInt(Math.random() * opties.length)];
    const outcome = getOutcome(wapen, wapenTegenstander);
    addResultEntryToResults(createResultEntry(outcome, wapen, wapenTegenstander));
    updateStats2(outcome);
}

function getOutcome(attacker, defender){
    return attacker === defender ? "gelijkspel" : getWeakness(attacker) === defender ? "verloren" : "gewonnen";
}

function getWeakness(element){
    switch(element){
        case "schaar":
            return "steen";
        case "steen":
            return "papier";
        case "papier":
            return "schaar"; 
        default:
            console.error(`Het element ${element} kent geen zwaktes`);
    }
}

function clearResults(){
    const element = document.getElementById("results"); 
    while (element?.firstChild) { 
        element.firstChild.remove();  //alternative:   element.removeChild(element.firstChild); 
    }
    clearStats();
}

function clearStats(){
    document.getElementById("gewonnen").innerText = "0"; 
    document.getElementById("gelijkspel").innerText = "0"; 
    document.getElementById("verloren").innerText = "0"; 
}

function addResultEntryToResults(element){
    document.getElementById('results')?.append(element);
}

function createResultsDiv(){
    const div = document.createElement('div');
    div.id="results";
    div.classList.add('result-entry');
    document.body.append(div);
}

function createResultEntry(outcome, attacker, defender){
    const h4 = document.createElement('h4');
    h4.classList.add('result-entry')
    h4.classList.add(outcome);
    h4.innerText = `${outcome}: ${attacker} vs ${defender}`;
    return h4;
}


function updateStats2(addedOutcome){
    const outcomeCounter = document.getElementById(addedOutcome);
    outcomeCounter.innerText = Number(outcomeCounter.innerText) + 1;
}

function updateStats(addedOutcome){
   const updatedCounter = document.getElementsByClassName(addedOutcome).length;
   document.getElementById(addedOutcome).innerText = updatedCounter;
}

function loopAll(){
    keuze = prompt("Welke aanval kies je?").toLocaleLowerCase();
    for(let i = 0; i < 1_000; i++){
        battle(keuze);
    }
}