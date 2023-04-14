import React from 'react'
import {useNavigate} from 'react-router-dom'
import LogoHome from '../img/homepage.png'
import Carrinho from '../img/shopping-cart.png'
import Perfil from '../img/avatar.png'
import styled from 'styled-components'


//Estilização
const Foot = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	img{
		cursor: pointer;
		width: 50px;
	}

	.header-icon{
		@media(max-width: 600px){
			width: 30px;
		}
	}
`
//Componente funcional
const Footer = ()=>{
	const history = useNavigate()
	
	
	return<Foot>
			 <img className='header-icon' 
			 	src={LogoHome} onClick={()=> history('/feed')} alt='Home icon'/>
			 <img className='header-icon' 
			 	src={Carrinho} onClick={()=> history('/carrinho')} alt='Cart icon'/>
			 <img className='header-icon'
			 	src={Perfil} onClick={()=> history('/perfil')} alt='Avatar icon'/>
		  </Foot>
}
export default Footer