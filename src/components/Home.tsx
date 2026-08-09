import ProjectCard from "@/components/ProjectCard.tsx"
import { useEffect, useState } from "react"
import { supabase } from "@/supabaseClient.ts"

export default function Home() {
  const [projects, setProjects] = useState([])

  async function getProjects() {
    const { data, error } = await supabase.rpc('get_projects', {})
    if (error) {
      console.error(error)
      return
    }
    setProjects(data)
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div className="flex flex-col gap-3 mx-3">
      <h1 className="text-3xl mt-3 self-center">Projects I've Worked on: </h1>
      <div className="grid h-full grid-cols-[repeat(auto-fit,minmax(min(33rem,100%),1fr))] gap-3">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}