const app = document.getElementById('root');
const authors = document.createElement('div');
authors.setAttribute('class', 'authors');
app.appendChild(authors);

fetch('https://randomuser.me/api/?results=10')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log("SUCESSO!!")
    console.log(data)
    data.results.forEach(pessoas => {
        const card=document.createElement('div');
        card.setAttribute('class', 'card');
        authors.appendChild(card);

        const img = document.createElement('img');
        img.setAttribute("src", pessoas.picture.large);
        card.appendChild(img);

        const name = document.createElement('h2');
        name.textContent = pessoas.name.first + " " + pessoas.name.last;
        card.appendChild(name);

        const local = document.createElement('h3');
        local.textContent = pessoas.location.city + ", " + pessoas.nat;
        card.appendChild(local);

        const email = document.createElement('p');
        email.textContent = pessoas.email;
        card.appendChild(email);

        const phone = document.createElement ('p');
        phone.textContent = pessoas.cell;
        card.appendChild(phone);

    });
    
})
.catch(function(erro){
    console.log(erro)
})