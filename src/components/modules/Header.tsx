import React from 'react'
import { Container, HeaderBlock } from '../../styles'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <HeaderBlock>
      <Container>
        <Link to="/">
          <strong>Github</strong> Jobs
        </Link>
      </Container>
    </HeaderBlock>
  )
}

export default Header
