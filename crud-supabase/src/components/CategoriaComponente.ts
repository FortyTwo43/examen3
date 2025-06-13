// import { CategoriaService } from "../services/categoriaService"

// export function renderCategorias() {
//   const categorias = CategoriaService.getAll()
//   const container = document.getElementById("categorias")
//   if (!container) return
//   container.innerHTML = "<h2>Categorías</h2><ul>" +
//     categorias.map(cat => `<li>${cat.descripcion}</li>`).join("") +
//     "</ul>"
// }

import { CategoriaService } from "../services/categoriaService.js"

export function renderCategorias() {
  const categorias = CategoriaService.getAll()
  const container = document.getElementById("categorias")
  if (!container) return
  container.innerHTML = `
    <h2>Categorías</h2>
    <ul>
      ${categorias.map(cat => `<li>${cat.descripcion}</li>`).join("")}
    </ul>
    <form id="categoria-form">
      <input type="text" id="categoria-desc" placeholder="Nueva categoría" required />
      <button type="submit">Agregar</button>
    </form>
  `

  const form = document.getElementById("categoria-form") as HTMLFormElement
  form.onsubmit = (e) => {
    e.preventDefault()
    const input = document.getElementById("categoria-desc") as HTMLInputElement
    if (input.value.trim()) {
      CategoriaService.create({ descripcion: input.value })
      renderCategorias()
    }
  }
}
