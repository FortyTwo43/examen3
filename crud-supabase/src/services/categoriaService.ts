import { CategoriaRepository } from "../repositories/categoriaRepository"
import type { Categoria, CategoriaInput } from "../types/categoria"

export class CategoriaService {
  static getAll(): Categoria[] {
    return CategoriaRepository.getAll()
  }

  static create(input: CategoriaInput): Categoria {
    return CategoriaRepository.create(input)
  }
}