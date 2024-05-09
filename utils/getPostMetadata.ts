import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = (basePath: string) => {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename: string) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      read_time: matterResult.data.read_time,
      blog_date: matterResult.data.blog_date,
      bio: matterResult.data.description,
      slug: filename.replaceAll(".md", ""),
    };
  });
  return posts;
};
