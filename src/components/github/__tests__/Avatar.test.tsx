import { render } from '@testing-library/react-native';

import { GitHubAvatar } from '../Avatar';

describe(GitHubAvatar, () => {
  it('renders image with url', () => {
    const { getByRole } = render(<GitHubAvatar url="https://example.com/test.png" />);
    const image = getByRole('image');

    expect(image).toBeDefined();
    expect(image.props).toHaveProperty('source', { uri: 'https://example.com/test.png' });
  });
});
