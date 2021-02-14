import React, { MouseEvent } from 'react'

import { Btn } from '../../styles/index'

type ButtonProps = {
  title: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <Btn onClick={props.onClick}>{props.title}</Btn>
}

export default Button
