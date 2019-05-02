const app = document.getElementById('root')
const container = document.createElement('container')
container.setAttribute("class", "container")

app.appendChild(container);

const request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    const data = JSON.parse(this.response);
    console.log(data)
    console.log (data[0].titlle)
    if(request.status >= 200 && request.status < 400) {
        console.log("Sucesso!")

        for(let i =0; i< data.length; i++){
            console.log(data[i].title)
            console.log(data[i].description)
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            container.appendChild(card);
            let title = document.createElement("h1");
            title.innerHTML = data [i].title
            card.appendChild(title)
      
            let description = document.createElement ("h3");
            description.innerHTML = data[i].description
            card.appendChild(description)
      
          }
    }else{
        console.log("erro :c")
    }

}
request.send()
