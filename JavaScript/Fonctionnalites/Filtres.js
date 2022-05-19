function Filters() {
    const filtreClose = document.getElementById('filtre-close')
    const filtreOpen = document.getElementById('filtre-open')

    filtreClose.addEventListener('click', e => {
        filtreOpen.style.display='block'
    })
    filtreClose.addEventListener("keydown", e => {
        if (e.key == 'Enter') {
            filtreOpen.style.display='block'
        }
    })

    filtreOpen.addEventListener('click', e => {
        filtreOpen.style.display='none'
    })
    filtreOpen.addEventListener("keydown", e => {
        if (e.key == 'Escape') {
            filtreOpen.style.display='none'
        }
    })

    const filtreCurrent = document.getElementById("filtre-current")
    const filtrePopularite = document.getElementById('filtre-popularite')
    const filtreDate = document.getElementById('filtre-date')
    const filtreTitre = document.getElementById('filtre-titre')

    filtrePopularite.addEventListener('click', e => {
        filtreCurrent.textContent="Popularité"
    })   
    filtreDate.addEventListener('click', e => {
        filtreCurrent.textContent="Date"
    })
    filtreTitre.addEventListener('click', e => {
        filtreCurrent.textContent="Titre"
    })
}

