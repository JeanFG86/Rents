import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IRequest{
  name: string
  description: string
}

export class CreateCategoryUseCase {
  constructor (private readonly categoriesRepository: ICategoriesRepository) {}
  execute ({ name, description }: IRequest): void {
    const categoriesRepository = this.categoriesRepository
    if (categoriesRepository.findByName(name) != null) {
      throw new Error('Category already exists!')
    }

    categoriesRepository.create({ name, description })
  }
}
