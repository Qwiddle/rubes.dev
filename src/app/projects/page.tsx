import { ProjectList } from "@/components/project-list";

export default function Projects() {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectList />
      </div>
    </>
  );
}
