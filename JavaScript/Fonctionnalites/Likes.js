function compteurLikes() {
    const blocLikes = document.createElement('div')
    blocLikes.className = 'compteur-likes'
    blocLikes.innerHTML
    document.body.appendChild(blocLikes)


}
// const fetchProfil = async () => {
//     await fetch(`data/photographers.json`)
//     .then((res) => res.json())
//     .then((data) => {
//         const infosPhotographe = []
//         infosPhotographe = data
//         console.log(infosPhotographe);
//     });
// };
// fetchProfil();