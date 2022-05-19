function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data

    const picture = `images/photographers/Profils/${portrait}`
    const pictureAlt = `${name}`
    const location = `${city}, ${country}`
    const prices = `${price}€/jour`
    const link = `photographer.html?id=${id}`

    function getUserCardDOM() {
        const article = document.createElement( 'article' )
        const divImage = document.createElement('div')
        const divText = document.createElement('div')
        divText.className="div-text"
        divImage.className="div-text"
        divText.tabIndex="0"
        divImage.tabIndex="0"
        const a = document.createElement( 'a' )
        a.setAttribute("href", link)
        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", pictureAlt)
        const h2 = document.createElement( 'h2' )
        h2.textContent = name;
        const h3 = document.createElement('h3')
        h3.textContent = location;
        const p = document.createElement('p')
        p.textContent = tagline;
        const span = document.createElement('span')
        span.textContent = prices
        article.appendChild(divImage)
        article.appendChild(divText)
        article.appendChild(a)
        divImage.appendChild(img)
        divImage.appendChild(h2)
        divText.appendChild(h3)
        divText.appendChild(p)
        divText.appendChild(span)
        return (article)
    }
    return { name, picture, pictureAlt, location, tagline, prices, link, getUserCardDOM }
}
photographerFactory()