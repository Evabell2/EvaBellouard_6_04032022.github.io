/* eslint-disable no-undef */ //lightbox()

    // Récupère l'Id de l'URL
    let urlData = new URLSearchParams(window.location.search)
    const profilPhotographe = urlData.get('id')
    
    let profilData = []
    let profil
    let likes = 0
    
    // Récupère les données dans un tableau (profilData)
    const fetchProfil = async () => {
        await fetch(`data/photographers.json`)
        .then((res) => res.json())
        .then((data) => {
            profilData = data
            profil = data.photographers.find( photographer => photographer.id == profilPhotographe )
            document.querySelector(".profil-photographe").innerHTML = 
            `<h1 tabindex="0">${profil.name}</h1>
             <div tabindex="0">
                <h2>${profil.city}, ${profil.country}</h2>
                <p>${profil.tagline}</p>
             </div>`

            document.querySelector(".photo-de-profil").innerHTML = 
            `<img src="images/photographers/Profils/${profil.portrait}" alt="${profil.name}" tabindex="0"/>`;
            // profil = info du photographe

            document.querySelector(".modal p").innerHTML = `${profil.name}`
            // Nom du photographe dans la modale du form


            // Filtres
            const populariteFiltre = document.getElementById('filtre-popularite');
            const dateFiltre = document.getElementById('filtre-date');
            const titreFiltre = document.getElementById('filtre-titre');
            profilData.media.sort((a,b) => b.likes - a.likes)

            populariteFiltre.addEventListener('click', () => {
                profilData.media.sort((a,b) => b.likes - a.likes)
                renderCards()
                Lightbox()
            })
            populariteFiltre.addEventListener("keydown", e => {
                if (e.key == 'Enter') {
                    profilData.media.sort((a,b) => b.likes - a.likes)
                    renderCards()
                    Lightbox()
                }
            })

            dateFiltre.addEventListener('click', () => {
                profilData.media.sort(byDate)
                function byDate(a, b) {
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf()
                }
                renderCards()
                Lightbox()
            })
            dateFiltre.addEventListener('keydown', () => {
                profilData.media.sort(byDate)
                function byDate(a, b) {
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf()
                }
                renderCards()
                Lightbox()
            })
    
            titreFiltre.addEventListener('click', () => {
                profilData.media.sort((a,b) => a.title.localeCompare(b.title))
                renderCards()
                Lightbox()
            })
            titreFiltre.addEventListener('keydown', () => {
                profilData.media.sort((a,b) => a.title.localeCompare(b.title))
                renderCards()
                Lightbox()
            })
            
            renderCards()
            Lightbox()
        })
    }
    fetchProfil()
    
    function renderCards() {
        likes = 0
        const photographersSection = document.querySelector("#photographe-medias");
        photographersSection.innerHTML = ``
        for (const media of profilData.media) {
            if (media.photographerId==profilPhotographe) {
                const mediaModel = MediaFactory(media, profil)
                const mediaCardDom = mediaModel.getUserMedia()
                photographersSection.appendChild(mediaCardDom)
                // appeler la factory pour le media en cours
                // insérer la carte générée dans le DOM
                likes+=media.likes
            }
        }
        // Incrémentation likes
        const totalLike = likes
        const blocLikes = document.createElement('div')
        blocLikes.id = 'compteur-likes'
        blocLikes.tabIndex='0'
        blocLikes.innerHTML = `
        <span id="likesTotal">${totalLike}</span>
        <span>${profil.price} € / jour</span>`
        document.body.appendChild(blocLikes)

        const boutonLikes = document.querySelectorAll('.contenu p')
        const likesTotal = document.getElementById('likesTotal')
        
        for (const boutonLike of boutonLikes) {
            boutonLike.addEventListener('click', () => {
                boutonLike.textContent++
                likesTotal.textContent++
            })
            boutonLike.addEventListener("keydown", e => {
                if (e.key == 'Enter') {
                    boutonLike.textContent++
                    likesTotal.textContent++
                }
            })
        }
    }