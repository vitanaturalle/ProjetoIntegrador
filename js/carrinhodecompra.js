let modalKey = 0
let quantproducts = 1
let cartc = [] // carrinho
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatoMonetario = (valor) => {
    if(valor) {
        return valor.toFixed(2)
    }
}

const abrirModal = () => {
    seleciona('.productWindowArea').style.opacity = 0
    seleciona('.productWindowArea').style.display = 'flex'
    setTimeout(() => seleciona('.productWindowArea').style.opacity = 1, 150)
}

const fecharModal = () => {
    seleciona('.productWindowArea').style.opacity = 0
    setTimeout(() => seleciona('.productWindowArea').style.display = 'none', 500)
}

const botoesFechar = () => {
    selecionaTodos('.productInfo--cancelButton, .productInfo--cancelMobileButton').forEach( (item) => item.addEventListener('click', fecharModal) )
}

const preencheDadosDosproducts = (productItem, item, index) => {
	productItem.setAttribute('data-key', index)
    productItem.querySelector('.product-item--img img').src = item.img
    productItem.querySelector('.product-item--price').innerHTML = formatoReal(item.price)
    productItem.querySelector('.product-item--name').innerHTML = item.name
    productItem.querySelector('.product-item--desc').innerHTML = item.description
}

const preencheDadosModal = (item) => {
    seleciona('.productBig img').src = item.img
    seleciona('.productInfo h1').innerHTML = item.name
    seleciona('.productInfo--desc').innerHTML = item.description
    seleciona('.productInfo--actualPrice').innerHTML = formatoReal(item.price)
}

const pegarKey = (e) => {
    let key = e.target.closest('.product-item').getAttribute('data-key')
    console.log('product clicada ' + key)
    console.log(productJson[key])
    quantproducts = 1
    modalKey = key

    return key
}

const mudarQuantidade = () => {
    seleciona('.productInfo--qtmais').addEventListener('click', () => {
        quantproducts++
        seleciona('.productInfo--qt').innerHTML = quantproducts
    })

    seleciona('.productInfo--qtmenos').addEventListener('click', () => {
        if(quantproducts > 1) {
            quantproducts--
            seleciona('.productInfo--qt').innerHTML = quantproducts	
        }
    })
}
const adicionarNoCarrinho = () => {
    seleciona('.productInfo--addButton').addEventListener('click', () => {
        console.log('Adicionar no carrinho')

    	console.log("product " + modalKey)
    	console.log("Quant. " + quantproducts)
        let price = seleciona('.productInfo--actualPrice').innerHTML.replace('R$&nbsp;', '')
    
	    let identificador = productJson[modalKey].id+'t'
        let key = cartc.findIndex( (item) => item.identificador == identificador )
        console.log(key)

        if(key > -1) {
            cartc[key].qt += quantproducts
        } else {
            let product = {
                identificador,
                id: productJson[modalKey].id,
                qt: quantproducts,
                price: parseFloat(price)
            }
            cartc.push(product)
            console.log(product)
            console.log('Sub total R$ ' + (product.qt * product.price).toFixed(2))
        }

        fecharModal()
        abrirCarrinho()
        atualizarCarrinho()
    })
}

const abrirCarrinho = () => {
    console.log('Qtd de itens no carrinho ' + cartc.length)
    if(cartc.length > 0) {
	    seleciona('main').classList.add('show')
        seleciona('header').style.display = 'flex'
    }
    seleciona('.menu-openner').addEventListener('click', () => {
        if(cartc.length > 0) {
            seleciona('main').classList.add('show')
            seleciona('main').style.left = '0'
        }
    })
}

const fecharCarrinho = () => {
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('main').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}

const atualizarCarrinho = () => {
	seleciona('.menu-openner span').innerHTML = cartc.length
	
	if(cartc.length > 0) {

		seleciona('main').classList.add('show')

		seleciona('.cartc').innerHTML = ''

		let subtotal = 0
		let desconto = 0
		let total    = 0

		for(let i in cartc) {
			let productItem = productJson.find( (item) => item.id == cartc[i].id )
			console.log(productItem)
        	subtotal += cartc[i].price * cartc[i].qt
			let cartcItem = seleciona('.models .cartc--item').cloneNode(true)
			seleciona('.cartc').append(cartcItem)

			let productName = `${productItem.name}`
			cartcItem.querySelector('img').src = productItem.img
			cartcItem.querySelector('.cartc--item-nome').innerHTML = productName
			cartcItem.querySelector('.cartc--item--qt').innerHTML = cartc[i].qt

			cartcItem.querySelector('.cartc--item-qtmais').addEventListener('click', () => {
				console.log('Clicou no botão mais')
				cartc[i].qt++
				atualizarCarrinho()
			})

			cartcItem.querySelector('.cartc--item-qtmenos').addEventListener('click', () => {
				console.log('Clicou no botão menos')
				if(cartc[i].qt > 1) {
					cartc[i].qt--
				} else {
					cartc.splice(i, 1)
				}

                (cartc.length < 1) ? seleciona('header').style.display = 'flex' : ''
				atualizarCarrinho()
			})

			seleciona('.cartc').append(cartcItem)

		}
		desconto = subtotal * 0
		total = subtotal - desconto

		seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal)
		seleciona('.desconto span:last-child').innerHTML = formatoReal(desconto)
		seleciona('.total span:last-child').innerHTML    = formatoReal(total)

	} else {
		seleciona('main').classList.remove('show')
		seleciona('main').style.left = '100vw'
	}
}

const finalizarCompra = () => {
    seleciona('.cartc--finalizar').addEventListener('click', () => {
        console.log('Finalizar compra')
        seleciona('main').classList.remove('show')
        seleciona('main').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}


/*const limparCarrinho = () => {
    seleciona('.cartc--limpar').addEventListener('click', () => {
        console.log('Limpar carrinho')
        seleciona('main').classList.remove('show')
        seleciona('main').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}*/




productJson.map((item, index ) => {
    let productItem = document.querySelector('.models .product-item').cloneNode(true)
    seleciona('.product-area').append(productItem)
    preencheDadosDosproducts(productItem, item, index)
    
    productItem.querySelector('.product-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou na product')
        let chave = pegarKey(e)
        abrirModal()

        preencheDadosModal(item)
		seleciona('.productInfo--qt').innerHTML = quantproducts
    })

    botoesFechar()

})
mudarQuantidade()
adicionarNoCarrinho()
atualizarCarrinho()
fecharCarrinho()
finalizarCompra()
