import React from "react";

const SelectInput = ({ label, name, options, register, errors }) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-gray-200 font-medium mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        {...register}
        className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Selecciona...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <p className="text-red-400 text-sm mt-1">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default SelectInput;
