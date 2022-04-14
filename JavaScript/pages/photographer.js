
    // Récupère l'Id de l'URL
    let urlData = new URLSearchParams(window.location.search)
    const profilPhotographe = urlData.get('id')
    // console.log(profilPhotographe)

    let profilData = [];

    // Récupère les données dans un tableau (profilData)
    const fetchProfil = async () => {
        await fetch(`data/photographers.json`)
        .then((res) => res.json())
        .then((data) => {
            profilData = data
            const profil = data.photographers.find( photographer => photographer.id == profilPhotographe );
            document.querySelector(".profil-photographe").innerHTML = 
            `<h1>${profil.name}</h1>
            <h2>${profil.city}, ${profil.country}</h2>
            <p>${profil.tagline}</p>`;

            document.querySelector(".photo-de-profil").innerHTML = 
            `<img src="/images/photographers/Profils/${profil.portrait}"/>`;
            // profil = info du photographe

            for (const media of data.media) {
                if (media.photographerId==profilPhotographe) {
                    const photographersSection = document.querySelector(".photographe-medias");
                    // console.log(media);
                    const mediaModel = MediaFactory(media, profil);
                    const mediaCardDom = mediaModel.getUserMedia();
                    photographersSection.appendChild(mediaCardDom);
                    // appeler la factory pour le media en cours
                    // insérer la carte générée dans le DOM
                }
            }
        });
    };
    fetchProfil();