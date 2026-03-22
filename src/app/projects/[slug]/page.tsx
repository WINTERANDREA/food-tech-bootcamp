import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Link from "next/link";
import { getProject, getAllProjects } from "@/lib/content";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { Tag } from "@/components/ui/Tag";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import type { ProjectTag } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = getProject(slug);
    return {
      title: `${project.title} — Food Tech Bootcamp`,
      description: project.seoDescription,
      openGraph: {
        title: project.title,
        description: project.question,
        images: [{ url: project.ogImage || project.image || `/api/og?title=${encodeURIComponent(project.title)}&type=project`, width: 1200, height: 630 }],
        type: "article",
      },
      alternates: {
        canonical: `${SITE_URL}/projects/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  let project;
  try {
    project = getProject(slug);
  } catch {
    notFound();
  }

  return (
    <div className="bg-dark min-h-screen pt-24 pb-section">
      <article className="mx-auto max-w-[800px] px-5 md:px-12">
        <Breadcrumbs
          items={[
            { label: "Projects", href: "/#work" },
            { label: project.title, href: `/projects/${slug}` },
          ]}
        />

        <div className="flex flex-wrap gap-2 mb-4">
          <Tag tag={project.tag as ProjectTag} />
          {project.status === "active" && <Tag tag="active" />}
          {project.status === "upcoming" && <Tag tag="upcoming" />}
        </div>

        <h1 className="font-headline text-3xl md:text-4xl font-bold text-caglio mb-4">
          {project.title}
        </h1>

        <p className="font-body text-lg italic text-crosta mb-12">
          {project.question}
        </p>

        <div className="prose-ftb">
          <MDXRemote source={project.content} components={mdxComponents} />
        </div>

        <div className="mt-16 pt-12 border-t border-[var(--border-subtle)]">
          <p className="font-headline text-xl font-bold text-caglio mb-2">
            Interested in this project?
          </p>
          <p className="font-body text-sm text-crosta mb-6">
            Get updates when we publish results.
          </p>
          <SubscribeForm interest={slug} />
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            name: project.title,
            description: project.seoDescription,
            url: `${SITE_URL}/projects/${slug}`,
            startDate: project.date,
            keywords: [project.sector, project.tag],
            memberOf: { "@id": `${SITE_URL}/#organization` },
            funder: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Food Tech Bootcamp",
            },
          }),
        }}
      />
    </div>
  );
}
