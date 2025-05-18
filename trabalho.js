function geradorDeTagsDeIdentificacao (nome) {
  let nomeTag = nome.toUpperCase()        
  return nomeTag
}

function verificarSePodeSerAdotado(numero, porte) {   
  if (numero == 1 && porte == 'M'){                 
    return true
  } else {
    return false
  }
}

function calcularConsumoDeRacao(nomeDog, quantidadeDias, peso) {
  const quantidadePorKilo = 4350 / 14.5 //Regra de 3 pra descobrir a quantidade de gramas para 1 kg | Valor constante para não variar conforme o peso recebido nos parâmetros
  let quantidadeRacaoPorDia = (quantidadePorKilo * peso) * quantidadeDias

  return quantidadeRacaoPorDia
}

function decidirTipoDeAtividadePorPorte(porte) {     
  switch (porte) {
    case 'pequeno': 
       return 'brincar dentro de casa'
       break;
      
    case 'médio': 
       return 'brincar trancado no muro'
       break;
      
    case 'grande': 
      return 'passear na praça com o dono'
      break;

    default: 
      return 'O dono decidirá a brincadeira para este tipo de porte'
      break;
    }
}

function buscarDadoAsync() {
    
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
  }