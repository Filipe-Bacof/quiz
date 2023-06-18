import AnswerModel from '@/model/answer'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterColor: string
}

export default function Answer(props: AnswerProps) {
  const answer = props.value

  return (
    <div className="flex">
      <div className="">
        {/* front */}
        <div className="">
          <div className="">{props.letter}</div>
          <div className="">{answer.value}</div>
        </div>
        {/* back */}
        <div className=""></div>
      </div>
    </div>
  )
}
