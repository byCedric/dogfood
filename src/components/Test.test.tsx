import { render } from '@testing-library/react-native';

import { Test } from './Test';

describe(Test, () => {
  it('renders hello world', () => {
    const { getByText } = render(<Test />);
    expect(getByText('hello world')).toBeDefined();
  });
});
