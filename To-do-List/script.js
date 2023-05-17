let elementBody = document.querySelector("body");//variavel criada para capturar o body do html
let capturarTexto = ""; //variavel criada para capturar o texto do input

let text1 = document.createElement("div");//variavel div
text1.id = "funcionamento";//adicionando o id na div
text1.innerText = "Clique duas vezes em um item para marcá-lo como completo";//adicionando texto na variavel
elementBody.appendChild(text1);//colocando como filho do body

let secondDiv = document.createElement("div");//criando outra div
elementBody.appendChild(secondDiv);// adicionando como filho do body

let oneInput = document.createElement("input");// criando o input que é onde o texto vai ser digitado
oneInput.id = "texto-tarefa";// adicionando id ao input
oneInput.innerText = ""; //input comecar sem nada dentro
secondDiv.appendChild(oneInput);// adicionando como filho da segunda div

let firstButton = document.createElement("button");//criando o botao de adicionar na lista
firstButton.id = "criar-tarefa";//criando id do botao
secondDiv.appendChild(firstButton);// adicionando como filho da segunda div
firstButton.innerText = "Adicionar";//escrever dentro do botao
firstButton.addEventListener("click", addItem);//adicionando acao ao clicar no botao


let oneList = document.createElement("ol");//criando a oL
oneList.id = "lista-tarefas";//adicionando id a ol
elementBody.appendChild(oneList);//colocando como filho do body
oneList.addEventListener("click", pintarBack);
oneList.addEventListener("dblclick", riscarItem);
oneList.classList.add("cor-back");


let thirdDiv = document.createElement("div");
elementBody.appendChild(thirdDiv);

let clearButton = document.createElement("button");
clearButton.id = "apaga-tudo";
thirdDiv.appendChild(clearButton);
clearButton.innerText = "Apagar";
clearButton.addEventListener("click", apagarTudo);

let finalButton = document.createElement("button");
finalButton.id = "remover-finalizados";
thirdDiv.appendChild(finalButton);
finalButton.innerText = "Finalizados";
finalButton.addEventListener("click", removerFinalizados);



function addItem (event){ // funcao que faz adicionar o texto do input em uma OL
    event.preventDefault();//evento para nao bugar a pagina no carregamento

    capturarTexto = document.querySelector("#texto-tarefa").value;//adicionando a variavel o texto que esta no input

    let itemList = document.createElement("li"); // criando as LIS da OL
    oneList.appendChild(itemList);

    itemList.innerText = capturarTexto; // colocando dentro da item list o valor de input

    oneInput.value = ""; // depois do clique a area do input do texto fica sem nada

}


function pintarBack (event){


let currentLi = event.target;
let colorSelected = document.getElementsByClassName("selected")[0];
event.target.classList.add ("selected");
if(colorSelected != undefined){
    colorSelected.classList.remove("selected");
}

}

function riscarItem(event){
    // let removerRisco = event.target.className = "completed"
    // let listaRisk = document.querySelector("li");
    // console.log("rstrin");
    // event.target.classList.add("completed");


    // console.log(event.target.classList.contains("completed"));

    if (event.target.classList.contains("completed")){
       
         event.target.classList.remove("completed");
    
    }else{
        event.target.classList.add("completed");
    }
      }


function apagarTudo(event){
    oneList.innerHTML = "";
}

  
function removerFinalizados(event){
    let oneList = document.querySelectorAll("li"); 
    console.log(oneList);
    
    for(let i = 0; i < oneList.length; i += 1 ){
    
    if (oneList[i].classList.contains("completed"))
    {
        oneList[i].remove();
    }
}
}
