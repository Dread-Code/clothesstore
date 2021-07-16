import React from 'react'
import Proptypes from 'prop-types'
import './Button.scss'

const Button = ({ label, action }) => (
  <button type="button" className="a-header__button" onClick={action}>
    {label}
  </button>
)
Button.propTypes = {
  label: Proptypes.string.isRequired,
  action: Proptypes.func.isRequired
}

export default Button
