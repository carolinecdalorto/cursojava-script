function contar() {
    var ini = document.getElementById('txt1')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.ini.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    }
}