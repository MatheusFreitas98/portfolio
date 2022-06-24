// Area Contato
$(".hamburguer").click (() => 
    $(".container").toggleClass("show-menu")
)

$("#nome").click(checkTheBox)

function checkTheBox() {
    var nome = $("#nome").type
}

// Area Orcamento
var valor = $("#valor")[0]
var preco;

$("#quantidade").change(atualizarPreco)
$("#js").change(atualizarPreco)
function atualizarPreco() {
    const qtde = $("#quantidade").val()
    preco = qtde * 100
    var temJs = $("#js")[0].checked
    if (temJs) preco *= 1.1
    valor.innerHTML = preco.toFixed(2)
}