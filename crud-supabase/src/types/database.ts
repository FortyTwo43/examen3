import type { Categoria } from "../types/categoria"
import type { Flashcard } from "../types/flashcard"
import type { Usuario } from "../types/usuario"

// Interface del JSON que simula una base de datos
export interface JsonDatabase {
  usaurios: Usuario[]
  categorias: Categoria[]
  flashcards: Flashcard[]
}

// Objeto JSON que simula una base de datos
export const database: JsonDatabase = {
    usaurios: [
    {
        id: 1,
        nombre: "John Doe",
        email: "john@gmail.com",
            password: "password123",
            flashcards: [
                {
                id: 1,
                question: "A rule that limits something",
                answer: "restriction",
                iamgeUrl: "https://images.unsplash.com/photo-1",
                category: [{ id: 1, descripcion: "Common 600 words" }]
                },
                {
                id: 2,
                question: "Forecast of a future event",
                answer: "prediction",
                iamgeUrl: "https://images.unsplash.com/photo-2",
                category: [{ id: 1, descripcion: "Common 600 words" }]
                },
                {
                id: 3,
                question: "Being equal in status or rights",
                answer: "equality",
                iamgeUrl: "https://images.unsplash.com/photo-3",
                category: [{ id: 1, descripcion: "Common 600 words" }]
                }
            ]
        },
        {
            id: 2,
            nombre: "Maria Smith",
            email: "maria@gmail.com",
            password: "mypassword",
            flashcards: [
                {
                    id: 1,
                    question: "A rule that limits something",
                    answer: "restriction",
                    iamgeUrl: "https://images.unsplash.com/photo-1",
                    category: [{ id: 1, descripcion: "Common 600 words" }]
                },
                {
                    id: 2,
                    question: "Forecast of a future event",
                    answer: "prediction",
                    iamgeUrl: "https://images.unsplash.com/photo-2",
                    category: [{ id: 1, descripcion: "Common 600 words" }]
                },
                {
                    id: 3,
                    question: "Being equal in status or rights",
                    answer: "equality",
                    iamgeUrl: "https://images.unsplash.com/photo-3",
                    category: [{ id: 1, descripcion: "Common 600 words" }]
                }
            ]
        }
    ],

  categorias: [
    { id: 1, descripcion: "Common 600 words" },
    { id: 2, descripcion: "Science" }
  ],
  flashcards: [
    {
      id: 1,
      question: "A rule that limits something",
      answer: "restriction",
      iamgeUrl: "https://images.unsplash.com/photo-1",
      category: [{ id: 1, descripcion: "Common 600 words" }]
    },
    {
      id: 2,
      question: "Forecast of a future event",
      answer: "prediction",
      iamgeUrl: "https://images.unsplash.com/photo-2",
      category: [{ id: 1, descripcion: "Common 600 words" }]
    },
    {
      id: 3,
      question: "Being equal in status or rights",
      answer: "equality",
      iamgeUrl: "https://images.unsplash.com/photo-3",
      category: [{ id: 1, descripcion: "Common 600 words" }]
    }
  ]
}


