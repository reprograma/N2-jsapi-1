const obj = [
      {
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
      },
      {
        "title": "Grave of the Fireflies",
        "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."
      },
      {
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her."
      },
      {
        "title": "Kiki's Delivery Service",
        "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service."
      },
      {
        "title": "Only Yesterday",
        "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self."
     },
      {
        "title": "Howl's Moving Castle",
        "description": "The story is set in a fictional kingdom where both magic and early 20th-century technology are prevalent, against the backdrop of a war with another kingdom. The film tells the story of a young hatter named Sophie after she is turned into an old woman by a witch's curse. She encounters a wizard named Howl, and gets caught up in his resistance to fighting for the king."
     }
    ]


    //Aqui começa o exercicio
    
    const app = document.getElementById("root");
    const container = document.createElement("div");
    //Atribuindo uma class dentro da div chamada container
    container.setAttribute("class", "container");

    app.appendChild(container);

    //Fazer com que o servidor leia a array de filmes e imprima isso no console
      //usando forEach
      obj.forEach(filme => {
        console.log(filme.title)
        console.log(filme.description)
        
        //Criando os Cards para cada item do array
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        //o espaço container vai adotar as variaveis criadas, cards
        container.appendChild(card);

        //Criando o elemento de um titulo
        let titulo = document.createElement("h1");
        titulo.innerHTML = filme.title
        card.appendChild(titulo);

        //Criando o elemento da descrição 
        let descricao = document.createElement("p");
        descricao.textContent = filme.description
        card.appendChild(descricao);
      });

      //usando for
      // for(let i=0; i<obj.length; i++){
      //   console.log(obj[i].title + obj[i].description)
      // }

      

