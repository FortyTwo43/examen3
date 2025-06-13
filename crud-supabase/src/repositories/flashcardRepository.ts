import { database } from "../types/database"
import type { Flashcard, FlashcardInput } from "../types/flashcard"

export class FlashcardRepository {
  static getAll(): Flashcard[] {
    return database.flashcards
  }

  static getById(id: number): Flashcard | undefined {
    return database.flashcards.find(f => f.id === id)
  }

  static create(input: FlashcardInput): Flashcard {
    const newCard: Flashcard = {
      id: database.flashcards.length + 1,
      ...input
    }
    database.flashcards.push(newCard)
    return newCard
  }
}