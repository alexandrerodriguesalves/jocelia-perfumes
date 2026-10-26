import { WHATSAPP } from "../config";
import type { Produto } from "../dados/produtos";

export default function CardProduto(props: Produto) {
  const link =
    "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(props.mensagem);

  let selo = null;

  if (props.etiqueta !== "") {
    selo = (
      <span className="inline-block text-[10px] sm:text-xs font-bold bg-black dark:bg-white text-white dark:text-black px-2 py-1 uppercase rounded">
        {props.etiqueta}
      </span>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col">
      <img
        src={props.imagem}
        alt={props.alt}
        loading="lazy"
        className="w-full h-48 sm:h-64 lg:h-80 object-cover"
      />
      <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between">
        <div>
          {selo}
          <h4 className="text-base sm:text-xl font-bold mt-3 mb-1 text-gray-900 dark:text-white">
            {props.nome}
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
            {props.descricao}
          </p>
          <p className="text-lg sm:text-2xl font-bold text-rosa-forte">
            {props.preco}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base font-medium py-2 rounded transition"
        >
          <i className="fab fa-whatsapp mr-2"></i> Comprar
        </a>
      </div>
    </div>
  );
}
