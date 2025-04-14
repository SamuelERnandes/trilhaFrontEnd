// src/components/Contador.tsx
import { useState } from 'react';

type ContadorProps = {
  valorInicial: number;
};

export default function Contador({ valorInicial }: ContadorProps) {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Contador: {contador}</h2>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setContador(contador + 1)}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setContador(contador - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
