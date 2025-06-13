// import { FlashcardService } from "../services/flashcardService.ts"

// export function renderFlashcards() {
//   const flashcards = FlashcardService.getAll()
//   const container = document.getElementById("flashcards")
//   if (!container) return
//   container.innerHTML = "<h2>Flashcards</h2><ul>" +
//     flashcards.map(card => `<li><strong>${card.question}</strong> - ${card.answer}</li>`).join("") +
//     "</ul>"
// }

import { FlashcardService } from "../services/flashcardService.js"
import { CategoriaService } from "../services/categoriaService.js"

export function renderFlashcards() {
  const flashcards = FlashcardService.getAll()
  const categorias = CategoriaService.getAll()
  const container = document.getElementById("flashcards")
  if (!container) return
  container.innerHTML = `
    <h2>Flashcards</h2>
    <ul>
      ${flashcards.map(card => `
        <li>
          <strong>${card.question}</strong> - ${card.answer}
          <br/><small>Categoría(s): ${card.category.map(c => c.descripcion).join(", ")}</small>
        </li>
      `).join("")}
    </ul>
    <form id="flashcard-form">
      <input type="text" id="flashcard-q" placeholder="Pregunta" required />
      <input type="text" id="flashcard-a" placeholder="Respuesta" required />
      <select id="flashcard-cat" required>
        ${categorias.map(c => `<option value="${c.id}">${c.descripcion}</option>`).join("")}
      </select>
      <button type="submit">Agregar</button>
    </form>
  `

  const form = document.getElementById("flashcard-form") as HTMLFormElement
  form.onsubmit = (e) => {
    e.preventDefault()
    const question = (document.getElementById("flashcard-q") as HTMLInputElement).value
    const answer = (document.getElementById("flashcard-a") as HTMLInputElement).value
    const catId = parseInt((document.getElementById("flashcard-cat") as HTMLSelectElement).value)
    const cat = CategoriaService.getAll().find(c => c.id === catId)

    if (question && answer && cat) {
      FlashcardService.create({
        question,
        answer,
        iamgeUrl: "https://via.placeholder.com/150", // temporal
        category: [cat]
      })
      renderFlashcards()
    }
  }
}
