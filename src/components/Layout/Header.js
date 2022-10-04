import React from 'react'

import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpeg'
import myClasses from './Header.module.css'

function Header(props) {
  return (
    <>
      <header className={myClasses.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onMyClick={props.onShowCart} />
      </header>
      <div className={myClasses['main-image']}>
        <img src={mealsImage} alt="food" />
      </div>
    </>
  )
}

export default Header