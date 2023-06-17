import { NextRequest, NextResponse } from 'next/server'
import questions from '../QuestionsDB'

export const GET = (req: NextRequest, res: NextResponse) => {
  const { searchParams } = new URL(req.url)
  // http://localhost:3000/api/questions?id=33
  const id = Number(searchParams.get('id'))

  if (id) {
    const questionByIdOrNothing = questions.filter(
      (question) => question.id === id,
    )

    if (questionByIdOrNothing.length === 1) {
      const selectedQuestion = questionByIdOrNothing[0]
      return NextResponse.json({
        status: 200,
        body: selectedQuestion.convertToObject(),
      })
    } else {
      return NextResponse.json({
        status: 204,
      })
    }
  } else {
    return NextResponse.json({
      status: 200,
      body: questions.map((question) => question.convertToObject()),
    })
  }
}
