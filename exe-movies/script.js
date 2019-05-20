const btn = document.querySelector(".btn-search-movie");
const movies = document.querySelector(".movies");
const text = document.querySelector("#movie");

btn.addEventListener("click", (e) =>{
    e.preventDefault()
    movies.innerHTML = "";

    let textVal = text.value

    fetch(`http://www.omdbapi.com/?s=${textVal}&apikey=a9b91b45`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data)
        data.Search.forEach(movie => {
            console.log(movie)

            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.setAttribute('data-id', movie.imdbID);
            box.innerHTML = `
            <img src="${movie.Poster}" alt="">
            <div class="box-divider">
              <p><span>${movie.Title}</span> <span>(${movie.Year})</span></p>
              <p>${movie.Type}</p>
            </div>`
            movies.appendChild(box);
        })
    })
    .catch((erro)=>{
        console.log(erro)
    })
})