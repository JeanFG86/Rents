import { Category } from '../module/Category'

interface ICreateCategoryDTO{
  name: string
  description: string
}

export class CategoryRepository {
  private readonly categories: Category[]

  constructor () {
    this.categories = []
  }

  create ({ name, description }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }
}
