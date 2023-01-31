let productJson = [
  {
      id: 1,
      name: 'Choco Wheyfer Bites',
      img: 'assets/choco_wheyfer.jpg',
      price: 9.00,
      description: 'Choco Wheyfer Bites Chocolate Avela Mais Mu 35g. Choco Wheyfer Bites Chocolate Avela Mais Mu  é um lanche proteico, sem adição de açúcares e tá aí pra mostrar que o docinho saudável também pode ser muito gostoso.'
    },
    {
      id: 2,
      name: 'Café Orgânico Native',
      img: 'assets/cafe.jpg',
      price: 27.00,
      description: 'Café Orgânico Torrado em Grãos Native, a essência integral dos melhores grãos. Além de ser 100% puro, o Café Orgânico Torrado em Grãos Native é 100% Arábica. Após a seleção dos melhores grãos, ele recebe uma torra média clara.'
    },
    {
      id: 3,
      name: 'Pasta Amendoim Eat Clean',
      img: 'assets/pasta_amendoim.jpg',
      price: 31.00,
      description: 'Pasta Amendoim Salted Caramel Eat Clean 300g. Zero adição de açúcar e vegano.'
    },
    {
      id: 4,
      name: 'Farfalle Integral Barilla',
      img: 'assets/farfalle_integral_barilla.jpg',
      price: 13.00,
      description: 'Macarrão BARILLA Integral Farfalle 500g'
    },
    {
      id: 5,
      name: 'Farinha de Trigo Integral Vitao',
      img: 'assets/farinha_integral_vitao.jpg',
      price: 8.00,
      description: 'Farinha de Trigo Integral Vitao 500g. A farinha de trigo integral é obtida através da moagem dos grãos inteiros de trigo, ou seja, não passa pelo processo de refinamento, preservando assim boa parte dos nutrientes.'
    },
    {
      id: 6,
      name: 'Quinoa Grão Orgânica Mãe Terra',
      img: 'assets/quinoa.jpg',
      price: 35.00,
      description: 'Quinoa Grão Orgânica Mãe Terra 250g. A Quinoa Grão Orgânica Mãe Terra 250g, é uma excelente opção de grão para ser consumido por todos, inclusive veganos por ser excelente fonte de proteínas vegetais.'
    },
    {
      id: 7,
      name: 'Suco de Uva Orgânico Native',
      img: 'assets/sucodeuva.jpg',
      price: 6.00,
      description: 'Suco de Uva Orgânico Native 200ml. É produzido com uvas orgânicas do tipo Bordeaux, levemente adocicadas e sem perder os tons delicados, sendo também um grande aliado da saúde.'
    },
    {
      id: 8,
      name: 'Chá Mate Limão Native',
      img: 'assets/chamate.jpg',
      price: 9.00,
      description: 'Chá Mate Limão Orgânico Native 1L.O Chá Mate Orgânico com Limão Native possui ainda suco integral de limão orgânico em sua composição, agregando as propriedades e o sabor da própria fruta para a bebida.'
    },
    {
      id: 8,
      name: 'Azeite de Oliva Native',
      img: 'assets/azeite.jpg',
      price: 27.00,
      description: 'Azeite de Oliva Extra Virgem Orgânico Native 500ml. Obtido a partir de um blend das mais finas variedades de azeitonas do Mediterrâneo'
    }
];


/* ------- PRODUTOS -------*/
let modalKey = 0
let quantproducts = 1
let cart = [] // carrinho
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
        let key = cart.findIndex( (item) => item.identificador == identificador )
        console.log(key)

        if(key > -1) {
            cart[key].qt += quantproducts
        } else {
            let product = {
                identificador,
                id: productJson[modalKey].id,
                qt: quantproducts,
                price: parseFloat(price)
            }
            cart.push(product)
            console.log(product)
            console.log('Sub total R$ ' + (product.qt * product.price).toFixed(2))
        }

        fecharModal()
        abrirCarrinho()
        atualizarCarrinho()
    })
}

const abrirCarrinho = () => {
    console.log('Qtd de itens no carrinho ' + cart.length)
    if(cart.length > 0) {
	    seleciona('aside').classList.add('show')
        seleciona('header').style.display = 'flex'
    }
    seleciona('.menu-openner').addEventListener('click', () => {
        if(cart.length > 0) {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}

const fecharCarrinho = () => {
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}

const atualizarCarrinho = () => {
	seleciona('.menu-openner span').innerHTML = cart.length
	
	if(cart.length > 0) {

		seleciona('aside').classList.add('show')

		seleciona('.cart').innerHTML = ''

		let subtotal = 0
		let desconto = 0
		let total    = 0

		for(let i in cart) {
			let productItem = productJson.find( (item) => item.id == cart[i].id )
			console.log(productItem)
        	subtotal += cart[i].price * cart[i].qt
			let cartItem = seleciona('.models .cart--item').cloneNode(true)
			seleciona('.cart').append(cartItem)

			let productName = `${productItem.name}`
			cartItem.querySelector('img').src = productItem.img
			cartItem.querySelector('.cart--item-nome').innerHTML = productName
			cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt

			cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
				console.log('Clicou no botão mais')
				cart[i].qt++
				atualizarCarrinho()
			})

			cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
				console.log('Clicou no botão menos')
				if(cart[i].qt > 1) {
					cart[i].qt--
				} else {
					cart.splice(i, 1)
				}

                (cart.length < 1) ? seleciona('header').style.display = 'flex' : ''
				atualizarCarrinho()
			})

			seleciona('.cart').append(cartItem)

		}
		desconto = subtotal * 0
		total = subtotal - desconto

		seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal)
		seleciona('.desconto span:last-child').innerHTML = formatoReal(desconto)
		seleciona('.total span:last-child').innerHTML    = formatoReal(total)

	} else {
		seleciona('aside').classList.remove('show')
		seleciona('aside').style.left = '100vw'
	}
}

const finalizarCompra = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        console.log('Finalizar compra')
        seleciona('aside').classList.remove('show')
        seleciona('aside').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}


/*const limparCarrinho = () => {
    seleciona('.cart--limpar').addEventListener('click', () => {
        console.log('Limpar carrinho')
        seleciona('aside').classList.remove('show')
        seleciona('aside').style.left = '100vw'
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
