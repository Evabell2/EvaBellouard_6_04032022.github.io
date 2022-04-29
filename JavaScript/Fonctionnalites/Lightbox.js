function Lightbox() {
    const links = document.querySelectorAll("article>a")

    for (const link of links) {
        link.addEventListener('click', event => {
            const lightbox = document.createElement('div')
            event.preventDefault();
            let card = event.currentTarget
            let url = card.getAttribute('href')
            const title = (card.parentNode.querySelector("h3")).innerHTML
            const srcVideo = card.firstChild.getAttribute('src')
            
            function goNext() {
                const cardNext = card.parentNode.nextSibling.firstChild
                card = cardNext
                url = cardNext.getAttribute('href')
                img.src = url
                h3.innerText = (cardNext.parentNode.querySelector("h3")).innerHTML
                lightboxContainer = document.querySelector(".lightbox_container")
                if (cardNext.firstChild.src.includes('mp4')) {
                    video.style.display="block"
                    video.src = cardNext.firstChild.getAttribute('src')
                    img.style.display="none"
                }
                else {
                    video.style.display="none"
                    img.style.display="block"
                }
            }
            function goPrev() {
                const cardPrev = card.parentNode.previousSibling.firstChild
                card = cardPrev
                url = cardPrev.getAttribute('href')
                img.src = url
                h3.innerText = (cardPrev.parentNode.querySelector("h3")).innerHTML
                if (cardPrev.firstChild.src.includes('mp4')) {
                    video.style.display="block"
                    video.src = cardPrev.firstChild.getAttribute('src')
                    img.style.display="none"
                }
                else {
                    video.style.display="none"
                    img.style.display="block"
                }
            }

            lightbox.className = 'lightbox'
            lightbox.style.display = "flex" 
            const div = document.createElement('div')
            div.className = "lightbox_container"
            const img = document.createElement('img')
            img.src = url
            const video = document.createElement('video')
            video.src = srcVideo
            
            div.appendChild(video)
            div.appendChild(img)
            if (srcVideo.includes("mp4")) {
                img.style.display="none"
            }
            else {
                video.style.display="none"
            }

            const h3 = document.createElement('h3')
            h3.innerText = title
            div.appendChild(h3)
            lightbox.appendChild(div)
            document.body.appendChild(lightbox)
            const close = document.createElement("button")
            close.className = "lightbox_close"
            lightbox.appendChild(close)
            const prev = document.createElement("button")
            prev.className = "lightbox_prev"
            lightbox.appendChild(prev)
            const next = document.createElement("button")
            next.className = "lightbox_next"
            lightbox.appendChild(next)
            
            function goClose() {
                lightbox.style.display = "none"
            }
            document.addEventListener("keydown", espace)
            function espace(e) {
                e.preventDefault();
                if (e.keyCode == 32) {
                    goClose()
                }
            }
            close.addEventListener('click', goClose)

            document.addEventListener("keydown", right)
            function right(e) {
                if (e.keyCode == 39) {
                    goNext()
                }
            }
            next.addEventListener('click', goNext)

            document.addEventListener("keydown", left)
            function left(e) {
                if (e.keyCode == 37) {
                    goPrev()
                }
            }
            prev.addEventListener('click', goPrev)
        })
    }
}



