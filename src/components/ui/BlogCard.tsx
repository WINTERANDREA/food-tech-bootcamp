import Link from "next/link";
import type { PostFrontmatter } from "@/lib/content";

export function BlogCard({ post }: { post: PostFrontmatter }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-dark-surface border border-[var(--border-medium)] p-6 transition-all duration-500 hover:border-[var(--border-strong)]"
    >
      <time className="block font-mono text-xs text-crosta mb-2">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h3 className="font-headline text-lg font-bold text-caglio mb-2 group-hover:text-terra transition-colors">
        {post.title}
      </h3>
      <p className="font-body text-sm text-crosta line-clamp-2">
        {post.excerpt}
      </p>
    </Link>
  );
}
