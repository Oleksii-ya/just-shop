import React, { useEffect, useState } from 'react'
import { useContext } from 'react'

import CartIcon from '../Cart/CartIcon'
import myClases from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((prev, cur) => {
    return prev + cur.amount
  }, 0)


  const btnClasses = `${myClases.button} ${btnIsHighLighted ? myClases.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighLighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onMyClick}>
      <span className={myClases.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={myClases.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton