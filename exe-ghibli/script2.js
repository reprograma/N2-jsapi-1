const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload =  function(){
    const data = JSON.parse(this.response);

    console.log(data)
    console.log(data[0].title)

    if(request.status >= 200 && request.status < 400){
        console.log("SUCESSO!!!")
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
          
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
          
            const p = document.createElement('p');
            movie.description = movie.description;
            p.textContent = movie.description;
          
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
          });
    }else{
        console.log("erro :c")
    }
}
request.send()

