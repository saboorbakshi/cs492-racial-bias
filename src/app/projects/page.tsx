import { projects } from '@/data'

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-7 sm:gap-8">
      {projects.map((item, index) => (
        <a
          key={index}
          className="flex flex-col gap-3 group"
          target="_blank"
          rel="noopener noreferrer"
          href={item.url}
        >
          <div className="flex items-center justify-center bg-bgSecondary group-hover:bg-bgTertiary aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
            <video
              src={item.src}
              className="max-h-[90%] max-w-[85%] object-contain rounded-none group-hover:scale-95 transition-transform duration-500 ease-in-out"
              loop
              muted
              playsInline
              autoPlay
            ></video>
          </div>
          <div>
            <span className="sm:text-base group-hover:underline">{item.name}</span>
            <span className="sm:text-base text-fgSecondary"> — {item.year}</span>
            <div className="sm:text-base text-fgSecondary">{item.desc}</div>
            <div className="sm:text-base text-fgSecondary">{item.tools}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
