const list = document.querySelector('ul')
const buttonMostrarTudo = document.querySelector('.mostrar-tudo')
const buttonMap = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filtrarVegan = document.querySelector(".filtra-itens")




function formatarMoeda(value) {
   
      const newValue = value.toLocaleString('pt-br',{
        style: 'currency',
         currency: 'BRL'
        });
    
        return newValue
    
}

function mostrarTudo(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi +=
            `<li>
         <img src=${product.src}>
         <p>${product.name}</p>
         <p class="li-price">R$ ${formatarMoeda(product.price)}</p>
     </li>
         `
    })

    list.innerHTML = myLi

}

function decontoMap() {
    const newPrice = menuOpitions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    mostrarTudo(newPrice)
}

function sumAllItens() {
    const totalValue = menuOpitions.reduce((acc, valueAtual) => acc + valueAtual.price, 0)

    list.innerHTML =
        `<li>
         
         <p> O valor total é R$ ${totalValue}</p>
     </li>
         `

}

function filtrarMyItens() {

    const filtrarItens = menuOpitions.filter((product) => {
        if (product.vegan === true) {
            return true
        }
    })

        mostrarTudo(filtrarItens)
    
    }




buttonMostrarTudo.addEventListener('click', () => mostrarTudo(menuOpitions))
buttonMap.addEventListener('click', decontoMap)
sumAll.addEventListener('click', sumAllItens)
filtrarVegan.addEventListener('click', filtrarMyItens)

