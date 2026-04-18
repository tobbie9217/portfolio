import DesignSection from "@/components/section/design-section";
import ProjectsSection from "@/components/section/projects-section";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <ProjectsSection />
      <section id="design">
        <DesignSection />
      </section>
    </main>
  );
}
