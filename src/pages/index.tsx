import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { useAuth } from '../context/authProvider'
import { FiPower } from 'react-icons/fi'
import Button from '../components/Button'
import Input from '../components/Input'
import SideImage from '../assets/girl.svg'

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  TitleWelcome,
  Subtitle,
  ContainerIsLogged,
  MessageLogged
} from '../styles/pages/Login'

interface SignInFormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const [error, setError] = useState({ hasError: false, errors: {} })
  const formRef = useRef(null)
  const [email, setEmail] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [password, setPassword] = useState('')

  const { signIn, signOut } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('@Wiser:token')

    if (token) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [isLogged, setIsLogged])

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória')
        })

        await schema.validate(
          { email: email, password: password },
          {
            abortEarly: false
          }
        )

        await signIn({
          email: email,
          password: password
        })
        setIsLogged(true)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          alert(err.errors)
          setError({ hasError: true, errors: err.errors })
          return
        }
        console.log('err', err)
        setError({ hasError: false, ...error })
      }
    },
    [signIn, password, email]
  )
  const myChangeHandler = event => {
    setEmail(event.target.value)
  }
  const myChangeHandlerPass = event => {
    setPassword(event.target.value)
  }

  const handleContentForm = (
    <Content>
      <AnimationContainer>
        <form ref={formRef} onSubmit={handleSubmit}>
          <TitleWelcome>Olá, seja bem-vindo!</TitleWelcome>
          <Subtitle>Para acessar a plataforma, faça seu login</Subtitle>
          <Input
            title="E-mail"
            type="text"
            name="email"
            placeholder="user.name@mail.com"
            onChange={myChangeHandler}
            error={error}
          />
          <Input
            title="Senha"
            type="password"
            name="password"
            placeholder="******"
            onChange={myChangeHandlerPass}
            error={error}
          />

          <Button type="submit">Entrar</Button>
        </form>
      </AnimationContainer>
    </Content>
  )

  return (
    <Container>
      <Background>
        <SideImage />
      </Background>

      {isLogged ? (
        <ContainerIsLogged>
          <MessageLogged>Você está logado! =)</MessageLogged>
          <FiPower
            style={{ cursor: 'pointer' }}
            size={24}
            color={`${props => props.theme.colors.subTitle}`}
            onClick={signOut}
          />
        </ContainerIsLogged>
      ) : (
          handleContentForm
        )}
    </Container>
  )
}

export default Login
