import { writing } from '@/data'

export default function Writing() {
  return (
    <div className="flex flex-col gap-4">
      {writing.map((item, index) => (
        <a key={index} href={'/'} className="flex flex-col gap-2 group">
          <div>
            <div className="sm:text-base group-hover:underline">{item.title}</div>
            <div className="sm:text-base text-fgSecondary">{item.date}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
