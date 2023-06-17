import { NextRequest, NextResponse } from 'next/server'
import questions from '../../QuestionsDB'

export const GET = (req: NextRequest, res: NextResponse) => {
  // http://localhost:3000/api/questions/quiz

  return NextResponse.json({
    status: 200,
    body: questions.map((question) => question.id),
  })
}
