import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Quote from '../Quote';

afterEach(cleanup);
it('Should create a Qoutes snapshot', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment(<Quote />)).toMatchSnapshot();
});
