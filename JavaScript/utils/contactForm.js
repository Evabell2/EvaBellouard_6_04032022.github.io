const modal = document.getElementById("contact_modal")
const boutonContact = document.querySelector(".contact_button")

function displayModal() {
    modal.style.display = "block"
    const firstInput = modal.querySelector("input")
    firstInput.focus()
}
boutonContact.addEventListener('click', () => {
    displayModal()
})
function closeModal() {
    modal.style.display = "none"
}
document.addEventListener("keydown", e => {
    if (e.key == 'Escape') {
        closeModal()
        const photoProfil = document.querySelector('.photo-de-profil>img')
        photoProfil.focus()
    }
})


// Afficher les données du formulaire dans la console
const inputPrenom = document.getElementById("prenom")
const inputNom = document.getElementById("nom")
const inputEmail = document.getElementById("email")
const envoie = document.querySelector('form button')

envoie.addEventListener('click', () => {
    console.log("Données du formulaire :")
    console.log(`Prénom : ${inputPrenom.value}`)
    console.log(`Nom : ${inputNom.value}`)
    console.log(`Email : ${inputEmail.value}`)
})



