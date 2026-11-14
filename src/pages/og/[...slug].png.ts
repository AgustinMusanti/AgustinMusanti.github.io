import type { APIRoute } from 'astro';
import { generateOgImage } from '../../lib/og-image';
import { getProfile, getProjects } from '../../lib/content';
import type { Language } from '../../i18n/utils';

export const prerender = true;

interface PathProps {
  eyebrow: string;
  title: string;
  description: string;
}

export async function getStaticPaths() {
  const paths: { params: { slug: string }; props: PathProps }[] = [];

  for (const lang of ['es', 'en'] as Language[]) {
    const profile = await getProfile(lang);
    const prefix = lang === 'en' ? 'en/' : '';

    paths.push({
      params: { slug: `${prefix}home` },
      props: { eyebrow: profile.role, title: profile.name, description: profile.heroTagline },
    });

    const projects = await getProjects(lang);
    for (const project of projects) {
      if (!project.text.caseStudy) continue;
      paths.push({
        params: { slug: `${prefix}project/${project.slug}` },
        props: {
          eyebrow: profile.name,
          title: project.text.title,
          description: project.text.result ?? project.text.summary,
        },
      });
    }
  }

  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const { eyebrow, title, description } = props as PathProps;
  const png = await generateOgImage({ eyebrow, title, description });

  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  });
};
