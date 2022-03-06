var nome_recebido = document.querySelector('#nome')
function login_validation() {
  var nomeres = 'murilopistore'
  if (nome_recebido != nomeres) {
    window.alert('Acesso negado')
  } else if (nome_recebido.value == nomeres) {
    window.location.href = '../Main/index.html'
  }
}
