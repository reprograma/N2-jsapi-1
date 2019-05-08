const button = document.getElementById("send_form");

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("first_name").value;
    const sobrenome = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'first_name': nome,
            'last_name': sobrenome,
            'email': email,
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("message").textContent = "Sucesso!! :)"
    })
    .catch((erro) => {
        console.log(erro)
    })


})

//receita(ingrediente1, ingrediente2, ingrediente3);