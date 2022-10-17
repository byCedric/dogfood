import { Octokit } from '@octokit/rest';

const github = new Octokit();

export type GitHubProfile = Awaited<ReturnType<typeof getProfile>>;

export async function getProfile(username: string) {
  return await github.rest.users.getByUsername({ username }).then((response) => response.data);
}
