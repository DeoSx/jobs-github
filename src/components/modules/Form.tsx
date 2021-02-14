import React, { useState } from 'react'
import useActions from '../../hooks'

import { StyledForm } from '../../styles'
import Input from '../UI/Input'
import Button from '../UI/Button'

const Form = () => {
  const [value, setValue] = useState<string>('')

  const { fetchPositions } = useActions()

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    fetchPositions(value)
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <Button title="Submit" />
      <Input
        placeholder="Title, companies, expertise or benefits"
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </StyledForm>
  )
}

export default Form
