import ProjectCard from "@/components/ProjectCard.tsx"
import { useMediaQuery } from "@/components/use-media-query.ts"

export default function Home() {
  const isLarge = useMediaQuery("(min-width: 70rem)")
  return (
    <div className="h-full mt-3 ml:0 sm:ml-3 grid grid-cols-[repeat(auto-fit,minmax(min(33rem, 100%),1fr))]">
      <ProjectCard key={1} />
      <ProjectCard key={2} />
      <ProjectCard key={3} />
      <ProjectCard key={4} />
      <ProjectCard key={5} />
    </div>
  )
}