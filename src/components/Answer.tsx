import AnswerModel from '@/model/answer'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterBgColor: string
  answerProvided: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const answer = props.value

  return (
    <div
      onClick={() => props.answerProvided(props.index)}
      className="width-[80%] m-[10px] flex h-[100px] min-w-[500px]"
    >
      <div className="relative flex flex-1">
        {!answer.revealed ? (
          <div
            id="front"
            className="absolute flex h-full w-full items-center rounded-lg bg-white p-[15px] text-black"
          >
            <div
              className={`${props.letterBgColor} mr-[20px] flex h-[40px] w-[40px] items-center justify-center rounded-full text-[1.3rem] font-bold text-white`}
            >
              {props.letter}
            </div>
            <div className="text-[1.3rem] font-bold capitalize">
              {answer.value}
            </div>
          </div>
        ) : (
          <div id="back" className="absolute flex h-full w-full">
            {answer.correct ? (
              <div
                id="right"
                className="flex flex-1 flex-col items-center justify-center rounded-lg bg-green-700"
              >
                <div>A resposta certa é...</div>
                <div className="text-2xl font-bold capitalize">
                  {answer.value}
                </div>
              </div>
            ) : (
              <div
                id="wrong"
                className="flex flex-1 flex-col items-center justify-center rounded-lg bg-red-600"
              >
                <div>A resposta informada está errada...</div>
                <div className="text-2xl font-bold capitalize">
                  {answer.value}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
