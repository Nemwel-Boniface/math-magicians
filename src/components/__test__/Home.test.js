import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from '../Home';

afterEach(cleanup)
test('Should create a Home snapshot', () => {
  const { asFragment } = render(<Home />)
  expect(asFragment(<Home />)).toMatchSnapshot()
})