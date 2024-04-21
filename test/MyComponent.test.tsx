import { cleanup, render } from "@testing-library/react";
import { MyComponent } from '../src/components/MyComponent';

afterEach(() => {
  cleanup()
});

describe("My Component", () => {
  test("should display label", () => {
    const { getByText } = render(<MyComponent label="Test" />)
    expect(getByText('Test')).toBeTruthy();
  });

  test("should display label", () => {
    const { getByText } = render(<MyComponent label="Test" />)
    expect(getByText('Test')).toBeTruthy();
  });
})