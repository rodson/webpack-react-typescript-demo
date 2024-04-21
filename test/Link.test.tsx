import { cleanup, render } from "@testing-library/react";
import Link from '../src/components/Link';

afterEach(() => {
  cleanup()
});

it('renders correctly', () => {
  const { asFragment }  = render(<Link page='http://www.tencent.com'>Bonarhyme</Link>)
  expect(asFragment()).toMatchSnapshot();
});