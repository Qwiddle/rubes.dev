import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { GithubHover } from "./github-hover";
import SocialHover from "./social-hover";
import { NavigationLink } from "./nav/nav-link";

export const ProfileHeader = async (): Promise<React.ReactElement> => {
  return (
    <>
      <div className="flex justify-between space-x-8">
        <div className="flex space-y-1 items-center gap-x-4">
          <Avatar className="mt-1">
            <AvatarImage src="https://avatars.githubusercontent.com/u/24196928?v=4" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-md tracking-tight hover-text font-semibold">Andrew Rubenstein</h2>
            <p className="text-sm text-muted-foreground">frontend developer. let&rsquo;s build the future.</p>
          </div>
        </div>
        <div className="gap-x-4 self-end md:inline-flex hidden">
          <NavigationLink text="home" href="/" />
          <NavigationLink text="posts" href="/posts" />
          <NavigationLink text="projects" href="/projects" />
          <SocialHover preview="github">
            <GithubHover />
          </SocialHover>
          <SocialHover preview="twitter">
            <GithubHover />
          </SocialHover>
        </div>
      </div>
      <Separator className="mt-2" />
    </>
  );
};
