import { render } from '@testing-library/react-native';

import { GitHubBio } from '../Bio';

describe(GitHubBio, () => {
  it('renders text with bio', () => {
    const { getByRole } = render(<GitHubBio bio="test" />);
    const text = getByRole('summary');

    expect(text).toBeDefined();
    expect(text.props).toHaveProperty('children', 'test');
  });
});
