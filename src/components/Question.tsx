import QuestionModel from '@/model/question'
import Enunciation from './Enunciation'
import Answer from './Answer'

const letters = [
  { value: 'A', color: 'bg-yellow-300' },
  { value: 'B', color: 'bg-pink-400' },
  { value: 'C', color: 'bg-cyan-300' },
  { value: 'D', color: 'bg-green-300' },
]

interface QuestionProps {
  value: QuestionModel
  answerProvided: (index: number) => void
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
          letter={letters[i].value}
          letterBgColor={letters[i].color}
          answerProvided={props.answerProvided}
        />
      )
    })
  }

  return (
    <div className="flex h-[100vh] flex-col items-center">
      <Enunciation text={question.enunciation} />
      {renderAnswers()}
    </div>
  )
}
