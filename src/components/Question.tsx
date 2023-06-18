import QuestionModel from '@/model/question'
import Enunciation from './Enunciation'

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <Enunciation text={question.enunciation} />
    </div>
  )
}
