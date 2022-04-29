function MediaFactory(data, photographer) {
    const { title, image, video, likes } = data;

    const pictureMedia = `/images/photographers/${photographer.name}/${image}`;
    const videoMedia = `/images/photographers/${photographer.name}/${video}`;

    function getUserMedia() {
        const article = document.createElement( 'article' );

        const a = document.createElement( 'a' );
        a.setAttribute("href", pictureMedia);
        const img = document.createElement( 'img' );
        img.setAttribute("src", pictureMedia); 
        const video = document.createElement( 'video' );
        video.setAttribute("src", videoMedia); 

        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = title;
        const p = document.createElement('p');
        p.textContent = likes;
        if (video.src.includes('mp4')) {
            article.appendChild(a);
            a.appendChild(video);
        }
        else {
            article.appendChild(a);
            a.appendChild(img);
        }
        article.appendChild(div);
        div.appendChild(h3);
        div.appendChild(p);
        return (article);
    }
    return { title, pictureMedia, likes, videoMedia, getUserMedia }
}