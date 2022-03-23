import React from "react";
import { render, cleanup } from "@testing-library/react";
import Footer from '../Footer';

afterEach(cleanup)
it('Expect to create a Footer snapshot', () => {
  const { asFragment } = render(<Footer />)
  expect(asFragment(<Footer />)).toMatchSnapshot()
})