// src/pages/BookList.jsx
import React from "react";
import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import useFetchBooks from "../hooks/books/useFetchBooks";
import useBookActions from "../hooks/books/useBookActions";
import Swal from "sweetalert2";

const BookList = () => {
  // useFetchBooks ya ejecuta getBooks() en su propio useEffect
  const { books, loading, error, getBooks } = useFetchBooks();
  const { deleteBook } = useBookActions();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Esta acción eliminará el libro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      const success = await deleteBook(id);
      if (success) {
        Swal.fire("¡Eliminado!", "El libro ha sido eliminado.", "success");
        getBooks(); // Re-cargar la lista tras eliminar
      } else {
        Swal.fire("Error", "No se pudo eliminar el libro.", "error");
      }
    }
  };

  return (
    /* Contenedor principal en modo oscuro */
    <div className="w-full h-full flex flex-col bg-gray-900 text-gray-100">

      {/* Encabezado oscuro */}
      <header className="w-full bg-gray-800 px-8 py-4 flex justify-between items-center">
        <Titulo className="text-3xl lg:text-4xl text-white" titulo="Book Tracker" />
        <Link to="/books/new">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            + Agregar Libro
          </Button>
        </Link>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow w-full overflow-y-auto px-8 py-6">
        <p className="text-gray-300 mb-4 text-lg">Lista de libros registrados.</p>

        {loading ? (
          <p className="text-center text-gray-400 mt-8">Cargando libros...</p>
        ) : error ? (
          <p className="text-center text-red-400 mt-8">Error: {error}</p>
        ) : books.length === 0 ? (
          <p className="text-center text-gray-400 mt-8">No hay libros registrados.</p>
        ) : (
          /* Contenedor de la tabla en oscuro con fondo ligeramente más claro */
          <div className="w-full overflow-x-auto bg-gray-800 shadow-lg rounded-lg">

            <table className="min-w-full divide-y divide-gray-700">
              {/* Encabezado de tabla */}
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    TÍTULO
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    AUTOR
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    GÉNERO
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    ESTADO
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    ACCIONES
                  </th>
                </tr>
              </thead>

              {/* Cuerpo de la tabla */}
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {books.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-100">
                      {book.libro}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-100">
                      {book.autor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-100">
                      {book.genero}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-100">
                      {book.estado}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-4">
                      <Button
                        className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 px-3 py-1 rounded"
                        onClick={() =>
                          (window.location.href = `/books/edit/${book.id}`)
                        }
                      >
                        Editar
                      </Button>
                      <ButtonDelete onClick={() => handleDelete(book.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}
      </main>
    </div>
  );
};

export default BookList;
