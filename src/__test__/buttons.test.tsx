import React, { MouseEvent } from 'react'
import { shallow } from 'enzyme'
import { cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Button from '../components/UI/Button'

describe('<Button />', () => {
  afterEach(cleanup)

  const props = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => {},
    title: 'Button'
  }

  it('should correctly render component', () => {
    const button = renderer
      .create(<Button title={props.title} onClick={props.onClick} />)
      .toJSON()
    expect(button).toMatchSnapshot()
  })

  it('check the title of value', () => {
    const button = shallow(
      <Button title={props.title} onClick={props.onClick} />
    )
    expect(button.text()).toEqual('Button')
  })
})
