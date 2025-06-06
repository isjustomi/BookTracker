// src/hooks/books/useBookActions.jsx
import { useState } from "react";
import { API_URL } from "../../utils/apiUrl";

const useBookActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Crear nuevo libro (POST)
  const createBook = async (bookData) => {
    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData),
      });
      if (!res.ok) throw new Error("Error al crear libro");
      const nuevoLibro = await res.json();
      return nuevoLibro;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Actualizar libro existente (PUT)
  const updateBook = async (id, bookData) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData),
      });
      if (!res.ok) throw new Error("Error al actualizar libro");
      const libroEditado = await res.json();
      return libroEditado;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar libro (DELETE)
  const deleteBook = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar libro");
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { createBook, updateBook, deleteBook, loading, error };
};

export default useBookActions;
