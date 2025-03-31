import Link from '@/components/Link'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="sm:text-base">
          Software Engineer with a deep appreciation for good design. Currently studying Computer
          Science at the University of Waterloo.
        </div>
        <div className="flex gap-2">
          <Link label="X" url="https://twitter.com/saboorbakshi" />
          <div>•</div>
          <Link label="Github" url="https://github.com/saboorbakshi" />
          <div>•</div>
          <Link label="LinkedIn" url="https://linkedin.com/in/saboor-bakshi" />
          <div>•</div>
          <Link label="Resume" url="/saboor-bakshi-resume.pdf" />
          <div>•</div>
          <Link label="Email" url="mailto:saboor.bakshi@uwaterloo.ca" />
        </div>
      </div>
    </div>
  )
}
