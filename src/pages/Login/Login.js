import React, {useState, useEffect, useRef} from 'react'
import {url} from '../../constants/urls'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import Logo from '../../img/logo-future-eats-invert.png'
import {Container, Image, Formulario, Titulo} from './styled'



const Login = ()=>{
	const history = useNavigate()
	const olho = useRef(null)
	const senha = useRef(null)
	const [form, setForm] = useState({
		email:'astrodev@future4.com',
		senha:'123456'
	})


	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token !== null){
			history('/feed')
		}
	})

	const mudaForm = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}

	const login = (e)=>{
		e.preventDefault()
		const body={
			email: form.email,
			password: form.senha
		}

		axios.post(`${url}/login`, body).then(res=>{
			localStorage.setItem('token', res.data.token)
			history('/feed')
		}).catch(err=>{
			alert('Recarregue a página!\n'+err.response.data.message)
		})
	}


//Início da renderização
	return<Container>
			<Image src={`${Logo}`} className="Logo_FutureEats_invert"/>
			<Titulo>Entrar</Titulo>
			<Formulario onSubmit={login}>
				<div >
				<input type='email' autoFocus placeholder='email@email.com' name='email'
				value={form.email} onChange={mudaForm} required/>
				</div>
				<div>
				<input type='password' placeholder='Mínimo 6 caracteres' name='senha'
				value={form.senha} onChange={mudaForm} ref={senha} required/>
				</div>
				<div>
				<button>Entrar</button>
				</div>
				Não possui cadastro? clique <Link to={'/signup'}> aqui</Link>
			</Formulario>
		  </Container> 
}
export default Login


