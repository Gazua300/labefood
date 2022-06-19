import styled from 'styled-components'




export const Container = styled.div`
	text-align: center;
`
export const Cabecalho = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10vh;
`
export const Formulario = styled.form`
	line-height: 10vh;
	input{
		height: 7vh;
		width: 40vw;
		padding-left: 10px;
		font-size: 13pt;
	}
	button{
		width: 41.5vw;
		height: 7vh;
		font-weight: bold;
		background-color: #e8222e;
		border: none;
		cursor: pointer;
	}
`