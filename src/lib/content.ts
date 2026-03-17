import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "src/content/projects");
const blogDir = path.join(process.cwd(), "src/content/blog");

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  question: string;
  seoDescription: string;
  status: "active" | "upcoming" | "completed";
  tag: "experiment" | "research";
  sector: string;
  image: string;
  ogImage: string;
  date: string;
  updated?: string;
}

export interface PostFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  seoDescription: string;
  tags: string[];
  image: string;
  ogImage: string;
  date: string;
  author: string;
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"));
}

export function getProject(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...(data as ProjectFrontmatter), content };
}

export function getAllProjects() {
  return getMdxFiles(projectsDir).map((file) => {
    const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
    const { data } = matter(raw);
    return data as ProjectFrontmatter;
  });
}

export function getPost(slug: string) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...(data as PostFrontmatter), content };
}

export function getAllPosts() {
  return getMdxFiles(blogDir)
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
      const { data } = matter(raw);
      return data as PostFrontmatter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
