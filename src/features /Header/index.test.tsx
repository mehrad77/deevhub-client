import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Header from '.';

describe('Header', () => {
  it('Renders Header', () => {
    const header = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(header).toMatchSnapshot();
  });
});
