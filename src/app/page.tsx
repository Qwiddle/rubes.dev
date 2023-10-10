import { PostList } from "@/components/post-list";
import { ProjectList } from "@/components/project-list";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="w-full space-y-4">
          <h2 className="font-semibold text-gray-800 tracking-tight">
            Introduction
          </h2>
          <p className="text-sm text-muted-foreground">
            I&lsquo;m Andrew Rubenstein, a dynamic Project Manager and adept
            Frontend Developer who specializes in frontend development with the
            latest-and-greatest of frontend frameworks including React, Next.js,
            and Svelte. With a foundation rooted in technical expertise and
            enhanced by strategic project management skills, I&lsquo;m ready to
            help you transform your ideas into interactive, user-centric digital
            experiences.
          </p>
        </div>
        <div className="w-full space-y-4">
          <h2 className="font-semibold text-gray-900 tracking-tight">
            Latest Projects
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ProjectList />
          </div>
        </div>
        <div className="w-full space-y-4">
          <h2 className="font-semibold text-gray-900 tracking-tight">
            Latest Posts
          </h2>
          <PostList />
        </div>
      </div>
    </>
  );
}
