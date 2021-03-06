import React from 'react'
import { action } from '@storybook/addon-actions'

import SearchBar from './SearchBar'

export default {
  title: 'Atom/SearchBar',
  component: SearchBar
}

const Template = args => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {
  action: action('form submitted')
}
