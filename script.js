// ======================================
// WORLD FORGE AI
// SISTEMA PRINCIPAL
// ======================================


// Controle das páginas

let paginaAtual = 0;


const paginas = document.querySelectorAll(".panel");

const fases = document.querySelectorAll(".phase");



// Banco de dados do universo

let universo = {

    nome:"",
    titulo:"",
    tipo:"",
    era:"",
    descricao:"",

    racas:[],
    reinos:[],
    magias:[],
    criaturas:[]

};




// ======================================
// NAVEGAÇÃO ENTRE JANELAS
// ======================================


function mostrarPagina(numero){


    paginas.forEach((pagina,index)=>{


        pagina.classList.remove("active");


        if(index === numero){

            pagina.classList.add("active");

        }


    });



    fases.forEach((fase,index)=>{


        fase.classList.remove("active");


        if(index === numero){

            fase.classList.add("active");

        }


    });



}




document.querySelectorAll(".next")
.forEach(botao=>{


botao.onclick=function(){


    salvarMundoBase();



    if(paginaAtual < paginas.length-1){


        paginaAtual++;

        mostrarPagina(paginaAtual);


    }


    if(paginaAtual === paginas.length-1){

        gerarResumo();

    }


};


});





document.querySelectorAll(".back")
.forEach(botao=>{


botao.onclick=function(){


    if(paginaAtual > 0){

        paginaAtual--;

        mostrarPagina(paginaAtual);

    }


};


});








// ======================================
// SALVAR INFORMAÇÕES DO MUNDO
// ======================================


function salvarMundoBase(){


universo.nome =
document.getElementById("worldName").value;


universo.titulo =
document.getElementById("worldTitle").value;


universo.tipo =
document.getElementById("worldType").value;


universo.era =
document.getElementById("worldEra").value;


universo.descricao =
document.getElementById("worldDescription").value;



}










// ======================================
// CRIAR RAÇAS
// ======================================


document
.getElementById("addRace")
.onclick=function(){


let raca={


nome:
document.getElementById("raceName").value,


origem:
document.getElementById("raceOrigin").value,


aparencia:
document.getElementById("raceAppearance").value,


cultura:
document.getElementById("raceCulture").value,


poder:
document.getElementById("racePower").value



};



if(raca.nome===""){

alert("Digite um nome para a raça");

return;

}



universo.racas.push(raca);


mostrarRacas();


};





function mostrarRacas(){


let area =
document.getElementById("raceList");


area.innerHTML="";



universo.racas.forEach((raca,index)=>{


area.innerHTML +=

`

<h3>🧬 ${raca.nome}</h3>

Origem:
${raca.origem}

<br>

Aparência:
${raca.aparencia}

<br>

Cultura:
${raca.cultura}

<br>

Poder:
${raca.poder}

<hr>

`;


});


}









// ======================================
// CRIAR REINOS
// ======================================



document
.getElementById("addKingdom")
.onclick=function(){



let reino={


nome:
document.getElementById("kingdomName").value,


governo:
document.getElementById("government").value,


cultura:
document.getElementById("kingdomCulture").value



};



if(reino.nome===""){

alert("Digite o nome do reino");

return;

}




universo.reinos.push(reino);



mostrarReinos();



};






function mostrarReinos(){


let area =
document.getElementById("kingdomList");


area.innerHTML="";


universo.reinos.forEach(reino=>{


area.innerHTML +=


`

<h3>🏰 ${reino.nome}</h3>

Governo:
${reino.governo}

<br>

Ideologia:
${reino.cultura}

<hr>

`;


});


}









// ======================================
// CRIAR MAGIA
// ======================================


document
.getElementById("addMagic")
.onclick=function(){



let magia={


nome:
document.getElementById("magicName").value,


origem:
document.getElementById("magicOrigin").value,


regra:
document.getElementById("magicRule").value



};



if(magia.nome===""){

alert("Digite o nome da magia");

return;

}



universo.magias.push(magia);



mostrarMagias();


};






function mostrarMagias(){


let area =
document.getElementById("magicList");


area.innerHTML="";


universo.magias.forEach(magia=>{


area.innerHTML +=


`

<h3>🔮 ${magia.nome}</h3>

Origem:
${magia.origem}

<br>

Regra:
${magia.regra}

<hr>

`;


});


}









// ======================================
// CRIAR CRIATURAS
// ======================================



document
.getElementById("addCreature")
.onclick=function(){



let criatura={


nome:
document.getElementById("creatureName").value,


categoria:
document.getElementById("creatureType").value,


poder:
document.getElementById("creaturePower").value


};



if(criatura.nome===""){

alert("Digite o nome da criatura");

return;

}



universo.criaturas.push(criatura);



mostrarCriaturas();


};







function mostrarCriaturas(){


let area =
document.getElementById("creatureList");


area.innerHTML="";


universo.criaturas.forEach(criatura=>{


area.innerHTML +=


`

<h3>🐉 ${criatura.nome}</h3>

Categoria:
${criatura.categoria}

<br>

Poder:
${criatura.poder}

<hr>

`;


});


}









// ======================================
// RESUMO FINAL
// ======================================



function gerarResumo(){


document.getElementById("summary").innerHTML=


`

<h2>${universo.nome}</h2>

<b>${universo.titulo}</b>


<br><br>


🌎 Tipo:

${universo.tipo}


<br>

⌛ Era:

${universo.era}


<br><br>


📜 Descrição:

<br>

${universo.descricao}



<h3>🧬 Raças</h3>

${universo.racas.map(r=>r.nome).join("<br>") || "Nenhuma"}



<h3>🏰 Reinos</h3>

${universo.reinos.map(r=>r.nome).join("<br>") || "Nenhum"}



<h3>🔮 Magias</h3>

${universo.magias.map(m=>m.nome).join("<br>") || "Nenhuma"}



<h3>🐉 Criaturas</h3>

${universo.criaturas.map(c=>c.nome).join("<br>") || "Nenhuma"}


`;

}









// ======================================
// EXPORTAR UNIVERSO
// ======================================



document
.getElementById("export")
.onclick=function(){


let arquivo = new Blob(

[
JSON.stringify(
universo,
null,
4
)
],

{
type:"application/json"
}

);



let link=document.createElement("a");


link.href=
URL.createObjectURL(arquivo);


link.download=
(universo.nome || "universo")+".json";


link.click();


};
