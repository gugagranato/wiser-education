import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 10px;
  /* padding: 6px; */
  width: 100%;
  border: 0.5px solid ${props => props.theme.colors.subTitle};
  color: #666360;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      font-size: 16px;
      border: 0.5px solid ${props => props.theme.colors.subTitle};
    `}
  ${props =>
    props.isFilled &&
    css`
      border: 0.5px solid ${props => props.theme.colors.subTitle};
      color: #ff9000;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.title};
    padding: 14px;

    &::placeholder {
      color: ${props => props.theme.colors.subTitle};
    }
  }
  svg {
    margin-right: 16px;
  }
`

export const Error = styled.div`
  margin-right: 16px;
  color: red;
  font-weight: 600;
`
export const ContainerTitle = styled.div`
  display: flex;
  margin: 12px 8px;

  p {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`
