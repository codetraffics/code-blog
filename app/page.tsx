import PostCard from "@/components/PostCard";
import { getPostMetadata } from "@/utils/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata("blogs");
  return (
    <main>
      <h1 className="heading">
        The Most Common Software Development Challenges & How to Solve Them
      </h1>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return <PostCard post={post} key={postIndex} />;
        })}
      </div>
    </main>
  );
}
