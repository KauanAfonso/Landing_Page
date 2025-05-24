function teste(event){
    alert(event.target.dataset.value)
    alert("hello")
}

const produtos = {
    "Salgados": [
        ["Pizza Calabresa", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Pizza Calabresa", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Pizza Calabresa", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ],
    "Doces": [
        ["Bolo de chocolate", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Bolo de chocolate", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Bolo de chocolate", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ],
    "Bebidas": [
        ["Coca-Cola", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Coca-Cola", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Coca-Cola", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ]
}

console.log(produtos["Salgados"][1][0])


function renderizar_produto(params) {
    
}
