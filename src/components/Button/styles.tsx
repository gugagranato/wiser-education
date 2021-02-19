import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: linear-gradient(
    90deg,
    rgba(56, 62, 113, 1) 0%,
    rgba(157, 37, 176, 1) 100%
  );
  height: 56px;
  border-radius: 10px;
  border: transparent;
  padding: 0 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  transform: capitalize;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
  transition-property: all;
  &:hover {
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgba(157, 37, 176, 1) 10%,
      rgba(56, 62, 113, 1) 90%
    );
    -webkit-transition: 1s ease-out;
    -moz-transition: 1s ease-out;
    -o-transition: 1s ease-out;
    transition: 1s ease-out;
  }
`
