import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMediaQuery } from "@/components/use-media-query.ts"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {Menu, X } from "lucide-react"
import { Link } from "react-router"

export default function NavBar() {
  const isDesktop = useMediaQuery("(min-width: 48rem)");

  return isDesktop ? (
    <div className="flex flex-col items-center justify-center gap-3 bg-popover/70 p-5">
      <img
        className="rounded-full md:h-35 md:w-35 lg:h-40 lg:w-40 xl:h-50 xl:w-50"
        src="https://avatars.githubusercontent.com/u/65154517"
      ></img>
      <h1>Cecilia Kuntze</h1>
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
        <a
          href="https://github.com/Cecilua"
          className="text-underline flex flex-row items-center gap-3 justify-self-end pr-3 underline hover:text-accent"
        >
          <i className="bi bi-github text-2xl"></i>
          Github
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/cecilia-kuntze-a208a43ab/"
          className="text-underline flex flex-row items-center gap-3 justify-self-start pl-3 underline hover:text-accent"
        >
          <i className="bi bi-linkedin text-2xl"></i>
          LinkedIn
        </a>
      </div>
      <div className="grid w-full grid-cols-[1fr_auto_auto_auto_1fr] items-center text-xl">
        <Link className="flex justify-self-end pr-10 hover:text-accent" to="/">
          Home
        </Link>
        <span>|</span>
        <Link
          className="flex justify-self-center px-10 hover:text-accent"
          to="/"
        >
          About Me
        </Link>
        <span>|</span>
        <Link
          className="flex justify-self-start pl-10 hover:text-accent"
          to="/"
        >
          Resume
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex w-full flex-row items-center gap-3 bg-popover/70 p-5">
      <Drawer swipeDirection={"left"}>
        <DrawerTrigger>
          <Menu size={35} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-center font-sans">
            <DrawerClose>
              <X size={35} />
            </DrawerClose>
            <DrawerTitle>Cecilia Kuntze</DrawerTitle>
            <DrawerDescription>
              3rd Year Software Engineering Student
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
              <a
                href="https://github.com/Cecilua"
                className="text-underline flex flex-row items-center gap-3 justify-self-end pr-3 underline hover:text-accent"
              >
                <i className="bi bi-github text-2xl"></i>
                Github
              </a>
              <span>|</span>
              <a
                href="https://www.linkedin.com/in/cecilia-kuntze-a208a43ab/"
                className="text-underline flex flex-row items-center gap-3 justify-self-start pl-3 underline hover:text-accent"
              >
                <i className="bi bi-linkedin text-2xl"></i>
                LinkedIn
              </a>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Avatar size="lg">
        <AvatarImage src="https://avatars.githubusercontent.com/u/65154517" />
        <AvatarFallback>CK</AvatarFallback>
      </Avatar>
      <div className="flex grow">Cecilia Kuntze</div>
    </div>
  )
}