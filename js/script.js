// Faresignal knapper

// Finder alle faresignal-knapper
const buttons = document.querySelectorAll(".button-faresignal");

// Tilføjer et klik-event til hver knap
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faresignal = button.closest(".faresignaler");

    faresignal.classList.toggle("is-open");

    const isOpen = faresignal.classList.contains("is-open");
    button.setAttribute("aria-expanded", isOpen);
  });
});
