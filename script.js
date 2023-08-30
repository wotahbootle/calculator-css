$(document).ready(function() {
    var primeiroCarregamento = true;
    $(".calc-botao.is-number, .calc-botao.is-zero").click(function() {
        var valorClick = $(this).text();

        if (primeiroCarregamento) {
            $("#result").val(valorClick);
            primeiroCarregamento = false;
        } else {
            var valorAtual = $("#result").val(); 
            var concatenar = valorAtual + valorClick;
            $("#result").val(concatenar);
        }
    });

    $(".calc-botao.is-clear").click(function() {
        $("#result").val("0");
        primeiroCarregamento = true;
    });

    $(".calc-botao.is-operator").click(function() {
        var operador = $(this).text();
        var valorAtual = $("#result").val();
        var expressao = valorAtual + " " + operador + " ";
        $("#result").val(expressao);
    });

    $(".calc-botao.is-equals").click(function() {
        var expressao = $("#result").val();
        expressao = expressao.replace(/−/g, "-");
        expressao = expressao.replace(/×/g, "*");
        expressao = expressao.replace(/÷/g, "/");
        var resultado = math.evaluate(expressao)
        $("#result").val(resultado);
    });
});