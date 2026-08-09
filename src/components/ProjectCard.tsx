import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectCard(project: Project) {

  function getProjectURL(url: string): string {
    if (url.endsWith(".html")) {
      return url.split(".html")[0]
    }
    return url
  }

  return (
    <Card className="mr-3 mb-3 flex w-full flex-col gap-0 py-0">
      <div className="aspect-video h-90 w-full object-cover">
        <img
          alt={project.image_alt}
          src={project.image_url}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex grow flex-col gap-3 pt-(--card-spacing)">
        <CardHeader className="flex flex-col text-center">
          <div className="flex w-full items-center justify-between">
            <CardTitle className="text-xl">
              {project.title} - {project.year}
            </CardTitle>
            <Badge className={project.academic ? "bg-accent" : "bg-primary"}>
              {project.academic ? "Academic" : "Personal"}
            </Badge>
          </div>
          <CardDescription>
            {project.url && (
              <a
                href={getProjectURL(project.url) ?? ""}
                className="underline text-chart-4 hover:text-accent"
              >
                Link to Project
              </a>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex grow whitespace-pre-wrap">
          {project.description}
        </CardContent>
        <CardFooter className="flex w-full bg-chart-1/45">
          <div className="flex w-full flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Badge
                key={`${tag.tag}-${tag.type}`}
                className={
                  tag.type == "Languages"
                    ? `bg-chart-3`
                    : tag.type == "Frameworks and Libraries"
                      ? `bg-chart-2`
                      : `bg-primary`
                }
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
