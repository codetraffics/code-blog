import React from "react";
import Markdown from "markdown-to-jsx";
import { getPostMetadata } from "@/utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";

interface BlogPostPageProps {
  params: { slug: string; bio: string };
}

const getPostContent = (slug: string) => {
  const folder = "blogs/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata("blogs");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  const desc = params?.bio ? params?.bio : "";
  const newId = id.toUpperCase();
  return {
    title: {
      absolute: `Code-Blog ${newId.replaceAll("_", " ")}`,
    },
    description: desc,
  };
}

const BlogContent = (props: BlogPostPageProps) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
};

export default BlogContent;
