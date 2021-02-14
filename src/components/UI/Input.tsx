import React from 'react'

import { StyledInput } from '../../styles'

type InputProps = {
  onChange: React.ChangeEventHandler
  placeholder: string
  type: string
  value: string
}

const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
  return <StyledInput {...props} />
}

export default Input
