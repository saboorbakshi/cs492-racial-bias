import { caseStudies } from '@/data'
import QuizContent from './QuizContent'

export async function generateStaticParams() {
  return caseStudies.map((_, index) => ({
    case: (index + 1).toString(),
  }))
}

export default function CaseStudyQuizPage({ params }: { params: { case: string } }) {
  return <QuizContent caseParam={params.case} />
}
