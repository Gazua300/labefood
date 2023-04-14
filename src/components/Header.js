import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import ArrowBack from '../img/arrowBack.png'



const Head = styled.header`
	img{
		width: 50px;
		cursor: pointer;
	}

	.header-icon{
		@media(max-width: 600px){
			width: 30px;
		}
	}
`


const Header = ()=>{
	const history = useNavigate()

	return(
		<Head>
			<img className='header-icon' 
				src={ArrowBack} onClick={()=> history(-1)} alt='Arrowback icon'/>
		</Head>
	)
}
export default Header