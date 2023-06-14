export default class QuestionModel {
  #id: number
  #enunciation: string
  #answers: any[]
  #attain: boolean
  // #answered: boolean

  constructor(id: number, enunciation: string, answers: any[], attain = false) {
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
    // fix me: implementar este método
    return false
  }
}
