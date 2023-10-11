import { Badge } from "@/components/badge";
import { PostPreview } from "./post-preview";

const posts: {
  title: string;
  description: string;
  tags: Badge[];
}[] = [
  {
    title: "Svelte > React. Here's why.",
    description: "9/29/2023",
    tags: ["react", "svelte"],
  },
  {
    title: "Tezos & Svelte: Creating your first dApp.",
    description: "9/18/2023",
    tags: ["tezos", "svelte"],
  },
  {
    title: "Breaking down New Aeven - an MMO [i tried] to build in JS.",
    description: "8/09/2023",
    tags: ["gaming", "node.js"],
  },
];

export const PostList = () => {
  const postCount: number = posts.length;

  return (
    <>
      <div className="space-y-2">
        {posts.map((post, index) => (
          <PostPreview
            key={`post-${index}`}
            title={post.title}
            description={post.description}
            tags={post.tags}
          />
        ))}
        <div className="flex text-xs text-muted-foreground justify-end pt-2">
          <p>
            {postCount}/{postCount} posts returned.
          </p>
        </div>
      </div>
    </>
  );
};
