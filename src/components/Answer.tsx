import AnswerModel from '@/model/answer'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterBgColor: string
}

export default function Answer(props: AnswerProps) {
  const answer = props.value

  return (
    <div className="flex">
      <div className="">
        {/* front */}
        <div className="flex items-center rounded-lg bg-white p-[15px] text-black">
          <div
            className={`${props.letterBgColor} mr-[20px] flex h-[40px] w-[40px] items-center justify-center rounded-full text-[1.3rem] font-bold`}
          >
            {props.letter}
          </div>
          <div className="text-[1.3rem] font-bold capitalize">
            {answer.value}
          </div>
        </div>
        {/* back */}
        <div className="flex "></div>
      </div>
    </div>
  )
}
