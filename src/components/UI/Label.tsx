import React from 'react'

import { StyledLabel } from '../../styles'

type LabelType = {
  type: string
}

const Label: React.FC<LabelType> = (props) => {
  return <StyledLabel>{props.type}</StyledLabel>
}

export default Label
