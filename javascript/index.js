function selecionar_produto(event){
    let categoria = event.target.dataset.value
    renderizar_produto(categoria)
}

const produtos = {
    "Salgados": [
        ["Pizza Calabresa", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Pizza Calabresa", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Pizza Calabresa", "../img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ],
    "Doces": [
        ["Bolo de chocolate", "../img/bolo.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Bolo de chocolate", "../img/bolo.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Bolo de chocolate", "../img/bolo.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ],
    "Bebidas": [
        ["Coca-Cola", "../img/coca.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Coca-Cola", "../img/coca.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Coca-Cola", "../img/coca.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ]
}


//Testando
// console.log(produtos["Salgados"][1][0])

//     produtos['Salgados'].forEach(element => {
//         console.log(element)
//     });

const area = document.getElementById('prdoutos_sessao')
function renderizar_produto(product) {
    area.innerHTML = "";
    produtos[product].forEach(element => {
        area.innerHTML += 
        `
            <div class="produto">
                <img src="${element[1]}" alt="">
                <h3>${element[0]}</h3>
                <p>${element[2]}</p>
            </div>
        
        `
        console.log(element)
    });

}
