import { Category } from '../../module/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

export class ListCategoriesUseCase {
  constructor (private readonly categoriesRepository: ICategoriesRepository) {}
  execute (): Category[] {
    return this.categoriesRepository.list()
  }
}
