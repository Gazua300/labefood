import styled from 'styled-components'



export const Container = styled.div`
	margin: 23px;
	line-height: 6vh;
	input{
		height: 5vh;
		margin-bottom: 5px;
		padding-left: 10px;
	}
`
export const Cabecalho = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10vh;
	img{
		width: 50px;
		cursor: pointer;
	}
` 
export const SectionOne = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	p{
		line-height: 6vh;
	}
	.edit{
		width: 25px;
		cursor: pointer;
		margin-right: 10px;
	}
`
export const SectionTwo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 10px;
	background-color: rgb(175, 168, 168);
	.edit{
		width: 25px;
		cursor: pointer;
	}
`
export const BtnHide = styled.button`
	position: absolute;
	left: 80%;
	background-color: #e8222e;
	border-radius: 10px;
	cursor: pointer;
`
export const BtnForm = styled.button`	
	background-color: #e8222e;
	border-radius: 10px;
	cursor: pointer;
`
export const Pedidos = styled.div`
	margin: 5px;
	border: 1px solid;
	border-radius: 10px;
	padding-left: 10px;
	.titulo{
		color: red;
		font-size: 15pt;
	}
	.total{
		font-weight: bolder;
		font-size: 10pt;
	}
`