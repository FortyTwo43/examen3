import { database } from "../types/database"
import type { Categoria, CategoriaInput } from "../types/categoria"

export class CategoriaRepository {
  static getAll(): Categoria[] {
    return database.categorias
  }

  static getById(id: number): Categoria | undefined {
    return database.categorias.find(cat => cat.id === id)
  }

  static create(input: CategoriaInput): Categoria {
    const newCat: Categoria = {
      id: database.categorias.length + 1,
      ...input
    }
    database.categorias.push(newCat)
    return newCat
  }
}