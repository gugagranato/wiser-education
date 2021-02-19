import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback
} from 'react'

import { Container, Error, ContainerTitle } from './styles'

interface ErrorProps {
  hasError: boolean
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  name: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  containerStyle?: object
  error?: ErrorProps
}

const Input: React.FC<InputProps> = ({ error, title, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])
  return (
    <>
      <ContainerTitle>
        <p>{title}</p>
      </ContainerTitle>

      <Container
        isErrored={error.hasError}
        isFilled={isFilled}
        isFocused={isFocused}
        data-testid="input-container"
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          {...rest}
        />

        {error.hasError && <Error>X</Error>}
      </Container>
    </>
  )
}

export default Input
