import { shuffle } from '@/functions/shuffle'
import AnswerModel from './answer'

export default class QuestionModel {
  #id: number
  #enunciation: string
  #answers: AnswerModel[]
  #attain: boolean

  constructor(
    id: number,
    enunciation: string,
    answers: AnswerModel[],
    attain = false,
  ) {
    this.#id = id
    this.#enunciation = enunciation
    this.#answers = answers
    this.#attain = attain
  }

  get id() {
    return this.#id
  }

  get enunciation() {
    return this.#enunciation
  }

  get answers() {
    return this.#answers
  }

  get attain() {
    return this.#attain
  }

  get answered() {
    for (const answer of this.#answers) {
      if (answer.revealed) return true
    }
    return false
  }

  replyWith(index: number): QuestionModel {
    const attain = this.#answers[index]?.correct
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i
      const mustReveal = selectedAnswer || answer.correct
      return mustReveal ? answer.reveal() : answer
    })
    return new QuestionModel(this.#id, this.#enunciation, answers, attain)
  }

  shuffleAnswers(): QuestionModel {
    const shuffledAnswers = shuffle(this.#answers)
    return new QuestionModel(
      this.#id,
      this.#enunciation,
      shuffledAnswers,
      this.#attain,
    )
  }

  convertToObject() {
    return {
      id: this.#id,
      enunciation: this.#enunciation,
      answered: this.answered,
      attain: this.#attain,
      answers: this.#answers.map((ans) => ans.convertToObject()),
    }
  }
}
