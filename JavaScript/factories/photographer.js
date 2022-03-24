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
function pagePhotographerFactory(data) {
    const { name, portrait, city, country, tagline } = data;

    const picture = `/images/photographers/Profils/${portrait}`;
    const location = `${city}, ${country}`;

    function getUserCardDOM() {
        const section = document.createElement( 'section' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const h2 = document.createElement('h2');
        h2.textContent = location;
        const p = document.createElement('p');
        p.textContent = tagline;
        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(h2);
        section.appendChild(p);
        return (section);
    }
    return { name, picture, location, tagline, getUserCardDOM }

}
function mediaFactory(data) {
    const { title, image, likes, photographerId } = data;

    const picture = `/images/photographers//${image}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h3 = document.createElement('h3');
        h3.textContent = title;
        const p = document.createElement('p');
        p.textContent = likes;
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        return (article);
    }
    return { title, picture, likes, getUserCardDOM }

}