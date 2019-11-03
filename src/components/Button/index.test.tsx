import React from 'react';
import { shallow, render } from 'enzyme';
import Button from '.';

const getComponent = () => {
  return render(<Button text="With green color" color="green" />);
};

describe('Button', () => {
  it('Renders button with green color', () => {
    const button = getComponent();
    expect(button).toMatchSnapshot();
  });

  it('Renders outlined button with default color', () => {
    const button = render(<Button text="Skip Changes" kind="outlined" width="150px" />);
    expect(button).toMatchSnapshot();
  });
});
