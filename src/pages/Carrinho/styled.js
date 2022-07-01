import styled from 'styled-components'



export const Container = styled.div`
	margin: 23px;
	line-height: 6vh;	
	.pagar{
		float: left;
	}		
`
export const Cabecalho = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10vh;
`
export const SectionOne = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 10px;
	background-color: rgb(175, 168, 168);
	.edit{
		width: 25px;
		cursor: pointer
	}
`
export const SectionTwo = styled.div`
	margin-top: 10px;
	.restaurante{
		color: red;
		font-size: 15pt;
	}
`
export const CardPratos = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid;
	border-radius: 10px;
	margin: 10px;
	padding-right: 5px;
	.sessao{
		margin-left: 15px;
	}
	.nome{
		color: red;
	}
	.preco{
		font-weight: bold;
		margin-top: 20px;
	}
	button{
		border-radius: 10px;
		background-color: #e8222e;
		cursor: pointer;
	}
	
	@media(max-width: 460px){
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
`
export const Qnt = styled.span`
	position: absolute;
	margin-left: 74vw;
	border-radius: 5px;
	text-align: center;
	border: 1px solid;
	height: 25px;
	width: 25px;
` 
export const Picture = styled.img`
	width: 120px;
	height: 170px;	
	border-radius: 10px;
	@media(max-width: 460px){
		width: 75vw;
	}
	@media(max-width: 388px){
		width: 63vw;
	}
	@media(max-width: 260px){
		width: 50vw;
	}
`
export const Total = styled.div`
	margin-left: 12px;
`
export const Pagamento = styled.div`
	margin: 20px 10px 80px;
	select{
		float: left;
		padding: 5px;
	}
`
export const Finalizar = styled.button`
	margin: 5px;
	width: 88vw;
	height: 7vh;
	font-weight: bold;
	background-color: #e8222e;
	border: none;
	cursor: pointer;
`


