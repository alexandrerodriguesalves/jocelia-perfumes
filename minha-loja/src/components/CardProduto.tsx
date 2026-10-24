import { WHATSAPP } from "../config";
import type { Produto } from "../dados/produtos";

export default function CardProduto(props: Produto) {
  const link =
    "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(props.mensagem);

  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col">
      <img
        src={props.imagem}
        alt={props.alt}
        className="w-full h-80 object-cover"
      />
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold bg-black text-white px-2 py-1 uppercase rounded">
            {props.etiqueta}
          </span>
          <h4 className="text-xl font-bold mt-3 mb-1">{props.nome}</h4>
          <p className="text-sm text-gray-500 mb-3">{props.descricao}</p>
          <p className="text-2xl font-bold text-rosa-forte">{props.preco}</p>
        </div>
        <a
          href={link}
          target="_blank"
          className="mt-4 block w-full text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded transition"
        >
          <i className="fab fa-whatsapp mr-2"></i> Comprar
        </a>
      </div>
    </div>
  );
}
