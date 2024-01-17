import { Twitter, Github } from "lucide-react";

export const SiteFooter = () => {
  return (
    <div className="flex justify-between items-center pb-4">
      <p className="text-xs font-medium text-muted-foreground">
        &copy; 2021 - {new Date().getFullYear()} Andrew Rubenstein
      </p>
      <div className="sm:hidden md:flex gap-4 text-muted-foreground">
        <a
          className="flex space-x-2 items-center cursor-pointer hover:hover-text"
          href="https://twitter.com/TweakerTez"
          target="about:blank"
        >
          <Twitter className="h-4 w-4 text-muted-foreground" />
          <p className="text-xs font-medium underline">@tweakertez</p>
        </a>
        <a
          className="flex space-x-2 items-center cursor-pointer hover:hover-text"
          href="https://github.com/Qwiddle"
          target="about:blank"
        >
          <Github className="h-4 w-4 text-muted-foreground" />
          <p className="text-xs font-medium underline">@qwiddle</p>
        </a>
      </div>
    </div>
  );
};
