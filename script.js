function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmLibraEsterlina = parseFloat(valor);
  var valorEmReal = valorEmLibraEsterlina * 7;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}