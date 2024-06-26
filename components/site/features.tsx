// DONE REVIEWING: GITHUB COMMIT
import {
  ArrowRightCircleIcon,
  FileCheckIcon,
  Laptop2Icon,
  LayoutDashboardIcon,
  LineChartIcon,
  LucideProps,
  RocketIcon
} from "lucide-react"
import {ForwardRefExoticComponent, RefAttributes} from "react"

const features: {
  id: number
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  title: string
  description: string
}[] = [
  {
    id: 0,
    icon: LineChartIcon,
    title: "Real-time Insights At Your Finger-tips",
    description:
      "Track project progress with live analytics that provide actionable insights. Monitor key metrics and make informed decisions to keep projects on track."
  },
  {
    id: 1,
    icon: FileCheckIcon,
    title: "Effortless Task Management",
    description:
      "Organize tasks seamlessly with our intuitive interface. Assign tasks, set priorities, and track deadlines efficiently to ensure smooth project execution."
  },
  {
    id: 2,
    icon: Laptop2Icon,
    title: "Create Stunning Websites Easily",
    description:
      "Build responsive and visually captivating websites with our powerful drag-and-drop builder. Customize layouts, add content, and launch your site in no time."
  },
  {
    id: 3,
    icon: RocketIcon,
    title: "Boost Team Efficiency",
    description:
      "Facilitate collaboration among team members with integrated communication tools. Share files, exchange feedback, and work together seamlessly."
  },
  {
    id: 4,
    icon: LayoutDashboardIcon,
    title: "Personalized Project Dashboards",
    description:
      "Customize your dashboard to display the metrics and data most relevant to your projects. Gain a clear overview of progress and performance."
  },
  {
    id: 5,
    icon: ArrowRightCircleIcon,
    title: "Manage On-The-Go",
    description:
      "Access your projects and collaborate with your team from anywhere with our mobile-friendly interface. Stay productive whether you're in the office or on the move."
  }
]

const Features = function Features() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-xl-7 px-6 lg:px-8">
        <div className="mx-auto max-w-xl-2 lg:mx-0">
          <h2 className="text-base font-semi-bold leading-7 text-secondary">
            Comprehensive Solutions
          </h2>
          <p className="mt-2 text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
            Are You Ready To Revolutionize Your <span className="text-secondary">Agency</span>
            &apos;s Work-flow?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore real-time analytics, intuitive task organization, and a powerful website builder
            to streamline projects and boost collaboration effortlessly.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-xl-2 grid-cols-1 gap-8 text-base leading-7 text-muted-foreground sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.id} className="relative pl-9">
              <dt className="inline font-semi-bold text-foreground">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-secondary"
                />
                {feature.title}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Features
