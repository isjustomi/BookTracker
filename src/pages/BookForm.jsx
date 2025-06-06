// src/pages/BookForm.jsx
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import useFetchBooks from "../hooks/books/useFetchBooks";
import useBookActions from "../hooks/books/useBookActions";
import Swal from "sweetalert2";

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useFetchBooks();
  const { createBook, updateBook } = useBookActions();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      autor: "",
      libro: "",
      genero: "",
      estado: "",
    },
  });

  useEffect(() => {
    if (id && books.length > 0) {
      const libroSel = books.find((b) => b.id === parseInt(id));
      if (libroSel) {
        reset({
          autor: libroSel.autor,
          libro: libroSel.libro,
          genero: libroSel.genero,
          estado: libroSel.estado,
        });
      }
    }
  }, [id, books, reset]);

  const onSubmit = async (data) => {
    try {
      if (!data.autor || !data.libro || !data.genero || !data.estado) {
        return Swal.fire("Error", "Todos los campos son obligatorios", "warning");
      }
      if (id) {
        await updateBook(id, data);
        Swal.fire("¡Listo!", "Libro actualizado exitosamente", "success");
      } else {
        await createBook(data);
        Swal.fire("¡Listo!", "Libro creado exitosamente", "success");
      }
      navigate("/books");
    } catch (err) {
      Swal.fire("Error", "Algo salió mal al guardar", "error");
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-900 text-gray-100">
      {/* Header oscuro */}
      <header className="w-full bg-gray-800 px-8 py-4">
        <Link to="/books" className="text-gray-200 font-medium hover:underline">
          ← Volver a la lista
        </Link>
      </header>

      {/* Contenido del form */}
      <main className="flex-grow w-full overflow-y-auto px-8 py-8 flex justify-center items-start">
        <div className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-lg p-8">
          <Titulo className="text-2xl lg:text-3xl mb-4 text-white" titulo={id ? "Editar Libro" : "Crear Nuevo Libro"} />
          <p className="text-gray-300 mb-6">
            {id
              ? "Modifica los datos del libro."
              : "Completa los datos para registrar un nuevo libro."}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputText
              label="Título del Libro"
              name="libro"
              placeholder="Ej: Cien Años de Soledad"
              register={register("libro", {
                required: "El título es obligatorio",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
              })}
              errors={errors}
            />
            <InputText
              label="Autor"
              name="autor"
              placeholder="Ej: Gabriel García Márquez"
              register={register("autor", {
                required: "El autor es obligatorio",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              errors={errors}
            />
            <InputText
              label="Género"
              name="genero"
              placeholder="Ej: Realismo Mágico"
              register={register("genero", {
                required: "El género es obligatorio",
              })}
              errors={errors}
            />
            <SelectInput
              label="Estado de Lectura"
              name="estado"
              options={[
                { value: "Leído", label: "Leído" },
                { value: "Leyendo", label: "Leyendo" },
                { value: "Pendiente", label: "Pendiente" },
              ]}
              register={register("estado", {
                required: "Selecciona un estado",
              })}
              errors={errors}
            />

            <div className="flex justify-between mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 text-gray-900 px-6 py-2 rounded-lg"
              >
                {id ? "Actualizar Libro" : "Guardar Libro"}
              </Button>
              <Button
                type="button"
                onClick={() => navigate("/books")}
                className="bg-gray-600 hover:bg-gray-700 text-gray-200 px-6 py-2 rounded-lg"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BookForm;
