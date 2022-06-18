import React, {useContext, useEffect, useRef, useState} from 'react'
import Context from '../../global/Context'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {url, headers} from '../../constants/urls'
import {Container, SectionOne, SectionTwo, BtnHide,
BtnForm, Pedidos, Cabecalho} from './styled'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logout from '../../img/logout.png'
import EditIcon from '../../img/edit.png'




//----------Componente funcional--------------------
const Perfil = ()=>{
	const history = useNavigate()
	const {states, setters, requests} = useContext(Context)
	const pedidos = states.pedidos
	const perfil = states.perfil
	const [pedido, setPedido] = useState([]) 
	const editar = useRef(null)
	const [form, setForm] = useState({
		nome:'',
		email:'',
		cpf:''
	})
	


	useEffect(()=>{
		requests.pegarPerfil()
		requests.historicoDePedidos()
	}, [])
	

	const mudaForm = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}


	const atualizarPerfil = (e)=>{
		e.preventDefault()
		const body = {
			name: form.nome,
			email: form.email,
			cpf: form.cpf
		}

		axios.put(`${url}/profile`, body, headers).then(res=>{			
			requests.pegarPerfil()
			setForm({
				nome:'',
				email:'',
				cpf:''
			})			
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response.data.message)
		})
	}

	
	const edite = ()=>{
		editar.current.style.display = 'block'
	}
	const ocultar = ()=>{
		editar.current.style.display = 'none'
	}


//---------------Renderização---------------------
	const dataDoPedido = pedidos.map(pedido=>{
		return pedido.createdAt
	})
	const expiracao = pedidos.map(pedido=>{
		return pedido.expiresAt
	})
	

	return<Container>
			<Cabecalho>
				<Header/>
				<h1>Meu perfil</h1>
				<img src={Logout} onClick={setters.logout} alt='Logout icon'/>
			</Cabecalho>
			<hr/>
			<SectionOne>
				<p>{perfil.name}<br/>
				{perfil.email}<br/>
				{perfil.cpf}</p>
				<img className='edit' src={EditIcon} onClick={edite}/>
			</SectionOne>
			<SectionTwo>
				<div>Endereço cadastrado<br/>{perfil.address}</div>
				<img className='edit' src={EditIcon}
					onClick={()=> history('/address')}/>
			</SectionTwo>			
			<div ref={editar} style={{display:'none'}}>
			<hr/><BtnHide onClick={ocultar} >Ocultar</BtnHide>
			<form onSubmit={atualizarPerfil}>
				<input type='text' autoFocus placeholder='Nome e sobrenome' 
				name='nome' value={form.nome} onChange={mudaForm} required/>
				<input type='email' placeholder='email@email.com'
				name='email' value={form.email} onChange={mudaForm} required/>
				<input type='text' placeholder='000.000.000-00'
				name='cpf' value={form.cpf} onChange={mudaForm} required/>				
				<br/><BtnForm>Atualizar</BtnForm>				
			</form>			
			</div>
			<p style={{textAlign:'center'}}>Histórico de pedidos</p><hr/>
			{pedidos.length > 0 ? pedidos.map(pedido=>{
				return<Pedidos>
						<div className='titulo'>
							{pedido.restaurantName}
						</div>
						<p>Pedido feito em: {new Date(pedido.createdAt).toLocaleString()}<br/></p>
						<div className='total'>
						SUBTOTAL: R$ {pedido.totalPrice}
						</div>
					  </Pedidos>
			}) : <h3 style={{textAlign:'center'}}>Você ainda não fez nenhum pedido</h3>}
				<Footer/>
		  </Container>

}
export default Perfil

