import React from 'react';
import { render } from 'enzyme';
import Icon from '.';

describe('Icon', () => {
  it('Renders orange star Icon', () => {
    const starIcon = render(<Icon size={26} type="star-f" color="orange" padding={10} />);
    expect(starIcon).toMatchSnapshot();
  });
});
