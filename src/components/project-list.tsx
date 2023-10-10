import { BookOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ProjectPreview } from "./project-preview";
import { projects } from "@/app/projects";

export const ProjectList = () => {
  return projects.map((project, index) => (
    <ProjectPreview
      key={index}
      header={project.name}
      description={project.description}
      icon={project.icon}
      link={project.link}
      content={project.content}
    />
  ));
};
