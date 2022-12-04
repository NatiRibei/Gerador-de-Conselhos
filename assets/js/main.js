const titulo = document.getElementById('adviceTitle');
const texto = document.getElementById('adviceText');



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
    let conselhoTexto = conselhopronto.slip.advice;
    //armazena o ID do conselho em conselhoID
    let conselhoID = conselhopronto.slip.id;
    console.log(conselhoTexto);
    
    //document.getElementById('adviceText') = conselhoTexto;
    //textoConselho.appendChild(conselhoTexto);
    //titulo.textContent = conselhoTexto;
}

main();
