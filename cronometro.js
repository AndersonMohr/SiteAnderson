window.onload = function(){
//permite a execução de código JavaScript no momento exato em que a página é carregada completamente.
//todo código javaScript aqui pra baixo

const projeto = document.querySelector("#botao1")
if(projeto){
    projeto.addEventListener("click", () =>{
        alert("Mensagem do cronometro!")
    });
}

var segundos = '00';
var milesimos = '00';
var acrecentarSegundos = document.getElementById("segundos")
var acresentarMilesimos = document.getElementById("milesimos")
var botaoIniciar = document.getElementById('btn-iniciar');
var botaoParar = document.getElementById('btn-parar');
var botaoReiniciar = document.getElementById('btn-reiniciar');
var Intervalo;

botaoIniciar.onclick = function(){
    clearInterval(Intervalo);
    Intervalo = setInterval(startTimer, 10);
}

botaoParar.onclick = function(){
    clearInterval(Intervalo);
}

botaoReiniciar.onclick = function(){
    clearInterval(Intervalo);
    milesimos = "00";
    segundos = "00";
    acrecentarSegundos.innerHTML = milesimos; //innerHTML é pra adicionar um novo conteudo 
    acresentarMilesimos.innerHTML = segundos;
}

function startTimer (){
    milesimos++;

   // if(milesimos <=9){
  //      acresentarMilesimos = "0" + milesimos;
  //  }

    if(milesimos > 9){
        acresentarMilesimos.innerHTML = milesimos;
    }

    if(milesimos > 99){
        console.log("segundos");
        segundos++;
        acrecentarSegundos.innerHTML = "0" + segundos;
        milesimos = 0;
        acresentarMilesimos.innerHTML = "0" + 1;
       
    }

    if(segundos > 9){
        acrecentarSegundos.innerHTML = segundos;
    }

}


}