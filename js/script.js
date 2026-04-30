// Faresignal knapper
//Finder alle med klassen .button-faresignaler på siden
const buttons = document.querySelectorAll(".button-faresignaler");

// Tilføjer et klik-event til hver knap så den tilhørende forklaring kan åbnes/lukkes
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faresignal = button.closest(".faresignaler");

    faresignal.classList.toggle("is-open");
    
    //Opdaterer aria-expanded, så  skærmlæsere kan se om boksen er åben/lukket
    const isOpen = faresignal.classList.contains("is-open");
    button.setAttribute("aria-expanded", isOpen);
  });
});


//Forgrenet scenarie 
//Finder alle med klassen .btn under .stage og finder alle .stage
const btns = document.querySelectorAll(".stage .btn")
const stages = document.querySelectorAll(".stage")

//Skifter mellem scenariets stages alt efter hvilken knap der er trykket på
const nextStage = (e) =>{
    switch(e.target.textContent) {
        case "Start nu": 
            stages[0].classList.remove("active"); //Fjerner vores første stage
            stages[1].classList.add("active"); // Gør vores anden stage synlig ved at tilføje active
        break;
        case "Fortsæt":
            stages[1].classList.remove("active"); 
            stages[2].classList.add("active");
        break;
         case "A) Beskeden ligger i samme tråd som tidligere DAO-beskeder, så jeg klikker på linket":
            stages[2].classList.remove("active"); 
            stages[3].classList.add("active");
        break;
        case "B) Noget virker mærkeligt, så jeg tjekker DAO’s hjemmeside i stedet":
            stages[2].classList.remove("active"); 
            stages[4].classList.add("active");
        break;
        case "Start forfra":
            stages[4].classList.remove("active"); 
            stages[5].classList.remove("active");
            stages[1].classList.add("active");
        break;
        case "A) Afsender ser rigtig ud, så jeg indtaster mine oplysninger og trykker godkend":
            stages[3].classList.remove("active"); 
            stages[5].classList.add("active");
        break;
        case "B) Det virker mistænkeligt, at jeg skal betale et ekstra gebyr, så jeg tjekker DAO’s hjemmeside i stedet":
            stages[3].classList.remove("active"); 
            stages[4].classList.add("active");
        break;
        default: console.log("Error");

    }
}
//Tilføjer klik event til knapperne i sceanriet
for (const btn of btns) {
    btn.addEventListener("click", nextStage)
}

 