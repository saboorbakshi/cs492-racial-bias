import { interviewees } from '@/data'
import TranscriptContent from './TranscriptContent'

export async function generateStaticParams() {
  return interviewees.map((person) => ({
    slug: person.name.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default function TranscriptPage({ params }: { params: { slug: string } }) {
  return <TranscriptContent slug={params.slug} />
}
