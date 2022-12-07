const titulo = document.querySelector(".adviceTitle");
const texto = document.querySelector("blockquote");
const adviceButton = document.querySelector("button");
let textoTela;
console.log(adviceButton);
adviceButton.addEventListener("click", main);

window.onload = () => {
  main();
};


// função que consome a API
function fazGet (url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;

}

/*function mostrarConselho(conselhoTexto, conselhoID){
    let element = document.querySelector(".adviceTitle");
    element.appendChild("Advice #"+ conselhoID);
}*/

function main(){
    //consome a API e armazena na variável conselho
    let conselho = fazGet("https://api.adviceslip.com/advice");
    //transforma o conteúdo JSON em JavaScript e armazena na variavel conselhopronto
    let conselhopronto = JSON.parse(conselho);
    console.log(conselhopronto);
    //armazena o texto do conselho em conselhoTexto
    let conselhos = conselhopronto.slip;
    //armazena o ID do conselho em conselhoID
    let conselhoTexto = conselhos.advice;
    let conselhoID = conselhos.id;
    console.log(conselhos.advice);
    texto.innerHTML = `"${conselhoTexto}"`;
    titulo.innerHTML = "Advice "+`#${conselhoID}`;
    
  

    console.log(texto);

    
    //document.getElementById('adviceText') = conselhoTexto;
    //textoConselho.appendChild(conselhoTexto);
    //titulo.textContent = conselhoTexto;
}
/*criar o botão e uma função de clique para que quando clicar no botão, atribuir
o texto e o ID do conselho armazenados para os elementos HTML */

main();