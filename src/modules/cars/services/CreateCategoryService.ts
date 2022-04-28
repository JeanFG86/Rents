import { ICategoriesRepository } from '../repositories/ICategoriesRepository'

interface IRequest{
  name: string
  description: string
}

export class CreateCategoryService {
  constructor (private readonly categoriesRepository: ICategoriesRepository) {}
  execute ({ description, name }: IRequest): void {
    const categoriesRepository = this.categoriesRepository
    if (categoriesRepository.findByName(name) != null) {
      throw new Error('Category already exists!')
    }

    categoriesRepository.create({ name, description })
  }
}
