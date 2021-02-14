import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { Container } from '../../styles'
import { CardTypes, AppState } from '../../types'

import HeroBlock from './Blocks/HeroBlock'
import Card from '../../components/modules/Card'

const MainPage: React.FC<RouteComponentProps> = () => {
  const jobs = useSelector((state: AppState) => state.jobs)

  if (jobs.loading) {
    return (
      <Container>
        <HeroBlock />
        <h2>Fetch data...</h2>
      </Container>
    )
  }

  if (jobs.error) {
    return (
      <Container>
        <HeroBlock />
        <h2>{jobs.error}</h2>
      </Container>
    )
  }

  return (
    <Container>
      <HeroBlock />
      {jobs.positions.map((i: CardTypes) => (
        <Card {...i} key={i.id} />
      ))}
    </Container>
  )
}

export default MainPage
