# Interfaces creadas
Se han definido tres interfaces principales para modelar el dominio de la aplicación:

- **Categoria**: Representa una categoría o al que pueden pertenecer las flashcards.
- **Flashcard**: Representa una tarjeta de estudio, que contiene una pregunta, respuesta, imagen y puede estar asociada a una o varias categorías.
- **Usuario**: Representa a un usuario del sistema, con sus datos personales y el conjunto de flashcards que administra o estudia.

# Estructura del objeto JSON

El objeto JSON que simula la base de datos local tiene la siguiente estructura:

```typescript
export interface JsonDatabase {
  usuarios: Usuario[]
  categorias: Categoria[]
  flashcards: Flashcard[]
}
```

- **usuarios**: Arreglo de objetos `Usuario`, cada uno con sus datos y sus flashcards asociadas.
- **categorias**: Arreglo de objetos `Categoria` que representan los distintos grupos temáticos disponibles.
- **flashcards**: Arreglo de objetos `Flashcard` que representan todas las tarjetas de estudio del sistema.

# Justificacion de las entidades diseñadas

- **Categoria**: Permite clasificar las flashcards en diferentes temas, facilitando la organización y búsqueda de tarjetas por parte de los usuarios.
- **Flashcard**: Es la entidad central del sistema, ya que representa el contenido que los usuarios estudian. Puede pertenecer a varias categorías.
- **Usuario**: Permite gestionar la información personal y las tarjetas asociadas a cada persona.

Estas entidades reflejan las necesidades del dominio, permitiendo gestionar usuarios, categorías y tarjetas de estudio.