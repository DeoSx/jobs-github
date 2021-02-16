import React from 'react'
import { shallow } from 'enzyme'
import Card from '../components/modules/Card'

import { mock } from '../__mock__'

describe('<Card />', () => {
  it('should render Card component', () => {
    const component = shallow(<Card {...mock} />)
    const wrapper = component.find('.card')
    expect(wrapper.length).toBe(1)
  })
})
