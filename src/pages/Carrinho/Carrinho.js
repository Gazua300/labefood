import React, {useContext, useEffect, useState} from 'react'
import Context from '../../global/Context'
import {url, headers} from '../../constants/urls'
import axios from 'axios'
import {Container, SectionOne, SectionTwo,
CardPratos, Picture, Total, Pagamento, Finalizar} from './styled'
import Footer from '../../components/Footer'
import Header from '../../components/Header'


const Carrinho = ()=>{
	const {states, setters, requests} = useContext(Context)
	const sacola = states.sacola
	const id = states.idRestaurante
	const pedidos = states.pedidos
	const cardapio = states.cardapio
	const perfil = states.perfil
	const [valor, setValor] = useState([{
			value: 'money'
		}])
	

	
	useEffect(()=>{
		requests.pegarPerfil()
	}, [])
	

	
	const mudaValor = (e)=>{
		setValor(e.target.value)
	}


	// const quantos = (id)=>{
	// 	for(let item of states.carro){
	// 	if(item.id === id){
	// 		return item.qnt 
	// 	}
	//   }	
	// } 	

	const total = ()=>{
		let soma = 0
		for(let valor of sacola){
			soma += valor.price * states.produto
		}

		return soma
	}


	const removerDoCarro = (item)=>{
		const confirme = window.confirm(`Tem certeza que deseja excluir ${item.name}`)

		if(confirme){
			const novaSacola = sacola.filter(saco=>{
				return saco.id !== item.id
			})
			setters.setSacola(novaSacola)
		}
	}

	
	// const finalizarCompra = ()=>{
	// 	const body = [{
	// 				 	id: states.idProduto,
	// 					quantity: quantos(),			
	// 					paymentMethod: valor
	// 				}]
	// 	axios.post(`${url}/restaurants/${id}/order`, body, headers).then(res=>{
	// 		console.log(res.data)
	// 	}).catch(err=>{
	// 		alert(err.response.data.message)
	// 	})

	// }	

	return <Container>
			<Header/>			
			<h3>Meu carrinho</h3>			
			<hr/>			
			<SectionOne>
				<div><div className='informativo'>Endereço para entrega</div>
					{perfil.address}</div>
			</SectionOne>
			<SectionTwo>
				<div className='restaurante'>{cardapio.name}</div>				
				<div className='endereco'>{cardapio.address}</div>				
			</SectionTwo>
			<hr/>
			{sacola.length > 0 ? sacola.map(item=>{
				return<CardPratos key={item.id}>
						<Picture src={item.photoUrl}/>
						<div className='sessao'>
							<div className='nome'>{item.name}</div>
							<small>{item.description}</small>
							<br/>Quantidade: 
							<div className='preco'>R$ {item.price},00</div>							
						</div>
						<button onClick={()=> removerDoCarro(item)}>Remover</button>
					  </CardPratos>
			}) : <h3 style={{textAlign:'center'}} >Seu carrinho está vazio</h3>}
			<Total>SUBTOTAL R$ {total()}</Total>
			<div style={{textAlign:'center'}}>
			<div style={{textAlign:'left',
			marginLeft:'12px'}}>Forma de pagamento</div><hr/>
			<Pagamento>
			<input type='radio' id='pague' value='money'
			onChange={mudaValor} checked={valor.value === 'money'} />
			<label for='pague'>Dinheiro</label><br/>				
			<input type='radio' id='pago' value='creditcard'
			onChange={mudaValor} checked={valor.value === 'creditcard'} />
			<label for='pago'>Cartão de crédito</label>
			</Pagamento>
			<Finalizar>Finalizar compra</Finalizar></div>			
			<Footer/>
		  </Container>
}
export default Carrinho
