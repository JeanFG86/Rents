import { Router } from 'express'
import multer from 'multer'
import { createCategoryController } from '../modules/cars/usecases/createCategory'
import { importCategoryController } from '../modules/cars/usecases/importCategory'
import { createListCategoryController } from '../modules/cars/usecases/listCategories'

const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
  return createListCategoryController.handle(request, response)
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }
