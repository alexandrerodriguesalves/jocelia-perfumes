export default function Cabecalho() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-serif font-bold text-gray-900">
          Jocelia <span className="text-rosa">Perfumes</span>
        </h1>
        <nav className="flex space-x-3 md:space-x-8 text-sm md:text-base">
          <a
            href="#inicio"
            className="text-gray-600 hover:text-rosa transition"
          >
            Início
          </a>
          <a
            href="#produtos"
            className="text-gray-600 hover:text-rosa transition"
          >
            Produtos
          </a>
          <a
            href="#contato"
            className="text-gray-600 hover:text-rosa transition"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
