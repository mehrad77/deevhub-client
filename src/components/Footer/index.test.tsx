import React from 'react';
import { render } from 'enzyme';
import Footer from '.';

describe('Foote', () => {
  it('Renders Footer', () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});
