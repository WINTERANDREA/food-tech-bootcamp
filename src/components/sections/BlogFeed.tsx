import { getAllPosts } from "@/lib/content";
import { BlogCard } from "@/components/ui/BlogCard";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function BlogFeed() {
  const posts = getAllPosts();

  return (
    <section id="blog" className="bg-dark py-section px-5 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <h2 className="font-headline text-xl md:text-2xl font-bold text-caglio mb-block">
            What&apos;s new
          </h2>
        </SectionReveal>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <SectionReveal key={post.slug}>
                <BlogCard post={post} />
              </SectionReveal>
            ))}
          </div>
        ) : (
          <SectionReveal>
            <p className="font-body text-base text-crosta">
              First post coming soon.
            </p>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
