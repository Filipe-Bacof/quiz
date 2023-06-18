import Question from '@/components/Question'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'
import { useState } from 'react'

const questionMock = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.wrong('verde'),
  AnswerModel.wrong('azul'),
  AnswerModel.wrong('vermelho'),
  AnswerModel.right('preto'),
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  function answerProvided(index: number) {
    console.log(index)
    setQuestion(question.replyWith(index))
  }

  return (
    <main className="">
      <Question value={question} answerProvided={answerProvided} />
    </main>
  )
}
