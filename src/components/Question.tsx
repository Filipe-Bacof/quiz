import QuestionModel from '@/model/question'
import Enunciation from './Enunciation'
import Answer from './Answer'

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={i}
          value={answer}
          index={i}
          letter="A"
          letterBgColor="bg-yellow-500"
        />
      )
    })
  }

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <Enunciation text={question.enunciation} />
      {renderAnswers()}
    </div>
  )
}
