# N2-jsapi-1
> Entendo API e HTTP e consumindo dados dinâmicos


![Imagem dos Collabocats](https://octodex.github.com/images/collabocats.jpg)

### Semana 1

**Entendendo sobre API e HTTP e trabalhando com dados fixos.**

* Revisão Tags e Conceitos vistos
* Dinâmica de HTTP
* API e objetos JSON
* Exercício guiado - Dados estáticos com JSON - Estúdio Ghibli

**Verbos, Request e Response e trabalhando com dados dinâmicos com Postman**

* Exercício - Dados estáticos com JSON - Pokemon
* Dissecando HTTP Request e Response
* HTTP Status Code
* Principais métodos do protocolo HTTP - Verbos - Postman
* Método GET - Postman


**Consumindo dados dinâmicos na prática e XMLHttpRequest**

* Exercício guiado - Consumindo API com XMLHttpRequest - Estúdio Ghibli
* Exercício -  Consumindo API - Página de colaboradores (Template será disponibilizado)

**Consumindo dados dinâmicos na prática com Fetch API**

* Correção do Exercício
* Substituindo o XMLHttpRequest por Fetch
* Exercício -  Consumindo API - CEP (Template será disponibilizado)

----
### Semana 2

**Entendendo sobre Rest , verbos e trabalhando com dados dinâmicos com Postman**

* Rest
* Exercício CEP - Correção
* Exercício guiado -  Inserindo, atualizando e excluindo dados dinâmicos - Postman (Formato DOJO)

**Consumindo dados dinâmicos com Fetch API**

* Fetch API
* Promisses
* Requisições assíncronas
* Exercício guiado - Inserindo (Template será disponibilizado)
* Exercício guiado - Atualizando (Template será disponibilizado)
* Exercício guiado - Excluindo (Template será disponibilizado)

**Praticando comsumo de API com Fetch API e Template String**

* Diferença entre innerHTML e textContent
* Template String
* Exercício guiado - Twitter Like - Feed, postar, editar post, excluir post (Template será disponibilizado)

**Praticando comsumo de API com Fetch API e Template String**

* Diferença entre innerHTML e textContent
* Template String
* Exercício guiado - Twitter Like - Feed, postar, editar post, excluir post (Template será disponibilizado)

**Reforçando conceitos e praticando**
* Git e GitHub (Fork, clone, origin/remote, add e commit - como sair do editor)
* Leitura documentação
* Postman
<!-- * queryParams - body  -->

**Extra**

* Exercício - Giphy 

---
## Guia

#### O que é o HTTP?

HTTP significa **H**yper**T**ext **T**ransfer **P**rotocol ou Protocolo de Transferência de Hipertexto. É um protocolo de comunicação da camada de aplicação que permite que aplicações web se comuniquem e troquem informações e dados. É o mensageiro da web.

Um padrão comum nos atuais aplicativos da Web / dispositivos móveis é solicitar dados do servidor (como usuários, publicações, comentários, assinaturas, pagamentos e assim por diante) e manipulá-los usando CRUD.

>**O que é CRUD?**
*Acrónimo do inglês Create, Read, Update e Delete*
São as quatro operações básicas: criação (POST) consulta (GET), atualização (PUT) e destruição de dados (DELETE) 

Os principais métodos do protocolo HTTP e o cenário de utilização de cada um deles:

Métodos | Quando usar
------------ | -------------
GET	| Obter os dados de um recurso.
POST |	Criar um novo recurso.
PUT	| Substituir os dados de um determinado recurso.
PATCH |	A tualizar parcialmente um determinado recurso.
DELETE | Excluir um determinado recurso.
HEAD | Similar ao GET, mas utilizado apenas para se obter os cabeçalhos de resposta, sem os dados em si.
OPTIONS	| Obter quais manipulações podem ser realizadas em um determinado recurso.


**O HTTP Response**
Depois que o servidor processa sua requisição, ele precisa devolver uma resposta que geralmente vai estar em um formato que seu navegador consiga entender: HTML, XML ou JSON.

A Response também vem com o Status Code que informa o que aconteceu com a requisição que você mandou.

Status Code | Significado
------------ | -------------
100 | são apenas informativas
200 | significa que a requisição foi bem sucedida
300 |  querem te falar pra você fazer um redirecionamento, ou seja, uma segunda requisição
400 | significa que tem algum erro na requisição
500 | erro no servidor


#### O que é o API?

API significa **A**pplication **P**rogramming **I**nterface ou Interface entre Aplicativo e Programação. É um conjunto de instruções e padrões de programação para acesso a um aplicativo de software. Uma empresa de software lança sua API para o público de modo que outros criadores de software possam desenvolver produtos acionados por esse serviço.



*Mais explicações em:*

Vídeo: [Canal Código Fonte TV - API // Dicionário do Programador
](https://www.youtube.com/watch?v=vGuqKIRWosk)
Texto: [O que é uma API?](https://usemobile.com.br/o-que-e-uma-api/)

#### O que é o JSON?

JSON significa **J**ava**S**cript **O**bject **N**otation. São dados salvos em um arquivo .json e consistem em uma série de pares chave / valor.

```javascript
    { "key": "value" }
```

O valor de qualquer chave JSON pode ser uma string, Boolean, number, null, array ou objeto. Comentários não são permitidos no JSON.

Embora o JSON se pareça com um objeto ou uma matriz, o JSON é uma string. Uma string serializada, o que significa que ela pode ser analisada e decodificada posteriormente em tipos de dados.

*Mais explicações em:*

Vídeo: [Canal Código Fonte TV - JSON // Dicionário do Programador
](https://www.youtube.com/watch?v=P81dE-tkaaA)

#### O que é o XMLHttpRequest?

O objeto XMLHttpRequest é usado para recuperar dados de um servidor (uma URL) de forma assíncrona, sem ter que fazer uma atualização de página inteira. Antigamente XMLHttpRequest usado para buscar somente dados XML. Mas hoje ele pode ser usado com protocolos diferentes de HTTP e pode buscar dados não apenas na forma de XML, mas também em JSON, HTML ou texto simples.

Podemos configurar dois Listeners para lidar com os casos de sucesso e erro e uma chamada para open() e send(). A resposta do servidor é armazenada na variável responseText, que é convertida para o objeto JavaScript usando JSON.parse().

```javascript
    function success() {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }

    function error(err) {
        console.log('Error Occurred :', err);
    }

    var xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET', 'https://ghibliapi.herokuapp.com/films');
    xhr.send();
```

#### O que é o Fetch API?
![confetch api](https://media.giphy.com/media/KESQSCbtsnzq/giphy.gif)

A Fetch torna mais fácil fazer requisições assíncronas e lidar com as respostas melhor do que com o antigo XMLHttpRequest. É uma melhoria em relação à API XMLHttpRequest. A principal diferença entre o Fetch e o XMLHttpRequest é que o Fetch API usa o Promises, evitando dores de cabeça com callbacks.

O fetch()tem a premissa de substituir a antiga XMLHttpRequest. O único parâmetro obrigatório do fetch() é uma String que indica o endereço de onde iremos fazer a requisição. 


````javascript
    fetch('https://api.github.com/search/repositories?q=javascript')
    .then(response => response.json())
    Uau!
````

O fetch() nos retorna uma Promise. Essa Promise retorna um objeto Response com informações da resposta do servidor. Como queremos pegar a resposta em formato JSON, basta executar a função json().

O fetch() aceita um segundo parâmetro, onde podemos passar um objeto de configuração. É nele onde indicamos o método da requisição, cabeçalho, corpo, etc.

````javascript
    fetch('https://myexample.com', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'}, 
        body: 'foo=bar&blah=1'
    })
    .then(response => response.json())
````
* method – GET | POST | PUT | DELETE | HEAD
* url – URL da requisição
* headers – cabeçalho
* body – corpo da requisição
* referrer – referência da requisição
* mode – cors | no-cors | same-origin
* credentials – indica se os cookies devem ser enviados junto com a requisição
* redirect – follow | error | manual
* integrity – valor de integridade da fonte
* cache – modo do cache (default | reload | no-cache)

O fetch() já tem um bom suporte por parte dos navegadores modernos, como você pode visualizar aqui no [Can I Use](https://caniuse.com/#feat=fetch).

----
###  Links e Referências
* [Postman](https://www.getpostman.com/)
* [HTTP Como funcionam requests e responses?](http://gabsferreira.com/o-que-e-o-http-como-funciona-request-respose/)
* [HTTP Cat](https://http.cat/)
* [HTTP Dogs](https://httpstatusdogs.com/)
* [Doc XMLHTTPRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest)
* [Rest](https://blog.caelum.com.br/rest-principios-e-boas-praticas/)

----

###  Isabelle Galvão

* [GitHub](https://github.com/isabellegalvao)
* [Facebook](https://www.facebook.com/galvaoiisabelle)
* [Instagram](https://www.instagram.com/galvaoiisabelle/)
* [Linkedin](https://www.linkedin.com/in/galvaoisabelle/)


