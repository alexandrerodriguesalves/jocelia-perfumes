import { WHATSAPP, INSTAGRAM } from "../config";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-gray-900 dark:bg-black text-white py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6">
          Fale com a gente
        </h3>
        <p className="text-gray-400 mb-6 md:mb-8 text-center max-w-md text-sm md:text-base">
          Garanta suas fragrâncias favoritas diretamente comigo! Tire suas
          dúvidas ou faça seu pedido pelos canais abaixo:
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={"https://wa.me/" + WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:px-8 rounded-full transition w-full sm:w-auto"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            Fale no WhatsApp
          </a>

          <a
            href={"https://instagram.com/" + INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-bold py-3 px-6 md:px-8 rounded-full transition w-full sm:w-auto"
          >
            <i className="fab fa-instagram text-2xl"></i>@{INSTAGRAM}
          </a>
        </div>

        <div className="mt-10 md:mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-6 md:pt-8 w-full">
          <p>&copy; {ano} Jocélia Perfumes.</p>
        </div>
      </div>
    </footer>
  );
}
