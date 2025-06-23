let contagem = 0 
const botao = document.getElementById('botao')
const contadorTexto = document.getElementById('contador')

botao.addEventListener('click', ()=>{
    contagem++; // incrementa a variavel 
    contadorTexto.textContent = contagem; // atualiza o texto HTML
});