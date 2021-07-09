const submeterFormulario = () => {
    const rangeinicial = document.getElementById('rangeinicial').value;
    const rangefinal = document.getElementById('rangefinal').value;
    const minhaAposta = document.getElementById('minhaaposta').value;

    realizarSorteio(+rangeinicial, +rangefinal, +minhaAposta);
}

const realizarSorteio = (rangeinicial, rangefinal, minhaAposta) => {

    if (!rangeinicial) {
        alert('Informe o range inicial!');
        return;
    }


    if (!rangefinal) {
        alert('Informe o range final!');
        return;
    }


    if (!minhaAposta) {
        alert('Informe a minha aposta!');       
        return;
    }


    const numeroSorteado = novoSorteio(rangeinicial, rangefinal);
    if (numeroSorteado === minhaAposta) {

        alert ('Parabens voce acertou')
        return;
    }

    alert(`Errou, o numero sorteado foi ${numeroSorteado}` ); 
}

const novoSorteio = (rangeinicial, rangefinal) => {
    return (Math.floor(Math.random() * (rangefinal - rangeinicial + 1)) + rangeinicial);
}
    
