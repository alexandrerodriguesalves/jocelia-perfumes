import { useState } from "react";

export default function Cabecalho() {
  const [escuro, setEscuro] = useState(
    document.documentElement.classList.contains("dark"),
  );

  function alternarTema() {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("tema", "claro");
      setEscuro(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("tema", "escuro");
      setEscuro(true);
    }
  }

  let icone = "fas fa-moon";
  if (escuro) {
    icone = "fas fa-sun";
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-serif font-bold text-gray-900 dark:text-white">
          Jocelia Andrade <span className="text-rosa">Perfumes</span>
        </h1>
        <nav className="flex items-center space-x-3 md:space-x-8 text-sm md:text-base">
          <a
            href="#inicio"
            className="text-gray-600 dark:text-gray-300 hover:text-rosa transition"
          >
            Início
          </a>
          <a
            href="#produtos"
            className="text-gray-600 dark:text-gray-300 hover:text-rosa transition"
          >
            Produtos
          </a>
          <a
            href="#contato"
            className="text-gray-600 dark:text-gray-300 hover:text-rosa transition"
          >
            Contato
          </a>
          <button
            onClick={alternarTema}
            aria-label="Alternar modo escuro"
            className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:opacity-80 transition"
          >
            <i className={icone}></i>
          </button>
        </nav>
      </div>
    </header>
  );
}
