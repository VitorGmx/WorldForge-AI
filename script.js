const partesNome = [
    "Aether",
    "Val",
    "Nox",
    "Eld",
    "Thal",
    "Zy",
    "Kor",
    "Lun",
    "Drak",
    "Or",
    "Vyr",
    "Kael",
    "Myth",
    "Ar"
];


const racas = [
    "Elfos das Sombras",
    "Orcs de Ferro",
    "Humanos Celestiais",
    "Anões Vulcânicos",
    "Serpentes Eternas",
    "Vampiros Antigos",
    "Dragões Ancestrais",
    "Criaturas Astrais"
];


const habilidades = [
    "Controle dos elementos",
    "Força sobrenatural",
    "Manipulação da mente",
    "Velocidade absurda",
    "Domínio das sombras",
    "Regeneração"
];


const fraquezas = [
    "Luz pura",
    "Magia antiga",
    "Ferro negro",
    "Energia divina",
    "Memórias perdidas"
];


const guerras = [
    "Uma guerra entre deuses dividiu os continentes.",
    "Um antigo império voltou para conquistar o mundo.",
    "Uma criatura lendária despertou após mil anos.",
    "Duas raças entraram em conflito por uma fonte de magia.",
    "Um portal dimensional abriu trazendo uma ameaça desconhecida."
];


const fontesMagia = [
    "Energia da alma",
    "Fragmentos dos deuses",
    "Cristais elementais",
    "Dimensões paralelas",
    "Força da natureza",
    "Sangue ancestral"
];


const limitacoes = [
    "Consome energia vital",
    "Pode corromper o usuário",
    "Apaga memórias antigas",
    "Precisa de treinamento extremo",
    "Só funciona durante a noite"
];



function aleatorio(lista){

    return lista[Math.floor(Math.random()*lista.length)];

}




function gerarNome(){

    let nome = 
    aleatorio(partesNome) +
    aleatorio(partesNome) +
    aleatorio(partesNome);


    return nome;

}





function generateName(){

    let nome = gerarNome();


    document.getElementById("name").innerHTML =

    `
    🌎 Novo mundo encontrado:

    <br><br>

    <b>${nome}</b>
    `;


}





function createWorld(){


    let nome = document.getElementById("worldName").value;


    if(nome.trim()==""){

        nome = gerarNome();

    }


    let tema =
    document.getElementById("theme").value;



    document.getElementById("world").innerHTML =

    `

    <h3>🌎 ${nome}</h3>

    <b>Estilo:</b> ${tema}

    <br><br>


    🏰 Reinos:

    <ul>

    <li>Império de Valnor</li>

    <li>Cidade de Elyria</li>

    <li>Clãs de Drak'Thul</li>

    </ul>


    🌋 Evento histórico:

    <br>

    ${aleatorio(guerras)}

    `;


}





function generateRace(){


    document.getElementById("race").innerHTML =

    `

    🧬 Raça:

    <b>${aleatorio(racas)}</b>


    <br><br>


    ⚔️ Habilidade:

    ${aleatorio(habilidades)}


    <br><br>


    ❌ Fraqueza:

    ${aleatorio(fraquezas)}

    `;


}




function generateWar(){


    document.getElementById("war").innerHTML =


    `

    ⚔️ ${aleatorio(guerras)}

    `;


}





function generateMagic(){


    document.getElementById("magic").innerHTML =


    `

    🔮 Fonte:

    ${aleatorio(fontesMagia)}


    <br><br>


    ⚠️ Limitação:

    ${aleatorio(limitacoes)}

    `;


}






function saveWorld(){


    let mundo = {


        nome:
        document.getElementById("worldName").value,


        tema:
        document.getElementById("theme").value,


        data:
        new Date().toLocaleString()


    };



    localStorage.setItem(

        "WorldForge",

        JSON.stringify(mundo)

    );



    document.getElementById("saveStatus").innerHTML =

    "💾 Mundo salvo com sucesso!";


}





function loadWorld(){


    let mundo =

    JSON.parse(

        localStorage.getItem("WorldForge")

    );



    if(!mundo){


        document.getElementById("saveStatus").innerHTML =

        "Nenhum mundo encontrado.";


        return;

    }




    document.getElementById("saveStatus").innerHTML =


    `

    🌎 Mundo carregado:

    <br><br>


    Nome:

    <b>${mundo.nome}</b>


    <br>


    Tema:

    ${mundo.tema}


    <br>


    Criado:

    ${mundo.data}

    `;


}
