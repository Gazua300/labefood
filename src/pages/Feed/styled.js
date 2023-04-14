import styled from 'styled-components'



export const LogoPicture = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 5px 10px 50px 10px;
	img{
		width: 80px;		
	}
	.corner{
		width: 50px;
		cursor: pointer;

		@media(max-width: 600px){
			width: 30px;
		}
	}
`
export const Container = styled.div`
	text-align: center;	
`
export const SearchInput = styled.input`
	margin: auto;
	height: 5vh;
	width: 50vw;
	padding-left: 10px;			
`
export const Achado = styled.div`
	border: 1px solid;
	width: 29.3vw;
	margin: 20px;
`
export const Restaurantes = styled.div`
	text-align: center;
`
export const Categorias = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
	cursor: pointer;
	
	@media(max-width: 600px){
		overflow-x: auto;
	}
`
export const Categoria = styled.div`
	margin: 10px;

`



