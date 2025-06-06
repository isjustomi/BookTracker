// src/pages/Welcome.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/books");
  };

  if (!showWelcome) return null;

  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <SubTitulo className="text-gray-100 mb-4" titulo="¡Bienvenido a Book Tracker!" />
        <p className="text-gray-300 mb-6">
          ¡Gracias por visitar nuestra aplicación de seguimiento de libros!
        </p>
        <Button
          type="button"
          onClick={handleAccept}
          className="bg-green-600 hover:bg-green-700 text-gray-900 px-6 py-2 rounded-lg"
        >
          Ingresar
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
