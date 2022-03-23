
import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

expect.extend({ toMatchDiffSnapshot });

it('Check if the First click is the Home page', () => {
  const { asFragment } = render(<HashRouter><Navbar /></HashRouter>);
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Home/));

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

it('Check if the Second click is the Calculator page', () => {
  const { asFragment } = render(<HashRouter><Navbar /></HashRouter>);
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Calculator/));

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

it('Check if the third click is the Quotes page', () => {
  const { asFragment } = render(<HashRouter><Navbar /></HashRouter>);
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Quote/));

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

