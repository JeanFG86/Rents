import { Response, Request } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export class ListCategoriesController {
  constructor (private readonly categoriesUseCase: ListCategoriesUseCase) {}
  handle (request: Request, response: Response): Response {
    const all = this.categoriesUseCase.execute()

    return response.json(all)
  }
}
