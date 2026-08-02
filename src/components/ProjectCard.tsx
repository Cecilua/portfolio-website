import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useMediaQuery } from "@/components/use-media-query.ts"

export default function ProjectCard(project: Project) {
  const isDesktop = useMediaQuery("(min-width: 48rem)")

  return isDesktop ? (
    <Card className="mr-3 mb-3 flex flex-row gap-0 py-0">
      <div className="xl:w-1/2">
        <img
          alt={project.image_alt}
          src={project.image_url}
          className="inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex grow flex-col gap-3 px-0 pt-(--card-spacing)">
        <CardHeader className="flex flex-col text-center">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription>
            {project.url && (
              <a
                href={project.url ?? ""}
                className="underline hover:text-accent"
              >
                Link to Project
              </a>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex grow">{project.description}</CardContent>
        <CardFooter className="w-full rounded-bl-none">
          <div className="flex w-full flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Badge
                key={`${tag.tag}-${tag.type}`}
                className={tag.type == "Languages" ? `bg-primary` : `bg-accent`}
              >
                {tag.tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  ) : (
    <Card className="mr-3 mb-3 flex w-full flex-col gap-0 py-0">
      <div className="h-2/3">
        <img
          alt={project.image_alt}
          src={project.image_url}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex grow flex-col gap-3 pt-(--card-spacing)">
        <CardHeader className="flex flex-col text-center">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription>
            {project.url && (
              <a
                href={project.url ?? ""}
                className="underline hover:text-accent"
              >
                Link to Project
              </a>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex grow">{project.description}</CardContent>
        <CardFooter className="flex w-full">
          <div className="flex w-full flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Badge
                key={`${tag.tag}-${tag.type}`}
                className={tag.type == "Languages" ? `bg-primary` : `bg-accent`}
              >
                {tag.tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
