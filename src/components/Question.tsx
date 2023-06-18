import QuestionModel from '@/model/question'

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return <div className="flex">{question && question.attain}</div>
}
