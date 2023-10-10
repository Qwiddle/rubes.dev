import { ProjectList } from "@/components/project-list";

export default function Posts() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-2">
        <ProjectList />
      </div>
    </>
  );
}
