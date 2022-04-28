import { CategoryRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

const createCategoryUseCase = new CreateCategoryUseCase(CategoryRepository.getInstance())
export const createCategoryController = new CreateCategoryController(createCategoryUseCase)
