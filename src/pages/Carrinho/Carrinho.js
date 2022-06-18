import React, {useContext, useEffect, useState} from 'react'
import Context from '../../global/Context'
import { useNavigate } from 'react-router-dom'
import {url, headers} from '../../constants/urls'
import axios from 'axios'
import {Container, SectionOne, SectionTwo,
CardPratos, Picture, Total, Pagamento, Finalizar, Cabecalho} from './styled'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import EditIcon from '../../img/edit.png'



const Carrinho = ()=>{
	const history = useNavigate()
	const {states, setters, requests} = useContext(Context)
	const sacola = states.sacola
	const id = states.idRestaurante
	const cardapio = states.cardapio
	const perfil = states.perfil
	const [valor, setValor] = useState('money')
	
	
	
	useEffect(()=>{
		requests.pegarPerfil()
	}, [])
	

	
	const mudaValor = (e)=>{
		setValor(e.target.value)
	}

		
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

	
	const finalizarCompra = ()=>{
		const body = {
						products: [
							{
								id: states.idPrato,
								quantity: states.produto
							}
						],
						paymentMethod: valor	
					}

		axios.post(`${url}/restaurants/${id}/order`, body, headers).then(res=>{
			alert('Compra realizada com sucesso!')
		}).catch(err=>{
			alert(err.response.data.message)
		})

	}	

	return <Container>
			<Cabecalho>
				<Header/>			
				<h1>Meu carrinho</h1>
				<div></div>	
			</Cabecalho>		
			<hr/>			
			<SectionOne>
				<div>Endereço para entrega<br/>{perfil.address}</div>
				<img className='edit' src={EditIcon} alt='Edit icon'
					onClick={()=> history('/address')}/>
			</SectionOne>
			<SectionTwo>
				<div className='restaurante'>{cardapio.name}</div>				
				<div>{cardapio.address}</div>				
			</SectionTwo>
			<hr/>
			{sacola.length > 0 ? sacola.map(item=>{
				return<CardPratos key={item.id}>
						<Picture src={item.photoUrl}/>
						<div className='sessao'>
							<div className='nome'>{item.name}</div>
							<small>{item.description}</small><br/>						
							<div className='preco'>R$ {item.price},00</div>							
						</div>
						<button onClick={()=> removerDoCarro(item)}>Remover</button>
					  </CardPratos>
			}) : <h3 style={{textAlign:'center'}} >Seu carrinho está vazio</h3>}
			<Total>
				TOTAL: R$ {total()}
			</Total>
			<div style={{textAlign:'center'}}>
			<hr/>
				<Pagamento>
					<select value={valor} onChange={mudaValor}>
						<option value='money' defaultChecked>Dinheiro</option>
						<option value='creditcard' >Cartão de crédito</option>					
					</select>
				</Pagamento>
				<Finalizar onClick={finalizarCompra}>Finalizar compra</Finalizar><br/>
				<Finalizar onClick={requests.pedidoAtivo}>Consultar pedido ativo</Finalizar>
			</div>			
			<Footer/>
		  </Container>
}
export default Carrinho
