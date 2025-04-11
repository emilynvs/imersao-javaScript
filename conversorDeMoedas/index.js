let resultado = 1;

function conversor(){
    document.getElementById('converter').style.display='none';
    document.getElementById('resposta').style.display = 'block';
    document.getElementById('voltar').style.display = 'inline-block';

    euro = 6.14;
    won = 0.0040;
    dolar = 5.72;
    resultado;
  
    
    let valorMoeda = document.querySelector('#op');
    
    let moeda = valorMoeda.options[valorMoeda.selectedIndex].value;
    
    let valorDesejado = document.querySelector('.valor').value;
    
    let valorFloat = parseFloat(valorDesejado);
    if(moeda === 'won'){
      resultado = valorFloat * won;
    } else if(moeda === 'dolar'){
      resultado = valorFloat * dolar;
    } else if(moeda === 'euro'){
      resultado = valorFloat * euro;
    }
    resposta = "R$ " + resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    document.getElementById("resposta").innerText = resposta;
}

function voltar(){
    document.getElementById('resposta').style.display = 'none';
    document.getElementById('voltar').style.display = 'none';
    document.getElementById('converter').style.display = 'inline-block';
    
}
