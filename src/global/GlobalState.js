import Context from './Context'
import React, {useState, useRef} from 'react'
import axios from 'axios'
import {url, headers} from '../constants/urls'
import {useNavigate} from 'react-router-dom'


const GlobalState = (props) =>{
	const history = useNavigate()
	const popup = useRef(null)
	const [idRestaurante, setIdRestaurante] = useState('')
	const [prato, setPrato] = useState({})
	const [idPrato, setIdPrato] = useState('')
	const [restaurantes, setRestaurantes] = useState([])
	const [categorias, setCategorias] = useState([])
	const [cardapio, setCardapio] = useState([])
	const [perfil, setPerfil] = useState([])
	const [produto, setProduto] = useState(1)
	const [pedidos, setPedidos] = useState([])
	const [pedido, setPedido] = useState({})
	const [endereco, setEndereco] = useState({})
	const [sacola, setSacola] = useState([])



	const mudaProduto = (e)=>{
		setProduto(e.target.value)
	}
	

	const adicionar = (pt)=>{
		setIdPrato(pt.id)
		setPrato(pt)
		popup.current.style.display = 'block'
	}


	const retiraPopup = ()=>{
		popup.current.style.display = 'none'
	}


	const logout = ()=>{
		const decide = window.confirm('Tem certeza que quer sair da sua conta?')
		if(decide){
			localStorage.clear()
			history('/')
		}
	}
	
		
	const adicionarAoCarro = (pt)=>{
		const novaSacola = [...sacola, pt]
		setSacola(novaSacola)

		history('/carrinho')
	}
	


	const listaDeRestaurantes = ()=>{
		axios.get(`${url}/restaurants`, headers).then(res=>{
			setRestaurantes(res.data.restaurants)
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response)
		})
	}

	
	const detalhesRest = (id)=>{
		axios.get(`${url}/restaurants/${id}`, headers).then((res)=>{
					setCardapio(res.data.restaurant)
					setCategorias(res.data.restaurant.products.map(cat=>{
						return cat.category
					}))								
					setIdRestaurante(id)
					history('/cardapio')
				}).catch(err=>{
					console.log(err.response)
				})
	}


	const pegarPerfil =()=>{
		axios.get(`${url}/profile`, headers).then(res=>{
			setPerfil(res.data.user)
		}).catch(err=>{
			alert('Algo deu errado')
		})
	}

	
	const historicoDePedidos = ()=>{
		axios.get(`${url}/orders/history`, headers).then(res=>{
			setPedidos(res.data.orders)
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response.data.message)
		})
	}


	const pedidoAtivo = ()=>{
		axios.get(`${url}/active-order`, headers).then(res=>{
			setPedido(res.data.order)
			const order = res.data.order
			alert(`${order.restaurantName}\n\nPedido feito em: ${new Date(order.createdAt).toLocaleString()}\n\nExpira em: ${new Date(order.expiresAt).toLocaleString()}\n\nTotal: R$ ${order.totalPrice}`)
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response.data.message)
		})
	}


	const enderecoCadastrado = ()=>{
		axios(`${url}/profile/address`, headers).then(res=>{
			setEndereco(res.data.address)
		}).catch(err=>{
			alert('Algo deu errado.\n'+err.response.data.message)
		})
	}

	

	const states = {restaurantes, cardapio, perfil, produto, pedidos,
		pedido, endereco, categorias, idRestaurante, prato, sacola, idPrato}

	const setters = {adicionarAoCarro, adicionar, logout, popup, retiraPopup,
		setSacola, mudaProduto}

	const requests = {listaDeRestaurantes, detalhesRest, pegarPerfil,
		historicoDePedidos, pedidoAtivo, enderecoCadastrado}
	
	


	return<Context.Provider value={{states, setters, requests}}>
		  	{props.children}
		  </Context.Provider>
}
export default GlobalState