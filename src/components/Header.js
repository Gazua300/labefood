import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import ArrowBack from '../img/arrowBack.png'



const Head = styled.header`
	img{
		width: 50px;
		cursor: pointer;
	}
`


const Header = ()=>{
	const history = useNavigate()

	return(
		<Head>
			<img src={ArrowBack} onClick={()=> history(-1)} alt='Arrowback icon'/>
		</Head>
	)
}
export default Header