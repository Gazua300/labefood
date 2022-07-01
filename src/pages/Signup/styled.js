import styled from 'styled-components'

export const Container = styled.div`
	text-align: center;
`
export const Image = styled.img`
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
	img.olho{
		position: absolute;
		top: 59%;
		left: 67%;
		width: 32px;
		cursor: pointer;

		@media(max-width: 700px){
			left: 65vw;
		}
		@media(max-width: 405px){
			left: 63vw;
		}
	}
	img.olho2{
		position: absolute;
		top: 69%;
		left: 67%;
		width: 32px;
		cursor: pointer;

		@media(max-width: 700px){
			left: 65vw;
		}
		@media(max-width: 405px){
			left: 63vw;
		}
	}
`
export const Titulo = styled.div`
	margin-top: 8vh;
	font-size: 1.4rem;
	margin-bottom: 3vh;
`