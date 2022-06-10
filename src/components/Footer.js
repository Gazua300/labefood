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
`
//Componente funcional
const Footer = ()=>{
	const history = useNavigate()
	
	
	return<Foot>
			 <img src={LogoHome} onClick={()=> history('/feed')} alt='Home icon'/>
			 <img src={Carrinho} onClick={()=> history('/carrinho')} alt='Cart icon'/>
			 <img src={Perfil} onClick={()=> history('/perfil')} alt='Avatar icon'/>
		  </Foot>
}
export default Footer