import type { MDXComponents as MDXComponentsType } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponentsType = {
  h1: (props) => (
    <h1
      className="font-headline text-3xl font-bold text-caglio mb-6 mt-12"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-headline text-2xl font-bold text-caglio mb-4 mt-10"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-headline text-xl font-bold text-caglio mb-3 mt-8"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="font-body text-base text-caglio/90 leading-relaxed mb-4"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-terra pl-6 my-6 font-body text-base italic text-crosta"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-sm bg-dark-surface px-1.5 py-0.5 text-rame"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-dark-surface p-6 overflow-x-auto my-6 font-mono text-sm text-caglio/80"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 font-body text-caglio/90 space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 font-body text-caglio/90 space-y-1" {...props} />
  ),
  a: (props) => (
    <a
      className="text-terra hover:text-crosta transition-colors duration-300 underline underline-offset-2"
      {...props}
    />
  ),
  img: (props) => (
    <Image
      className="w-full my-6"
      width={1200}
      height={675}
      alt={props.alt || ""}
      src={props.src || ""}
      loading="lazy"
    />
  ),
  strong: (props) => <strong className="font-medium text-caglio" {...props} />,
};
