import React from 'react'

import myClasses from './Card.module.css'

const Card = (props) => {
  return (
    <div className={myClasses.card}>{props.children}</div>
  )
}

export default Card