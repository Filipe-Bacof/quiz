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
    <div className="width-[80%] m-[10px] flex h-[100px] min-w-[500px]">
      <div className="relative flex flex-1">
        {/* front */}
        <div className="absolute flex h-full w-full items-center rounded-lg bg-white p-[15px] text-black">
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
        <div className="absolute flex h-full w-full"></div>
      </div>
    </div>
  )
}
