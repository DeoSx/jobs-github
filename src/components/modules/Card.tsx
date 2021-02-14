import React from 'react'
import '../../styles/Card.scss'

import Label from '../UI/Label'
import { CardTypes } from '../../types'

const Card: React.FC<CardTypes> = (props) => {
  return (
    <div className="card">
      <img src={props.company_logo} alt="" />
      <div className="content">
        <div>
          <p className="content__company">{props.company}</p>
          <p className="content__title">{props.title}</p>
        </div>
        <div className="content__footer">
          <Label type={props.type} />
          <p className="content__location">{props.location}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
