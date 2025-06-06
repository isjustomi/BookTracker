import React from "react";

const ButtonDelete = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none"
    >
      Eliminar
    </button>
  );
};

export default ButtonDelete;
