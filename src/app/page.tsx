import Question from '@/components/Question'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'

export default function Home() {
  const questionTest = new QuestionModel(1, 'Melhor cor?', [
    AnswerModel.wrong('verde'),
    AnswerModel.wrong('azul'),
    AnswerModel.wrong('vermelho'),
    AnswerModel.right('preto'),
  ])

  return (
    <main className="">
      <Question value={questionTest} />
    </main>
  )
}
