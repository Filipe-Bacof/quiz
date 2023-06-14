import AnswerModel from './answer'

describe('AnswerModel', () => {
  it('should create an instance of AnswerModel with correct values', () => {
    const value = 'answer'
    const correct = true
    const revealed = false

    const answer = new AnswerModel(value, correct, revealed)

    expect(answer.value).toBe(value)
    expect(answer.correct).toBe(correct)
    expect(answer.revealed).toBe(revealed)
  })

  it('should return the correct value using getters', () => {
    const answer = new AnswerModel('answer', true, false)

    expect(answer.value).toBe('answer')
    expect(answer.correct).toBe(true)
    expect(answer.revealed).toBe(false)
  })
})
