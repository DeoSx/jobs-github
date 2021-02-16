import React from 'react'
import { shallow } from 'enzyme'
import { cleanup, fireEvent } from '@testing-library/react'

import Input from '../components/UI/Input'

describe('<Input />', () => {
  afterEach(cleanup)
  const inputProps = {
    onChange: jest.fn(),
    placeholder: 'placeholder',
    value: '',
    type: 'text'
  }
  it('should render right input value', () => {
    shallow(<Input {...inputProps} />)
  })
})
