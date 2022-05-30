function Filters() {
    // Ouverture et fermeture bouton/menu filtre
    const filtreClose = document.getElementById('filtre-close')
    const filtreOpen = document.getElementById('filtre-open')

    filtreClose.addEventListener('click', () => {
        filtreOpen.style.display='block'
    })
    filtreClose.addEventListener("keydown", e => {
        if (e.key == 'Enter') {
            filtreOpen.style.display='block'
        }
    })

    filtreOpen.addEventListener('click', () => {
        filtreOpen.style.display='none'
    })
    filtreOpen.addEventListener("keydown", e => {
        if (e.key == 'Escape') {
            filtreOpen.style.display='none'
            filtreClose.focus()
        }
    })

    // Changement de la valeur du filtre courant
    const filtreCurrent = document.getElementById("filtre-current")
    const filtrePopularite = document.getElementById('filtre-popularite')
    const filtreDate = document.getElementById('filtre-date')
    const filtreTitre = document.getElementById('filtre-titre')

    filtrePopularite.addEventListener('click', () => {
        filtreCurrent.textContent="Popularité"
    })
    filtrePopularite.addEventListener("keydown", e => {
        if (e.key == 'Enter') {
            filtreCurrent.textContent="Popularité"
        }
    })
    filtreDate.addEventListener('click', () => {
        filtreCurrent.textContent="Date"
    })
    filtreDate.addEventListener("keydown", e => {
        if (e.key == 'Enter') {
            filtreCurrent.textContent="Date"
        }
    })
    filtreTitre.addEventListener('click', () => {
        filtreCurrent.textContent="Titre"
    })
    filtreTitre.addEventListener("keydown", e => {
        if (e.key == 'Enter') {
            filtreCurrent.textContent="Titre"
        }
    })
}
Filters()

