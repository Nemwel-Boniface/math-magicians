import React from "react";
import { render, cleanup } from "@testing-library/react";
import Calculator from '../Calculator';

afterEach(cleanup)
it('Should create a calculator snapshot', () => {
  const { asFragment } = render(<Calculator />)
  expect(asFragment(<Calculator />)).toMatchSnapshot()
})