//pegando elemento #cep HTML
const cep = document.getElementById("cep");

//
cep.addEventListener("focusout", () =>{
    console.log("FOCUS OUT")

    //escrevendo no console valor do CEP
    let cepVal = cep.value

    fetch(`https://viacep.com.br/ws/${cepVal}/json`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data)
        console.log(data.cep)
        document.getElementById("estado").value = data.uf;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("endereco").value = data.logradouro;
    })
    .catch((erro)=>{
        console.log(erro)
    })
})