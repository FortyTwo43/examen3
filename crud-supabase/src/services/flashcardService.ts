import { FlashcardRepository } from "../repositories/flashcardRepository"
import type { Flashcard, FlashcardInput } from "../types/flashcard"

export class FlashcardService {
  static getAll(): Flashcard[] {
    return FlashcardRepository.getAll()
  }

  static create(input: FlashcardInput): Flashcard {
    return FlashcardRepository.create(input)
  }
}