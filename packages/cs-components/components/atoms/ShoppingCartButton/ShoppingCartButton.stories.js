import React from 'react'
import { action } from '@storybook/addon-actions'

import ShoppingCartButton from './ShoppingCartIcon'

export default {
  title: 'Atom/ShoppingCartButton',
  component: ShoppingCartButton
}

const Template = args => <ShoppingCartButton {...args} />

export const Notify = Template.bind({})
Notify.args = {
  action: action('click'),
  numberOfItems: 5
}

export const Default = Template.bind({})
Default.args = {
  action: action('click')
}
