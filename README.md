# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Book Tracker

**Book Tracker** es una aplicación web que permite registrar, listar, editar y eliminar libros. Fue desarrollada con **React**, **Vite**, **Tailwind CSS**, **React Router**, **React Hook Form** y **SweetAlert2**.

---

## Descripción del proyecto

- **Objetivo:** Crear una aplicación CRUD (Create, Read, Update, Delete) de libros, donde el usuario pueda:
  - Ver un listado de libros obtenidos de una API REST.
  - Agregar nuevos libros completando un formulario.
  - Editar los datos de un libro existente.
  - Eliminar un libro de la lista, con confirmación de usuario.
- **Tecnologías principales:**
  - **Front-end:**  
    - React 
    - Vite  
    - Tailwind CSS (para estilos y diseño responsive)  
    - React Router Dom (para navegación entre páginas)  
    - React Hook Form (para validación de formularios)  
    - SweetAlert2 (para alertas, confirmaciones y feedback al usuario)
  - **API:** Una API pública de ejemplo (por ejemplo, [Retool API Demo](https://retoolapi.dev/ns36JG/libros)) para obtener/guardar/liberar datos de libros.

---

## Cómo ejecutar el proyecto localmente

1. **Clona este repositorio**  
   ```bash
   git clone https://github.com/isjustomi/BookTracker.git
   cd BookTracker
2. **Instala dependencias**  
   npm install
3. **Inicia el servidor**  
   npm run dev



