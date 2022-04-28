import { Category } from '../module/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository'

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName (name: string): Category {
    throw new Error()
  }

  list (): Category[] {
    throw new Error()
  }

  create ({ name, description }: ICreateCategoryDTO): void {
    throw new Error()
  }
}
