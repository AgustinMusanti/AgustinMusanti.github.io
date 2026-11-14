import type { APIRoute } from 'astro';
import { generateOgImage } from '../../lib/og-image';
import { getProfile, getProjectsPersonal } from '../../lib/content';
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

    const personal = await getProjectsPersonal(lang);
    for (const project of personal) {
      if (!project.data.caseStudy) continue;
      paths.push({
        params: { slug: `${prefix}project/${project.id}` },
        props: {
          eyebrow: profile.name,
          title: project.data.title,
          description: project.data.description,
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
