import Link from "next/link";
import { FC } from "react";

interface PostCardProps {
  title: string;
  bio: string;
  read_time: string;
  blog_date: string;
  slug: string;
}

interface PostProps {
  post: PostCardProps;
}

const PostCard: FC<PostProps> = (props) => {
  const { post } = props;
  return (
    <Link className="unstyled" href={`/blog/${post.slug}`}>
      <div className="postCard">
        <h3>{post.title}</h3>
        <p>{post.bio}</p>

        <div className="statsContainer">
          <div>
            <h5>Read Time</h5>
            <p>{post.read_time}</p>
          </div>
          <div>
            <h5>Published Date</h5>
            <p>{post.blog_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
