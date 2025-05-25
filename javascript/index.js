//produtos disponiveis para o cataogo
const produtos = {
    "Salgados": [
        ["Pizza Calabresa", "/img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Pizza Calabresa", "/img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Pizza Calabresa", "/img/pizza.png", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ],
    "Doces": [
        ["Bolo de chocolate", "/img/bolo.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Bolo de chocolate", "/img/bolo.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Bolo de chocolate", "/img/bolo.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ],
    "Bebidas": [
        ["Coca-Cola", "/img/coca.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Coca-Cola", "/img/coca.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
        ["Coca-Cola", "/img/coca.webp", "ipsum atsumLorem ipsum atsumLorem ipsum atsumLorem ipsum atsum."],
    ]
}

const area = document.getElementById('prdoutos_sessao') //Obtendo a area de produtos da loja

//Função para renderizar a area conforme o usuario quer filtrar
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


//Obter o quer o usuario quer e renderizar o filtro
function selecionar_produto(event){
    let categoria = event.target.dataset.value
    renderizar_produto(categoria)
}


//ANIMAÇÃO 
// Cria um novo observador que detecta quando elementos entram ou saem da tela
const observer = new IntersectionObserver((entries) => {

  // Para cada elemento que está sendo observado e sofreu mudança de visibilidade
  entries.forEach(entry => {

    // Verifica se o elemento está visível na tela (dentro da área do navegador)
    if (entry.isIntersecting) {
      // Se estiver visível, adiciona a classe 'visible' (ativa a animação no CSS)
      entry.target.classList.add('visible');
    } else {
      // Se sair da tela, remove a classe (isso permite a animação ao voltar)
      entry.target.classList.remove('visible');
    }

  });

}, {
  // threshold: define quanto do elemento precisa estar visível para ser considerado "na tela"
  threshold: 0.2 // Aqui, 20% do elemento visível já é suficiente
});


function chamar_animacao(){
    // Seleciona todos os elementos com a classe 'fade-section'
    document.querySelectorAll('.fade-section').forEach(section => {
    // Pede para o observer "observar" cada uma dessas sections
    observer.observe(section);
    });

}

chamar_animacao()