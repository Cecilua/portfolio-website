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
    <div className="h-full mt-3 ml:0 sm:ml-3 grid auto-rows-[minmax(0rem,40rem)] grid-cols-[repeat(auto-fit,minmax(min(33rem,100%),1fr))]">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}