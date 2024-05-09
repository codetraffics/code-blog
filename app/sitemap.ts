import { getPostMetadata } from "@/utils/getPostMetadata";
import { MetadataRoute } from "next";
require("dotenv").config();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getPostMetadata("blogs");

  const postEntries: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
