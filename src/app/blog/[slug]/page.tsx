import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getAllPosts } from "@/lib/content";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL, PROJECTS } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return {
      title: `${post.title} — Food Tech Bootcamp`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [{ url: post.ogImage || post.image || "/images/og/logo.png", width: 1200, height: 630 }],
        type: "article",
        publishedTime: post.date,
        authors: [post.author || "Andrea"],
        tags: post.tags,
      },
      alternates: {
        canonical: `${SITE_URL}/blog/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="bg-dark min-h-screen pt-24 pb-section">
      <article className="mx-auto max-w-[800px] px-5 md:px-12">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/#blog" },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />

        <time className="block font-mono text-xs text-crosta mb-4">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <h1 className="font-headline text-3xl md:text-4xl font-bold text-caglio mb-4">
          {post.title}
        </h1>

        <p className="font-body text-lg text-crosta mb-12">
          {post.excerpt}
        </p>

        <div className="prose-ftb">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {(() => {
          const related = PROJECTS.find((p) => p.relatedBlog === slug);
          if (!related) return null;
          return (
            <div className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
              <p className="font-mono text-xs text-crosta/50 uppercase tracking-widest mb-2">
                Related experiment
              </p>
              <Link
                href={related.comingSoon ? "/#work" : `/projects/${related.slug}`}
                className="group inline-flex items-center font-headline text-lg font-bold text-caglio hover:text-terra transition-colors"
              >
                {related.title}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <p className="font-body text-sm italic text-crosta mt-1">
                {related.question}
              </p>
            </div>
          );
        })()}

        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
          <p className="font-headline text-xl font-bold text-caglio mb-2">
            Want more like this?
          </p>
          <p className="font-body text-sm text-crosta mb-6">
            Rare updates on AI tools for artisanal food producers.
          </p>
          <SubscribeForm />
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.ogImage || post.image || `${SITE_URL}/images/og/logo.png`,
            datePublished: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blog/${slug}`,
            },
            author: {
              "@type": "Person",
              name: post.author || "Andrea",
            },
            publisher: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Food Tech Bootcamp",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/logo/logo-ftb.png`,
              },
            },
          }),
        }}
      />
    </div>
  );
}
