export interface Categoria {
    id: number
    descripcion: string
}
  
  export type CategoriaInput = Omit<Categoria, 'id'>
  export type CategoriaUpdate = Partial<CategoriaInput> 
