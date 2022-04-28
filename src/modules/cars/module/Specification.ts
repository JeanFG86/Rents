import { v4 as uuidV4 } from 'uuid'

export class Specification {
  id?: string
  name?: string
  description?: string
  created_at?: Date

  constructor () {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
