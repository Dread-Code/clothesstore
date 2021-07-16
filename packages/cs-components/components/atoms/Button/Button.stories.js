import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

export default {
  title: 'Atom/Button',
  component: Button
}
const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Iniciar sesión',
  action: action('click')
}
