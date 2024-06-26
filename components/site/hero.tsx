// DONE REVIEWING: GITHUB COMMIT
import {ArrowRightIcon, ChevronRightIcon} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {Button} from "../ui"

const Hero = function Hero() {
  // USING: tailwindui.com/ui.shadcn.com
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <svg
        aria-hidden="true"
        className="fixed inset-0 -z-10 h-full w-full stroke-foreground/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
        <defs>
          <pattern
            id="header-pattern-id"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse">
            <path fill="none" d="M.5 200V.5H200" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-border/20">
          <path
            strokeWidth={0}
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#header-pattern-id)" />
      </svg>
      <div
        aria-hidden="true"
        className="fixed left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-xl-3 sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary to-secondary opacity-20"
          style={{
            clipPath:
              "polygon(73% 51%, 91% 11%, 100% 46%, 97% 82%, 92% 84%, 75% 64%, 55% 47%, 46% 49%, 45% 62%, 50% 87%, 21% 64%, 0% 100%, 5% 51%, 21% 63%, 58% 0%, 73% 51%)"
          }}
        />
      </div>
      <div className="mx-auto max-w-xl-7 px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:px-8 lg:py-40">
        <div className="mx-auto max-w-xl-2 flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <p className="text-lg font-semi-bold leading-none text-foreground">
            agency<span className="text-primary">causes</span>.
          </p>
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href="/features" className="inline-flex space-x-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semi-bold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                What is new?
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-foreground">
                <span>Just released 1.0</span>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-muted-foreground" />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-xl-4 font-bold tracking-tight text-foreground sm:text-xl-6">
            Revolutionize Your <span className="text-primary">Agency</span>&apos;s Work-flow.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Boost project management, team collaboration, and website creation. Enjoy real-time
            analytics and intuitive task organization. Optimize your agency&apos;s performance
            today.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button variant="primary" asChild>
              <Link href="/agency">Get Started Today</Link>
            </Button>
            <Button variant="link" className="gap-2" asChild>
              <Link href="/features">
                Learn more
                <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 xl:ml-32">
          <Image
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"
            alt="App Screen-Shot"
            fill
            className="!static rounded-md bg-foreground/5 shadow-xl-2 ring-1 ring-foreground/10"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
