
function atualizeContagem(){
    const agora = new Date();
    const FimDoAno = new Date(agora.getFullYear() + 1, 0, 1);
    const tempoRestante = FimDoAno - agora;

    console.log(tempoRestante);

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % ( 1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor ((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias.toString().padStart(2, '0') + ' dias';
    document.getElementById('horas').textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

atualizeContagem();
setInterval(atualizeContagem, 1000);