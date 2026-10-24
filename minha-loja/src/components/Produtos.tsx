import CardProduto from "./CardProduto";
import { produtos } from "../dados/produtos";

export default function Produtos() {
  const cards = [];

  for (let i = 0; i < produtos.length; i++) {
    const p = produtos[i];

    cards.push(
      <CardProduto
        key={i}
        imagem={p.imagem}
        alt={p.alt}
        etiqueta={p.etiqueta}
        nome={p.nome}
        descricao={p.descricao}
        preco={p.preco}
        mensagem={p.mensagem}
      />,
    );
  }

  return (
    <section id="produtos" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
          Destaques do Momento
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards}
        </div>
      </div>
    </section>
  );
}
