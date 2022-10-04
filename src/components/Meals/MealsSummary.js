import React from 'react'

import MyClasses from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={MyClasses.summary}>
      <h2>Good Food for you</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
      </p>
    </section>
  )
}

export default MealsSummary