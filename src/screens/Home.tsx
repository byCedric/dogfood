import { useQuery } from '@tanstack/react-query';

import { GitHubAvatar } from '../components/github/Avatar';
import { GitHubBio } from '../components/github/Bio';
import { getProfile } from '../services/github';

export function HomeScreen() {
  const profile = useGitHubProfile('bycedric');

  return (
    <>
      <GitHubAvatar url={profile.data?.avatar_url} />
      <GitHubBio bio={profile.data?.bio} />
    </>
  );
}

function useGitHubProfile(username: string) {
  return useQuery(['github.profile'], () => getProfile(username));
}
