import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";

export const GithubHover = () => (
  <div className="flex justify-between space-x-4">
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/24196928" />
      <AvatarFallback>AR</AvatarFallback>
    </Avatar>
    <div className="space-y-1">
      <h4 className="text-sm font-semibold">@qwiddle</h4>
      <p className="text-sm">creating tezos stuff sometimes</p>
      <div className="flex items-center pt-2">
        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
        <span className="text-xs text-muted-foreground">
          Joined December 2016
        </span>
      </div>
    </div>
  </div>
);
