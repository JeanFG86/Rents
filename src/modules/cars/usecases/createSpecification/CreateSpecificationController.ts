import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

export class CreateSpecificationController {
  constructor (private readonly createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle (request: Request, response: Response): Response {
    this.createSpecificationUseCase.execute({ ...request.body })
    return response.status(201).send()
  }
}
