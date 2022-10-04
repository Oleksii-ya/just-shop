import React from 'react'
import { useContext } from 'react'

import myClasses from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext)

  const onAddToCartHandler = amount => {
    cartCtx.addItem({
      id, name, price, amount
    })
  }

  return (
    <li className={myClasses.meal}>
      <div>
        <h3>{name}</h3>
        <div className={myClasses.description}>{description}</div>
        <div className={myClasses.price}>{'$' + price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem