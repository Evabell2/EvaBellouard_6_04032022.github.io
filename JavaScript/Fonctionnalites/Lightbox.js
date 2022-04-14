function Lightbox() {
    // const container = document.getElementById('photographe-medias')
    
    const links = document.querySelectorAll("article>a")
    // const links = container.querySelectorAll("a")
    console.log(links)
    // const links = document.getElementsByTagName('a')

    // console.log(linksMedias);
    // linksMedias.className = 'link-medias'
    // const links = document.getElementsByClassName('link-medias');

    for (const link of links) {
        link.addEventListener('click', event => {
            console.log("lightbox")
            event.preventDefault;
            const lightbox = document.createElement('div')
            lightbox.className = 'lightbox'
            lightbox.innerHTML = ` 
            <div class="lightbox_container">
                <img src="/images/photographers/Mimi Keel/Event_PintoWedding.jpg" alt="">
            </div>
            <button class="lightbox_close">Fermer</button>
            <button class="lightbox_next">Next</button>
            <button class="lightbox_prev">Prev</button>` 
            document.body.appendChild(lightbox)
        })
    }
}
Lightbox();

// const medias = document.getElementsByTagName('img');
// console.log(medias)

// for (const media of medias) {
//     media.addEventListener('click', function onClick() {
//         console.log('mediaaaaaaaaaaaaaaas')
//     });
// }



