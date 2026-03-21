"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/constants";

function NotifyForm({ projectSlug }: { projectSlug: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interest: projectSlug }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-body text-sm text-rame py-2">
        We&apos;ll notify you.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 bg-dark border border-[var(--border-subtle)] text-caglio font-body text-sm px-3 py-2 placeholder:text-light-secondary focus:border-terra focus:outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 font-body font-medium text-xs uppercase tracking-wide bg-terra text-caglio px-4 py-2 hover:brightness-110 transition-all disabled:opacity-50"
      >
        {status === "loading" ? "..." : "Notify me"}
      </button>
    </form>
  );
}

function RelatedBlogLink({ slug }: { slug: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="inline-flex items-center font-body text-xs text-terra hover:text-crosta transition-colors group"
    >
      Read related post
      <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

function ComingSoonCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-dark-surface border border-[var(--border-medium)] overflow-hidden h-full">
      <div className="relative aspect-video overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover blur-sm scale-105 brightness-50"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-dark-surface" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-caglio/80 bg-dark/60 px-4 py-2">
            Coming soon
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <h3 className="font-headline text-xl leading-snug font-bold text-caglio mb-2">
          {project.title}
        </h3>
        <p className="font-body text-base italic text-crosta mb-auto">
          {project.question}
        </p>
        <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
          {project.relatedBlog && (
            <div className="mb-3">
              <RelatedBlogLink slug={project.relatedBlog} />
            </div>
          )}
          <p className="font-body text-xs text-crosta/50 mb-2">
            Get notified when we announce this experiment.
          </p>
          <NotifyForm projectSlug={project.slug} />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  if (project.comingSoon) {
    return <ComingSoonCard project={project} />;
  }

  return (
    <div className="flex flex-col bg-dark-surface border border-[var(--border-medium)] overflow-hidden h-full transition-all duration-500 hover:border-[var(--border-strong)]">
      <Link href={`/projects/${project.slug}`} className="group">
        <div className="relative aspect-video overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-dark-surface" />
          )}
        </div>
        <div className="p-6 pb-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <h3 className="font-headline text-xl leading-snug font-bold text-caglio mb-2 group-hover:text-terra transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-base italic text-crosta">
            {project.question}
          </p>
        </div>
      </Link>
      {project.relatedBlog && (
        <div className="mt-auto px-6 pb-6 pt-4">
          <div className="pt-4 border-t border-[var(--border-subtle)]">
            <RelatedBlogLink slug={project.relatedBlog} />
          </div>
        </div>
      )}
    </div>
  );
}
