//pegando elemento #cep HTML
const btn = document.querySelector(".btn-search-sticker");
const stickers = document.querySelector(".stickers");
const text = document.querySelector("#sticker");

//
btn.addEventListener("click", (e) =>{
    e.preventDefault()
    stickers.innerHTML = "";

    let textVal = text.value

    fetch(`https://api.giphy.com/v1/stickers/search?q=${textVal}&api_key=K9zPt03wVPQcO6MNeo7dem4jilnHENAX`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data)
        data.data.forEach(sticker => {
            console.log(sticker)

            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.setAttribute('data-id', sticker.id);
            box.innerHTML = `<img src="${sticker.images.fixed_height.url}">`
            stickers.appendChild(box);

        // stickers

        })

    })
    .catch((erro)=>{
        console.log(erro)
    })
})