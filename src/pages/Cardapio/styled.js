import styled from 'styled-components'



export const Container = styled.div`
	h1{
		text-align: center
	}
`
export const Card = styled.div`
	border: 1px solid red;
	width: 50vw;
	margin: auto;

	@media(max-width: 600px){
		width: 80vw;
	}
`
export const Texto = styled.div`
	margin: 15px;
	.principal{
		text-align: center;
		margin-top: 7vh;
	}
`
export const Tempo = styled.div`
	display: flex;
	justify-content: space-between;
`
export const Image = styled.img`
	width: 50vw;
	height: 50vh;

	@media(max-width: 600px){
		width: 80vw;
	}
`
export const CardPratos = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid;
	border-radius: 10px;
	margin: 10px;
	h4{
		color: red;
		margin-bottom: -10px;
	}
	p{
		font-size: 10pt;
	}
	div{
		margin: 10px;
	}
	button{
		background-color: #e8222e;
		border-radius: 10px;
		cursor: pointer;
		margin-right: 10px;
	}

	@media(max-width: 770px){
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
`
export const Picture = styled.img`
	width: 100px;
	height: 130px;	
	border-radius: 10px;

	@media(max-width: 770px){
		width: 73vw;
		height: 25vh;
	}
`

