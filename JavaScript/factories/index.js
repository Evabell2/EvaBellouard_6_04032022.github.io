function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `/images/photographers/Profils/${portrait}`;
    const location = `${city}, ${country}`;
    const prices = `${price}€/jour`;
    const link = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", link)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = location;
        const p = document.createElement('p');
        p.textContent = tagline;
        const span = document.createElement('span');
        span.textContent = prices;
        article.appendChild(a);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(span);
        return (article);
    }
    return { name, picture, location, tagline, prices, link, getUserCardDOM }

}