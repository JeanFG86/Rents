import { Specification } from '../../module/Specification'
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationRepository'

export class SpecificationRepository implements ISpecificationsRepository {
  private readonly specifications: Specification[]

  constructor () {
    this.specifications = []
  }

  create ({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName (name: string): Specification | undefined {
    return this.specifications.find((specification) => specification.name === name)
  };
}
