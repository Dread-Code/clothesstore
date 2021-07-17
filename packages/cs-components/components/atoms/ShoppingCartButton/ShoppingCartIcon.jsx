import React from 'react'
import PropTypes from 'prop-types'
import ShoppingCartIcon from '../../../assets/icons/icon-cart.svg'
import './ShoppingCartButton.scss'

const ShoppingCartButton = ({ numberOfItems, action }) => {
  console.log(numberOfItems)
  return (
    <div className="a-header__shoppingCartButton">
      <button type="button" onClick={action}>
        <img src={ShoppingCartIcon} alt="ShoppingCartIcon" />
      </button>
      {numberOfItems && (
        <div className="burble">
          <span>{numberOfItems}</span>
        </div>
      )}
    </div>
  )
}

ShoppingCartButton.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired
}

export default ShoppingCartButton
