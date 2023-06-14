import QuestionModel from './question'
import AnswerModel from './answer'

describe('QuestionModel', () => {
  it('should create an instance of QuestionModel with correct values', () => {
    const id = 1
    const enunciation = 'What is the capital of France?'
    const answers = [
      new AnswerModel('Paris', true, false),
      new AnswerModel('London', false, false),
      new AnswerModel('Berlin', false, false),
      new AnswerModel('Madrid', false, false),
    ]
    const attain = false

    const question = new QuestionModel(id, enunciation, answers, attain)

    expect(question.id).toBe(id)
    expect(question.enunciation).toBe(enunciation)
    expect(question.answers).toEqual(answers)
    expect(question.attain).toBe(attain)
  })

  it.skip('should return the correct answered status using the answered getter', () => {
    const answersWithRevealed = [
      new AnswerModel('Paris', true, false),
      // new AnswerModel('Paris', true, true),
      // primeiro preciso entender o que de fato irá fazer o Question Model
      new AnswerModel('London', false, false),
      new AnswerModel('Berlin', false, false),
      new AnswerModel('Madrid', false, false),
    ]
    const answersWithoutRevealed = [
      new AnswerModel('Paris', true, false),
      new AnswerModel('London', false, false),
      new AnswerModel('Berlin', false, false),
      new AnswerModel('Madrid', false, false),
    ]

    const questionWithRevealed = new QuestionModel(
      1,
      'What is the capital of France?',
      answersWithRevealed,
      false,
    )
    const questionWithoutRevealed = new QuestionModel(
      2,
      'What is the capital of Germany?',
      answersWithoutRevealed,
      false,
    )

    expect(questionWithRevealed.answered).toBe(true)
    expect(questionWithoutRevealed.answered).toBe(false)
  })
})
