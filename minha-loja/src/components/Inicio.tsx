export default function Inicio() {
  return (
    <section id="inicio" className="bg-rosa-claro py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          A sua revendedora de perfumes
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Trabalhamos com diversas marcas para trazer as melhores fragrâncias e
          cuidados essenciais até você. Encontre novidades, lacrados e desapegos
          incríveis com facilidade!
        </p>
        <a
          href="#produtos"
          className="inline-block bg-rosa-forte text-white font-semibold py-3 px-8 rounded-full hover:bg-rosa-escuro transition shadow-lg"
        >
          Ver Catálogo
        </a>
      </div>
    </section>
  );
}
