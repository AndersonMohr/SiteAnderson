const enviar = document.querySelector("#btnenviar")

if(enviar){
    enviar.addEventListener("click", () =>{
        alert("Mensagem enviada! O envio é fake kk")
    });
}

const projeto = document.querySelector("#botao")
if(projeto){
    projeto.addEventListener("click", () =>{
        alert("Mensagem do projeto!")
    });
}
