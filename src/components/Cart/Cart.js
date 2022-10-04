import React, { useContext } from 'react'

import Modal from '../UI/Modal'
import myClasses from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = '$' + cartCtx.totalAmount.toFixed(2)
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAddYandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = <ul className={myClasses['cart-items']}>
    {cartCtx.items
      .map(item => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={() => { cartItemRemoveHandler(item.id) }}
            onAdd={() => { cartItemAddYandler(item) }}
          />
        )
      }
      )}
  </ul>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={myClasses.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={myClasses.actions}>
        <button className={myClasses['button-alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={myClasses.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart 