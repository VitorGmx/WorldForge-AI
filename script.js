const partesNome = [
    "Aether","Val","Nox","Eld","Thal","Zy",
    "Kor","Lun","Drak","Or","Vyr","Kael",
    "Myth","Ar","Xen","Vor","Nyx","Ery"
];


const origens = [
    "Celestial",
    "Abissal",
    "Elemental",
    "Dimensional",
    "Ancestral",
    "Artificial",
    "Espiritual",
    "Extraterrestre",
    "Mutante",
    "Divina"
];


const aparencias = [
    "pele cristalizada com marcas brilhantes",
    "olhos sem pupilas capazes de enxergar energia",
    "corpos feitos parcialmente de fumaça",
    "escamas metálicas extremamente resistentes",
    "quatro braços adaptados para combate",
    "asas formadas por energia pura",
    "chifres contendo antigos símbolos mágicos",
    "corpos com partes mecânicas avançadas",
    "pele coberta por runas vivas",
    "formas semelhantes a sombras vivas"
];


const culturas = [
    "império militar extremamente organizado",
    "clãs nômades que viajam entre mundos",
    "sociedade guiada por sacerdotes antigos",
    "civilização tecnológica avançada",
    "tribos conectadas com a natureza",
    "colmeia com consciência coletiva",
    "ordem secreta de estudiosos",
    "reinos divididos por guerras antigas"
];


const poderes = [
    "controle da gravidade",
    "manipulação temporal",
    "absorção de energia",
    "controle dos elementos",
    "criação de matéria",
    "telepatia avançada",
    "regeneração extrema",
    "viagem dimensional",
    "controle das sombras",
    "alteração da realidade"
];


const fraquezas = [
    "dependência de uma fonte de energia rara",
    "vulnerabilidade a magia antiga",
    "perda gradual de memória",
    "fraqueza contra determinado elemento",
    "necessidade de um ambiente específico",
    "instabilidade emocional causada pelo poder",
    "envelhecimento acelerado ao usar habilidades"
];


const guerras = [
    "Uma guerra entre impérios destruiu metade do continente.",
    "Uma entidade antiga despertou e mudou o equilíbrio do mundo.",
    "Dois deuses iniciaram uma batalha que afetou todas as raças.",
    "Um portal abriu trazendo criaturas desconhecidas.",
    "Uma civilização desapareceu deixando apenas ruínas."
];


const magias = [
    "Energia da alma",
    "Cristais ancestrais",
    "Sangue de criaturas divinas",
    "Fragmentos de estrelas",
    "Força da natureza",
    "Dimensões alternativas",
    "Tecnologia esquecida"
];


const limitacoesMagia = [
    "consome a energia vital do usuário",
    "pode causar corrupção física",
    "exige anos de treinamento",
    "pode apagar lembranças",
    "precisa de artefatos antigos",
    "fica instável em grandes quantidades"
];



let mundoAtual = {

    nome:"",
    tema:"",
    raca:null,
    magia:null,
    historia:""

};




function aleatorio(lista){

    return lista[Math.floor(Math.random()*lista.length)];

}



function gerarNome(){

    return (
        aleatorio(partesNome)+
        aleatorio(partesNome)+
        aleatorio(partesNome)
    );

}





function generateName(){

    let nome = gerarNome();

    document.getElementById("name").innerHTML =
    `
    🌎 Nome criado:

    <br><br>

    <b>${nome}</b>
    `;

}





function createWorld(){

    let nome =
    document.getElementById("worldName").value;


    if(nome.trim()==""){

        nome = gerarNome();

    }


    let tema =
    document.getElementById("theme").value;



    mundoAtual.nome = nome;
    mundoAtual.tema = tema;


    mundoAtual.historia =
    aleatorio(guerras);



    document.getElementById("world").innerHTML =
    `

    🌎 <b>${nome}</b>

    <br><br>

    Tipo:
    ${tema}

    <br><br>

    📜 História:

    <br>

    ${mundoAtual.historia}

    `;


}





function generateRace(){


    let raca = {


        nome:gerarNome(),


        origem:aleatorio(origens),


        aparencia:aleatorio(aparencias),


        cultura:aleatorio(culturas),


        poder:aleatorio(poderes),


        fraqueza:aleatorio(fraquezas)


    };



    mundoAtual.raca = raca;



    document.getElementById("race").innerHTML =
    `

    🧬 <b>${raca.nome}</b>

    <br><br>


    Origem:
    ${raca.origem}


    <br><br>

    Aparência:
    ${raca.aparencia}


    <br><br>

    Sociedade:
    ${raca.cultura}


    <br><br>

    Poder:
    ${raca.poder}


    <br><br>

    Fraqueza:
    ${raca.fraqueza}

    `;


}





function generateWar(){

    document.getElementById("war").innerHTML =

    "⚔️ " + aleatorio(guerras);

}




function generateMagic(){


    let magia = {


        fonte:aleatorio(magias),


        limite:aleatorio(limitacoesMagia)


    };


    mundoAtual.magia = magia;



    document.getElementById("magic").innerHTML =
    `

    🔮 Fonte:

    ${magia.fonte}


    <br><br>


    ⚠️ Limitação:

    ${magia.limite}

    `;


}






function saveWorld(){


    let arquivo = JSON.stringify(

        mundoAtual,

        null,

        4

    );



    let blob = new Blob(

        [arquivo],

        {type:"application/json"}

    );



    let link = document.createElement("a");


    link.href =
    URL.createObjectURL(blob);


    link.download =
    (mundoAtual.nome || "meu_mundo")+".json";


    link.click();



    document.getElementById("saveStatus").innerHTML =

    "💾 Mundo baixado no dispositivo!";

}





function loadWorld(){


    let input =
    document.createElement("input");


    input.type="file";


    input.accept=".json";



    input.onchange=function(event){


        let arquivo =
        event.target.files[0];



        let leitor =
        new FileReader();



        leitor.onload=function(){


            mundoAtual =
            JSON.parse(leitor.result);



            document.getElementById("saveStatus").innerHTML =

            "🌎 Mundo carregado com sucesso!";



        };



        leitor.readAsText(arquivo);


    };


    input.click();


}
