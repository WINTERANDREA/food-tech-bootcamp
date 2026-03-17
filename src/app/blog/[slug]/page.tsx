import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getAllPosts } from "@/lib/content";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { SITE_URL } from "@/lib/constants";

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
        images: [{ url: post.ogImage || post.image }],
        type: "article",
        publishedTime: post.date,
        authors: ["Food Tech Bootcamp"],
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
        <Link
          href="/#blog"
          className="inline-flex items-center text-sm text-crosta hover:text-terra transition-colors mb-8 font-body"
        >
          ← Back to updates
        </Link>

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
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.ogImage || post.image,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Food Tech Bootcamp",
            },
            publisher: {
              "@type": "Organization",
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
