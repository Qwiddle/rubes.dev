import { PostPreview } from "./post-preview";

export const PostList = () => {
  return (
    <>
      <div className="space-y-2">
        <PostPreview
          title="Svelte > React. Here's why."
          description="9/29/2023"
          tags={["react", "svelte"]}
        />
        <PostPreview
          title="Tezos & Svelte: Creating your first dApp."
          description="9/18/2023"
          tags={["tezos", "svelte"]}
        />
        <PostPreview
          title="Breaking down New Aeven - an MMO [i tried] to build in JS."
          description="8/09/2023"
          tags={["gaming", "node.js"]}
        />
        <div className="flex text-xs text-muted-foreground justify-end pt-2">
          <p>3/3 posts returned.</p>
        </div>
      </div>
    </>
  );
};
