const app = document.getElementById('root')
const colaborador = document.createElement('h1')
const container = document.createElement('div')
container.setAttribute("class", "container")

app.appendChild(container);

const request = new XMLHttpRequest();
console.log(request)
request.open('GET', 'https://randomuser.me/api/?results=10', true);
console.log(request)

request.onload = function () {
    const data = JSON.parse(this.response).results;
    console.log(data)

    data.forEach(user => {

        console.log(user)

    });

    for (let i = 0; i < data.length; i++) {

        console.log(data[i].name)
        let card = document.createElement("div")
        card.setAttribute("class", "card")
        container.appendChild(card);

        let img = document.createElement("img");
        img.setAttribute("src", data[i].picture.large);
        card.appendChild(img)

        let nome = document.createElement("h2")
        nome.innerHTML = data[i].name.first;
        card.appendChild(nome)

        let location = document.createElement("h3")
        location.innerHTML = data[i].location.city;
        card.appendChild(location)

        let email = document.createElement("h4")
        email.innerHTML = data[i].email;
        card.appendChild(email)
        console.log(data[i].location)
        console.log(data[i].email)

        let telefone = document.createElement("h5")
        telefone.innerHTML = data[i].phone
        card.appendChild(telefone)
        console.log(telefone)

        

    }

}
request.send()