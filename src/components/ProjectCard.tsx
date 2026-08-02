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

export default function ProjectCard() {
  const isDesktop = useMediaQuery("(min-width: 48rem)")

  return isDesktop ? (
    <Card className="mr-3 mb-3 flex flex-row gap-0 py-0">
      <div className="xl:w-1/2">
        <img
          alt="my dog"
          src="https://avatars.githubusercontent.com/u/65154517"
          className="inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col grow gap-3 px-0 pt-(--card-spacing)">
        <CardHeader className="flex flex-col text-center">
          <CardTitle>Poppy</CardTitle>
          <CardDescription>So cute</CardDescription>
        </CardHeader>
        <CardContent  className="flex grow">
          <p className="">tetstststststst</p>
        </CardContent>
        <CardFooter className="w-full rounded-bl-none">
          <div className="flex w-full flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
          </div>
        </CardFooter>
      </div>
    </Card>
  ) : (
    <Card className=" w-full mr-3 mb-3 flex flex-col gap-3 py-0">
      <div className="h-2/3">
        <img
          alt="my dog"
          src="https://avatars.githubusercontent.com/u/65154517"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 py-(--card-spacing)">
        <CardHeader className="flex grow flex-col text-center">
          <CardTitle>Poppy</CardTitle>
          <CardDescription>So cute</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}