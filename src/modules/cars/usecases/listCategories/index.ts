import { CategoryRepository } from '../../repositories/implementations/CategoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const createListCategoryUseCase = new ListCategoriesUseCase(CategoryRepository.getInstance())
export const createListCategoryController = new ListCategoriesController(createListCategoryUseCase)
