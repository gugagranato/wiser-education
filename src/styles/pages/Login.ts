import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  max-width: 1366px;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background-size: auto;
  max-width: 765px;
  height: 100%;
`
export const TitleWelcome = styled.h1`
  color: #383e71;
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 1px;
`
export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.subTitle};
  margin-bottom: 40px;
`

export const ContainerIsLogged = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
`
export const MessageLogged = styled.h1`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
`
