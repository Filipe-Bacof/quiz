import { NextRequest, NextResponse } from 'next/server'
import questions from '../QuestionsDB'

export const GET = (req: NextRequest, res: NextResponse) => {
  // const { searchParams } = new URL(req.url)
  // http://localhost:3000/api/questions?id=33
  // const id = searchParams.get('id')
  return NextResponse.json({
    status: 200,
    body: questions[0].convertToObject(),
  })
}
