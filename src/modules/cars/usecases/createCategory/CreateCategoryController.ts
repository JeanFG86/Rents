import { Response, Request } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  constructor (private readonly createCategoryUseCase: CreateCategoryUseCase) {

  }

  handle (request: Request, response: Response): Response {
    this.createCategoryUseCase.execute({ ...request.body })

    return response.status(201).send()
  }
}
