import styled from 'styled-components'




export const Container = styled.div`
	text-align: center;
`
export const Cabecalho = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10vh;

	h1{
		@media(max-width: 600px){
			font-size: 20px;
		}
	}
`
export const Formulario = styled.form`
	line-height: 10vh;

	@media(max-width: 600px){
		line-height: 6vh;
	}

	input{
		height: 7vh;
		width: 40vw;
		padding-left: 10px;
		font-size: 13pt;

		@media(max-width: 600px){
			width: 60vw;
			height: 4vh;
		}
	}
	button{
		width: 41.5vw;
		height: 7vh;
		font-weight: bold;
		background-color: #e8222e;
		border: none;
		cursor: pointer;

		@media(max-width: 600px){
			width: 63vw;
			height: 4vh;
		}
	}
`