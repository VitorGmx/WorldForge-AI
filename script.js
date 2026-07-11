let etapaAtual = 0;


const janelas = document.querySelectorAll(".window");
const etapas = document.querySelectorAll(".step");



let universo = {

    nome:"",
    tipo:"",
    magia:"",
    racas:[],
    reinos:[],
    magias:[],
    criaturas:[]

};





function mostrarEtapa(numero){


    janelas.forEach((janela,index)=>{

        janela.classList.remove("active");


        if(index === numero){

            janela.classList.add("active");

        }

    });



    etapas.forEach((etapa,index)=>{


        etapa.classList.remove("active");


        if(index === numero){

            etapa.classList.add("active");

        }

    });


}





document.querySelectorAll(".next").forEach(botao=>{


    botao.addEventListener("click",()=>{


        salvarDados();


        if(etapaAtual < janelas.length-1){

            etapaAtual++;

            mostrarEtapa(etapaAtual);

        }


        if(etapaAtual === janelas.length-1){

            gerarResumo();

        }


    });


});







document.querySelectorAll(".back").forEach(botao=>{


    botao.addEventListener("click",()=>{


        if(etapaAtual > 0){

            etapaAtual--;

            mostrarEtapa(etapaAtual);

        }


    });


});








function salvarDados(){



    universo.nome =

    document.getElementById("worldName").value;



    universo.tipo =

    document.getElementById("worldType").value;



    universo.magia =

    document.getElementById("magicLevel").value;



}








/* CRIADORES */


const botaoRaca = document.querySelectorAll(".window")[1].querySelector("button");


botaoRaca.addEventListener("click",()=>{


    let raca = prompt(
        "Nome da raça:"
    );


    if(raca){

        universo.racas.push(raca);

        atualizarListas();

    }


});






const botaoReino = document.querySelectorAll(".window")[2].querySelector("button");


botaoReino.addEventListener("click",()=>{


    let reino = prompt(
        "Nome do reino:"
    );


    if(reino){

        universo.reinos.push(reino);

        atualizarListas();

    }


});








const botaoMagia = document.querySelectorAll(".window")[3].querySelector("button");


botaoMagia.addEventListener("click",()=>{


    let magia = prompt(
        "Nome do sistema mágico:"
    );


    if(magia){

        universo.magias.push(magia);

        atualizarListas();

    }


});








const botaoCriatura = document.querySelectorAll(".window")[4].querySelector("button");


botaoCriatura.addEventListener("click",()=>{


    let criatura = prompt(
        "Nome da criatura:"
    );


    if(criatura){

        universo.criaturas.push(criatura);

        atualizarListas();

    }


});









function atualizarListas(){



    document.querySelectorAll(".list")[0].innerHTML =

    universo.racas.length ?

    universo.racas.join("<br>") :

    "Nenhuma raça criada";





    document.querySelectorAll(".list")[1].innerHTML =

    universo.reinos.length ?

    universo.reinos.join("<br>") :

    "Nenhum reino criado";






    document.querySelectorAll(".list")[2].innerHTML =

    universo.magias.length ?

    universo.magias.join("<br>") :

    "Nenhuma magia criada";







    document.querySelectorAll(".list")[3].innerHTML =

    universo.criaturas.length ?

    universo.criaturas.join("<br>") :

    "Nenhuma criatura criada";



}









function gerarResumo(){



    document.getElementById("summary").innerHTML =


    `

    🌎 <b>${universo.nome || "Mundo sem nome"}</b>


    <br><br>


    Tipo:

    ${universo.tipo}


    <br>


    Nível mágico:

    ${universo.magia}



    <br><br>


    🧬 Raças:

    <br>

    ${universo.racas.join("<br>") || "Nenhuma"}



    <br><br>


    🏰 Reinos:

    <br>

    ${universo.reinos.join("<br>") || "Nenhum"}



    <br><br>


    🔮 Magias:

    <br>

    ${universo.magias.join("<br>") || "Nenhuma"}



    <br><br>


    🐉 Criaturas:

    <br>

    ${universo.criaturas.join("<br>") || "Nenhuma"}



    `;


}
