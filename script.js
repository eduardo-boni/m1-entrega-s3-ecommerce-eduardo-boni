const arrayProdutos = []
const arrcarrinho = []
const prego = []
const produtos = document.querySelector(".produtos")
const vazio = document.querySelector(".vazio")
const carrinho = document.querySelector(".carrinho")
const aside = document.querySelector("aside")
const Cards = [

    {
        nome: "Lightweight Jacket",
        preco: 100.00,
        categoria: "Camisetas",
        descricao: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        url: "img/Men-Jacket-Front-Black__15466 1.svg",
        
    },
    {
        nome: "Black Hat",
        preco: 100,
        categoria: "Acessórios",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        url: "img/image 1.svg",
    },
    {
        nome: "Mask",
        preco:  40.00,
        categoria: "Acessórios",
        descricao: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        url: "img/Surgical-Mask-Black__89554 1.svg",
    },
    {
        nome: "T-Shirt",
        preco: 100.00,
        categoria: "Camisetas",
        descricao: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        url: "img/Men-TShirt-Black-Front__70046 1.svg",
    },
    {
        nome: "Short-Sleeve T-Shirt",
        preco: 100.00,
        categoria: "Camisetas",
        descricao: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        url: "img/mockup-a0dc2330__62146 1.svg",
    },
    {
        nome: "Champion Packable Jacket",
        preco: 100.00,
        categoria: "Camisetas",
        descricao: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        url: "img/mockup-9b9894f1__67347 1.svg",
    }

]
function criarPadrao(){
    carrinho.innerHTML = 
    `<div class="conteudoCarrinho">
        <h3>Carrinho Vázio</h3>
        <p class="addCarrinho">Adicionar itens</p>
    </div>`;
    
}
criarPadrao()
const carrinhoPadrao = document.querySelector(".conteudoCarrinho")

function criarCard(){
    vazio.remove()
    for(let i = 0; i < Cards.length; i++){
    const card = document.createElement("div")
    const img = document.createElement("img")
    const sobreCard = document.createElement("div")
    const categoria = document.createElement("p")
    const nome = document.createElement("p")
    const produtoConteudo = document.createElement("p")
    const produtoPreco = document.createElement("span")
    const addCar = document.createElement("input")

    card.className = "card"
    img.src = Cards[i].url
    img.alt = Cards[i].nome
    sobreCard.className = "sobreCard"
    categoria.className = "categoria"
    categoria.innerText = Cards[i].categoria
    nome.className = "nome"
    nome.innerText = Cards[i].nome
    produtoConteudo.className = "produto-conteudo"
    produtoConteudo.innerText = Cards[i].descricao
    produtoPreco.className = "produto-preco"
    produtoPreco.innerText = `R$ ${Cards[i].preco.toFixed(2)}`
    addCar.type = "button"
    addCar.value = "Adicionar ao carrinho"
    addCar.className = "addCar"

    sobreCard.appendChild(categoria)
    sobreCard.appendChild(nome)
    sobreCard.appendChild(produtoConteudo)
    sobreCard.appendChild(produtoPreco)
    sobreCard.appendChild(addCar)
    card.appendChild(img)
    card.appendChild(sobreCard)
    produtos.appendChild(card)

    arrayProdutos.push(produtos)
    }
    
}
criarCard()
//Carrinho

let value = 0
produtos.addEventListener('click', addCarrinho)
function addCarrinho(add){
    const addCar = add.target;
    const card = addCar.parentElement
    const armazenadorNome = card.children[1].textContent
    if(addCar.className === 'addCar'){
        if(arrcarrinho.length == 0){
            const carrinhoPadrao = document.querySelector(".conteudoCarrinho")
            carrinhoPadrao.remove()
            valorBarr()
        } 
    } 
    for(i = 0; i < Cards.length; i++){
        if(armazenadorNome === Cards[i].nome){
            const card = document.createElement("section")
            card.className = "card"
            const carrinhoImg = document.createElement("div")
            carrinhoImg.className = "carrinhoImg"
            const img = document.createElement("img")
            img.src = Cards[i].url
            img.alt = Cards[i].nome
            const sobreCard = document.createElement("div")
            sobreCard.className = "sobreCard"
            const tituloProduto = document.createElement("p")
            tituloProduto.className = "titulo-produto"
            tituloProduto.innerText = Cards[i].nome
            const valor = document.createElement("span")
            valor.className = "produto-preco"
            valor.innerText = `R$ ${Cards[i].preco.toFixed(2)}`
            const botao = document.createElement("input")
            botao.type = "button"
            botao.value = "Remover Produto"


            sobreCard.appendChild(tituloProduto)
            sobreCard.appendChild(valor)
            sobreCard.appendChild(botao)
            carrinhoImg.appendChild(img)
            card.appendChild(carrinhoImg)
            card.appendChild(sobreCard)
            carrinho.appendChild(card)
            arrcarrinho.push(Cards[i].nome)
            prego.push(Cards[i].preco)
            value = 0
            for(let i = 0; i< prego.length ;i++){
                console.log(prego[i])
                value += prego[i]
            }
            valorBarr(value)
        }
    } 
}
carrinho.addEventListener('click', rmvCarrinhoButton)
function rmvCarrinhoButton(rmv){
    /*console.log(carrinho[0])
    carrinho.filter((produto)=> produto !== rmvCar)
    console.log(carrinho)*/
    const rmvCar = rmv.target/*.closest("section")*/
    const card = rmvCar.parentElement
    const cardtotal = card.parentElement
    const armazenadorNome = card.children[0].textContent
    
    if(rmvCar.tagName == 'INPUT'){
        for(let i = 0; i < arrcarrinho.length; i++){

            if(armazenadorNome === arrcarrinho[i]){
                cardtotal.remove()
                arrcarrinho.splice(i, 1)
                prego.splice(i,1)
                value = 0
                for(let i = 0; i< prego.length ;i++){

                    value += prego[i]
                }
                valorBarr(value)
            }   
        }
    }
    if(arrcarrinho.length == 0){
        const  total = document.querySelector(".total")
        total.remove()
        criarPadrao()
    }
}
const total = document.createElement("div")
function valorBarr(value){
    total.innerHTML = "" 
    total.className = "total"
    const spanV = document.createElement("span")
    spanV.innerText = "R$ " + value
    const pV = document.createElement("p")
    pV.innerText = "Total:"
    const valorT = document.createElement("div")
    valorT.className = "valorTotal"
    const spanQ = document.createElement("span")
    spanQ.innerText = prego.length
    const pQ = document.createElement("p")
    pQ.innerText = "Quantidade:"
    const quantidade = document.createElement("div")
    quantidade.className = "quantidade"
    
    quantidade.appendChild(pQ)
    quantidade.appendChild(spanQ)
    valorT.appendChild(pV)
    valorT.appendChild(spanV)
    total.appendChild(quantidade)
    total.appendChild(valorT)
    aside.appendChild(total)
}