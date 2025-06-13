import type { Categoria } from "./categoria"

export interface Flashcard {
    id: number
    question: string
    answer: string
    iamgeUrl: string
    category: Categoria[] //muchas categorias
}
  
  export type FlashcardInput = Omit<Flashcard, 'id'>
  export type FlashcardUpdate = Partial<FlashcardInput> 
