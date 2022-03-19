const arrayVitrine = []
const arrayCarrinho = []
const preco = []
const vitrine = document.querySelector(".vitrine")
const nada = document.querySelector(".nada")
const carrinho = document.querySelector(".carrinho")
const aside = document.querySelector("aside")
const listaDeCards = [

{
    nome: "Lightweight Jacket",
    preco: 100,
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
    preco:  40,
    categoria: "Acessórios",
    descricao: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    url: "img/Surgical-Mask-Black__89554 1.svg",
},
{
    nome: "T-Shirt",
    preco: 100,
    categoria: "Camisetas",
    descricao: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    url: "img/Men-TShirt-Black-Front__70046 1.svg",
},
{
    nome: "Short-Sleeve T-Shirt",
    preco: 100,
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
        <h3>Carrinho Vazio</h3>
        <p class="addCarrinho">Adicionar item</p>
    </div>`;
    
}
criarPadrao()
const carrinhoPadrao = document.querySelector(".conteudoCarrinho")

function produtosListar(){
    nada.remove()

    for(let i = 0; i < listaDeCards.length; i++){

    const iten = document.createElement("div")
    const img = document.createElement("img")
    const sobreIten = document.createElement("div")
    const categoria = document.createElement("p")
    const nome = document.createElement("p")
    const descricaoProduto = document.createElement("p")
    const valorProduto = document.createElement("span")
    const addCarrinho = document.createElement("input")

    iten.className = "iten"
    img.src = listaDeCards[i].url
    img.alt = listaDeCards[i].nome
    sobreIten.className = "sobreIten"
    categoria.className = "categoria"
    categoria.innerText = listaDeCards[i].categoria
    nome.className = "nome"
    nome.innerText = listaDeCards[i].nome
    descricaoProduto.className = "descricaoProduto"
    descricaoProduto.innerText = listaDeCards[i].descricao
    valorProduto.className = "valorProduto"
    valorProduto.innerText = `R$ ${listaDeCards[i].preco.toFixed(2)}`
    addCarrinho.type = "button"
    addCarrinho.value = "Adicionar ao carrinho"
    addCarrinho.className = "addCarrinho"

    sobreIten.appendChild(categoria)
    sobreIten.appendChild(nome)
    sobreIten.appendChild(descricaoProduto)
    sobreIten.appendChild(valorProduto)
    sobreIten.appendChild(addCarrinho)
    iten.appendChild(img)
    iten.appendChild(sobreIten)
    vitrine.appendChild(iten)

    arrayVitrine.push(vitrine)
    }
    
}
produtosListar()

//Carrinho

let value = 0
vitrine.addEventListener('click', carrinhoAdicionar)

function carrinhoAdicionar(add){
    const addCar = add.target;
    const card = addCar.parentElement
    const armazenadorNome = card.children[1].textContent
    if(addCar.className === 'addCar'){
        if(arrayCarrinho.length === 0){
            const carrinhoPadrao = document.querySelector(".conteudoCarrinho")
            carrinhoPadrao.remove()
            valorBarr()
        } 
    } 
    for(let i = 0; i < listaDeCards.length; i++){
        if(armazenadorNome === listaDeCards[i].nome){
            const iten = document.createElement("section")
            iten.className = "iten"
            const carrinhoImg = document.createElement("div")
            carrinhoImg.className = "carrinhoImg"
            const img = document.createElement("img")
            img.src = listaDeCards[i].url
            img.alt = listaDeCards[i].nome
            const sobreItem = document.createElement("div")
            sobreItem.className = "sobreItem"
            const nomeDoItem = document.createElement("p")
            nomeDoItem.className = "nomeDoItem"
            nomeDoItem.innerText = listaDeCards[i].nome
            const valor = document.createElement("span")
            valor.className = "valorProduto"
            valor.innerText = `R$ ${listaDeCards[i].preco.toFixed(2)}`
            const botao = document.createElement("input")
            botao.type = "button"
            botao.value = "Remover Produto"

            sobreItem.appendChild(nomeDoItem)
            sobreItem.appendChild(valor)
            sobreItem.appendChild(botao)
            carrinhoImg.appendChild(img)
            iten.appendChild(carrinhoImg)
            iten.appendChild(sobreItem)
            carrinho.appendChild(iten)
            arrayCarrinho.push(listaDeCards[i].nome)
            preco.push(listaDeCards[i].preco)
            value = 0
            for(let i = 0; i< preco.length ;i++){
                console.log(preco[i])
                value += preco[i]
            }
            valorBarr(value)
        }
    } 
}
carrinho.addEventListener('click', carrinhoExcluir)
function carrinhoExcluir(remover){
    /*console.log(carrinho[0])
    carrinho.filter((produto)=> produto !== removeCar)
    console.log(carrinho)*/
    const removeCar = remover.target/*.closest("section")*/
    const card = removeCar.parentElement
    const cardtotal = card.parentElement
    const armazenadorNome = card.children[0].textContent
    
    if(removeCar.tagName == 'INPUT'){
        for(let i = 0; i < arrayCarrinho.length; i++){
            if(armazenadorNome === arrayCarrinho[i]){
                cardtotal.remove()
                arrayCarrinho.splice(i, 1)
                preco.splice(i,1)
                value = 0
                for(let i = 0; i < preco.length; i++){

                    value += preco[i]
                }
                valorBarr(value)
            }   
        } 
    }
    if(arrayCarrinho.length == 0){
        const  total = document.querySelector(".total")
        total.remove()
        criarPadrao()
    }
}
const total = document.createElement("div")
function valorBarr(value){
    total.innerHTML = "" 
    total.className = "total"
    const spanValor = document.createElement("span")
    spanValor.innerText = "R$ " + value
    const precoProduto = document.createElement("p")
    precoProduto.innerText = "Total:"
    const valorTotal = document.createElement("div")
    valorTotal.className = "valorTotal"
    const spanPreco = document.createElement("span")
    spanPreco.innerText = preco.length
    const quant = document.createElement("p")
    quant.innerText = "Quantidade:"
    const quantidade = document.createElement("div")
    quantidade.className = "quantidade"
    
    quantidade.appendChild(quant)
    quantidade.appendChild(spanPreco)
    valorTotal.appendChild(precoProduto)
    valorTotal.appendChild(spanValor)
    total.appendChild(quantidade)
    total.appendChild(valorTotal)
    aside.appendChild(total)
}