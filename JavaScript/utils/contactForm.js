const modal = document.getElementById("contact_modal");

function displayModal() {
    modal.style.display = "block";
    const firstInput = modal.querySelector("input")
    firstInput.focus()
}

function closeModal() {
    modal.style.display = "none";
}

document.addEventListener("keydown", e => {
    if (e.key == 'Enter' || e.key == 'Escape') {
        closeModal()
    }
})

const inputPrenom = document.querySelector(".prenom")
const inputNom = document.querySelector(".nom")
const inputEmail = document.querySelector(".email")
const envoie = document.querySelector('form button')

envoie.addEventListener('click', e => {
    console.log("Données du formulaire :")
    console.log(`Prénom : ${inputPrenom.value}`)
    console.log(`Nom : ${inputNom.value}`)
    console.log(`Email : ${inputEmail.value}`)
})



