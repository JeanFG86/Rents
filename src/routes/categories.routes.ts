import { Router } from 'express'
import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({ ...request.body })

  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list()

  return response.json(all)
})

export { categoriesRoutes }
