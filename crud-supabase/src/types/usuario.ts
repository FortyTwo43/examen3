import type { Flashcard } from "./flashcard"

export interface Usuario {
    id: number
    nombre: string
    email: string
    password: string
    flashcards: Flashcard[] // muchas tarjetas
}
  
  export type UsuarioInput = Omit<Usuario, 'id'>
  export type UsuarioUpdate = Partial<UsuarioInput>

  