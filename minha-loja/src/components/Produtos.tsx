import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";
import { supabase } from "../lib/supabase";
import type { Produto } from "../dados/produtos";

const filtros = [
  { texto: "Todos", valor: "todos" },
  { texto: "Perfumes", valor: "perfume" },
  { texto: "Body Splash", valor: "body-splash" },
  { texto: "Loções", valor: "locao" },
  { texto: "Combos", valor: "combo" },
];

export default function Produtos() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(function () {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    const { data, error } = await supabase
      .from("produtos")
      .select("*")
      .order("criado_em", { ascending: false });

    if (error) {
      console.error("Erro ao carregar produtos:", error.message);
      return;
    }
    setProdutos(data);
  }

  const botoes = [];

  for (let i = 0; i < filtros.length; i++) {
    const f = filtros[i];

    let classe =
      "px-4 py-2 text-sm md:px-5 md:text-base rounded-full transition ";

    if (f.valor === filtroAtivo) {
      classe += "bg-rosa-forte text-white";
    } else {
      classe +=
        "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-rosa-forte hover:text-white";
    }

    botoes.push(
      <button
        key={f.valor}
        onClick={function () {
          setFiltroAtivo(f.valor);
        }}
        className={classe}
      >
        {f.texto}
      </button>,
    );
  }

  const cards = [];

  for (let i = 0; i < produtos.length; i++) {
    const p = produtos[i];

    if (filtroAtivo === "todos" || p.categoria === filtroAtivo) {
      cards.push(<CardProduto key={p.id} {...p} />);
    }
  }

  return (
    <section
      id="produtos"
      className="py-10 md:py-16 bg-white dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-8">
          Destaques do Momento
        </h3>

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6 md:mb-8">
          {botoes}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
          {cards}
        </div>
      </div>
    </section>
  );
}
