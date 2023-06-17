import { NextRequest, NextResponse } from 'next/server'
import questions from '../../../QuestionsDB'

export const GET = (req: NextRequest, res: NextResponse) => {
  // http://localhost:3000/api/questions/quiz/random

  const numbers = questions.map((question) => question.id)

  const randomNumbers = numbers
    .map((num) => ({ value: num, random: Math.random() }))
    .sort((obj1, obj2) => obj1.random - obj2.random)

  return NextResponse.json({
    status: 200,
    body: randomNumbers.map((num) => num.value),
  })
}
