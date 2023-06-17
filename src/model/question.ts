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

  convertToObject() {
    return {
      id: this.#id,
      enunciation: this.#enunciation,
      answers: this.#answers.map((ans) => ans.convertToObject()),
      attain: this.#attain,
    }
  }
}
