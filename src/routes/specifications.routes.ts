import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const specificationRoutes = Router()
const specificationRepository = new SpecificationRepository()

specificationRoutes.post('/', (req, res) => {
  const createSpecificationService = new CreateSpecificationService(specificationRepository)

  createSpecificationService.execute({ ...req.body })
  return res.status(201).send()
})

export { specificationRoutes }
