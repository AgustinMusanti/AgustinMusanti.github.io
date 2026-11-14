export interface RepoMeta {
  stars: number;
  updatedLabel: string;
}

function parseOwnerRepo(repoUrl: string): { owner: string; repo: string } | null {
  try {
    const url = new URL(repoUrl);
    const [owner, repo] = url.pathname.replace(/^\/+/, '').replace(/\/+$/, '').split('/');
    if (!owner || !repo) return null;
    return { owner, repo };
  } catch {
    return null;
  }
}

function formatUpdatedLabel(isoDate: string): string {
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days < 1) return 'actualizado hoy';
  if (days < 30) return `actualizado hace ${days} d`;
  const months = Math.floor(days / 30);
  if (months < 12) return `actualizado hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
  const years = Math.floor(months / 12);
  return `actualizado hace ${years} ${years === 1 ? 'año' : 'años'}`;
}

export async function getRepoMeta(repoUrl: string): Promise<RepoMeta | null> {
  const parsed = parseOwnerRepo(repoUrl);
  if (!parsed) return null;

  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
    const token = import.meta.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, { headers });
    if (!response.ok) return null;

    const data = (await response.json()) as { stargazers_count: number; pushed_at: string };
    return {
      stars: data.stargazers_count,
      updatedLabel: formatUpdatedLabel(data.pushed_at),
    };
  } catch {
    return null;
  }
}
