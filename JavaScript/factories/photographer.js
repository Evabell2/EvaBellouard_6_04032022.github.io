// Modèle media du photographe (page individuelle)
// eslint-disable-next-line no-unused-vars
function MediaFactory(data, photographer) {
    const { title, image, video, likes } = data

    const pictureMedia = `images/photographers/${photographer.name}/${image}`
    const videoMedia = `images/photographers/${photographer.name}/${video}`
    const pictureAlt = `${title}`

    function getUserMedia() {
        const article = document.createElement( 'article' )
        const a = document.createElement( 'a' )
        a.setAttribute("href", pictureMedia)
        
        if (videoMedia.includes('mp4')) {
            const lavideo = document.createElement( 'video' )
            lavideo.setAttribute("src", videoMedia)
            lavideo.setAttribute("alt", pictureAlt)
            lavideo.controls = true
            lavideo.ariaLabel="Ouvre la vue lightbox"
            article.appendChild(a)
            a.appendChild(lavideo)
        }
        else {
            const img = document.createElement( 'img' )
            img.setAttribute("src", pictureMedia)
            img.setAttribute("alt", pictureAlt)
            img.ariaLabel="Ouvre la vue lightbox"
            article.appendChild(a)
            a.appendChild(img)
        }
        const div = document.createElement('div')
        div.className="contenu"
        const h3 = document.createElement('h3')
        h3.textContent = title;
        h3.tabIndex="0"
        const p = document.createElement('p')
        p.textContent = likes
        p.tabIndex="0"
        p.ariaLabel = "likes"

        article.appendChild(div)
        div.appendChild(h3)
        div.appendChild(p)
        return (article)
    }
    return { title, pictureMedia, pictureAlt, likes, videoMedia, getUserMedia }
}