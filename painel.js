const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0

setaAvancar.addEventListener("click", () => {
if(imagemAtual === imagens.length -1){
    return
}




esconderImagemAtual();

imagemAtual++
imagens[imagemAtual].classList.add("mostrar")


})

setaVoltar.addEventListener("click", () => {

    if(imagemAtual === 0){
        return
    }



    esconderImagemAtual();

    imagemAtual--
    imagens[imagemAtual].classList.add("mostrar")

    mostrarOuEsconderSetas();

})

function esconderImagemAtual(){
    const imagemAtual = document.querySelector(".mostrar");

    imagemAtual.classList.remove("mostrar")
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove('opacidade')
    }
    else{
        setaVoltar.classList.add('opacidade')

    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1;
    if(chegouNaUltimaImagem){
        setaAvancar.classList.add('.opacidade');
    }
    else{
        setaAvancar.classList.remove('.opacidade');

    }
}