document.querySelector('.hamburguer').addEventListener('click', () => 
    document.querySelector('.container').classList.toggle('show-menu')
)

document.querySelector('#nome').addEventListener('click', checkTheBox)

function checkTheBox() {
    var nome = document.getElementById('nome').type
}


console.log(nome)