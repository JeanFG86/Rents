import { ISpecificationsRepository } from '../../repositories/ISpecificationRepository'

interface IRequest{
  name: string
  description: string
}

export class CreateSpecificationUseCase {
  constructor (private readonly specificationsRepository: ISpecificationsRepository) {}
  execute ({ description, name }: IRequest): void {
    if (this.specificationsRepository.findByName(name) != null) {
      throw new Error('Specification already exists!')
    }
    this.specificationsRepository.create({ name, description })
  }
}
