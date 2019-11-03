import React from 'react';
import { render } from 'enzyme';
import StarRating from '.';

describe('StarRating', () => {
  it('Renders StarRating', () => {
    const starRating = render(<StarRating totalStars={10} initialValue={0} editable={true} />);
    expect(starRating).toMatchSnapshot();
  });
});
