const authors = document.querySelector('.authors');

fetch('https://reqres.in/api/users')
.then((response) =>{
    return response.json();
})
.then((infos) =>{
    console.log(infos)
    infos.data.forEach(usuario =>{
        console.log(usuario)

        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", usuario.id);
        authors.appendChild(card);

        const nome = document.createElement("h2");
        nome.textContent = usuario.first_name +" "+ usuario.last_name;
        card.appendChild(nome);

        const email = document.createElement("p");
        email.textContent = usuario.email;
        card.appendChild(email);

        const botao = document.createElement("button");
        botao.textContent = "✖";
        botao.setAttribute("data-id", usuario.id)
        card.appendChild(botao)

        botao.addEventListener("click", () => {
            const thisCard = botao.parentElement;            
            const cardPai = thisCard.parentElement;            

            fetch("https://reqres.in/api/users", {
                method: 'DELETE',
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "id": botao.getAttribute("data-id")
                })
            })
            .then(() =>{
                cardPai.removeChild(thisCard)
            })
            .catch((erro) =>{
                console.log(erro)
            })
        })
    })
})
.catch((erro) =>{
    console.log(erro)
})