import { CategoryRepository } from '../../repositories/implementations/CategoriesRepository'
import { ImportCategoryController } from './ImportCategoryController'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

const importcategoryUseCase = new ImportCategoryUseCase(CategoryRepository.getInstance())
export const importCategoryController = new ImportCategoryController(importcategoryUseCase)
