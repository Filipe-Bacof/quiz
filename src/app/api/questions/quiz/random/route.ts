import { NextRequest, NextResponse } from 'next/server'
import questions from '../../../QuestionsDB'
import { shuffle } from '@/functions/shuffle'

export const GET = (req: NextRequest, res: NextResponse) => {
  // http://localhost:3000/api/questions/quiz/random

  const ids = questions.map((question) => question.id)

  return NextResponse.json({
    status: 200,
    body: shuffle(ids),
  })
}
