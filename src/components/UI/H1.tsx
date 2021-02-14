import React from 'react'

import { StyledH1 } from '../../styles'

const H1: React.FC = (props) => {
  return <StyledH1>{props.children}</StyledH1>
}

export default H1
