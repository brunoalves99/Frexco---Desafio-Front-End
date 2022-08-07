const FormatBrl = (valor) => {
     return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL' 
      })
}

export default FormatBrl