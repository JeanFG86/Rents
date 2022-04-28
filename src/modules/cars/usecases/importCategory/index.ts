import { ImportCategoryController } from './ImportCategoryController'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

const importcategoryUseCase = new ImportCategoryUseCase()
export const importCategoryController = new ImportCategoryController(importcategoryUseCase)
