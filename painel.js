const imagem = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0


setaAvancar.addEventListener("click", () => {
    if(imagemAtual === imagem.length -1){
        return
    }





imagemAtual++

proximaImagemEsconder();
        mostrarImagem();
  sumirOuEsconderSeta();


    
})

setaVoltar.addEventListener("click", () => {
    if(imagemAtual === 0){
        return
    }



        
        imagemAtual--
    

        proximaImagemEsconder();
        mostrarImagem();
        sumirOuEsconderSeta();
    

})

function mostrarImagem() {
    imagem[imagemAtual].classList.add("mostrar");
}

function proximaImagemEsconder(){
    const imagemEsconder = document.querySelector(".mostrar")
    imagemEsconder.classList.remove("mostrar")

}

function sumirOuEsconderSeta(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade");
    }
    else{
        setaVoltar.classList.add("opacidade");

    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagem.length -1
    if(chegouNaUltimaImagem){
        setaAvancar.classList.add("opacidade");
    }
    else{
        setaAvancar.classList.remove("opacidade");

    }


}