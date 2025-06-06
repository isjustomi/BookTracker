// src/pages/PageNotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Página no encontrada</p>
      <Button onClick={() => navigate("/books")}>
        Ir al Dashboard
      </Button>
    </div>
  );
};

export default PageNotFound;
