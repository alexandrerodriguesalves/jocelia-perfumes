export type Produto = {
  imagem: string;
  alt: string;
  etiqueta: string;
  nome: string;
  descricao: string;
  preco: string;
  mensagem: string;
};

export const produtos: Produto[] = [
  {
   imagem: "/perfumes/img/heaven_wepink.svg",
    alt: "Perfume Heaven Pink",
    etiqueta: "Novo Lacrado",
    nome: "Heaven Pink",
    descricao: "Extraordinary Collection (100ml)",
    preco: "R$ 100,00",
    mensagem:
      "Olá Jocélia! Tenho interesse no perfume Heaven Pink novo lacrado.",
  },
  {
    imagem: "/perfumes/img/VF_wepink.svg",
    alt: "Body Splash Onyx",
    etiqueta: "Desapego Lacrado",
    nome: "Body Splash Onyx",
    descricao: "Virgínia Fonseca (200ml)",
    preco: "R$ 40,00",
    mensagem: "Olá Jocélia! Tenho interesse no Body Splash Onyx.",
  },
  {
    imagem: "/perfumes/img/EternalCherish_wepink.svg",
    alt: "Body Splash Eternal Cherish",
    etiqueta: "Desapego Lacrado",
    nome: "Eternal Cherish",
    descricao: "Body Splash (200ml)",
    preco: "R$ 40,00",
    mensagem: "Olá Jocélia! Tenho interesse no Body Splash Eternal Cherish.",
  },
  {
    imagem: "/perfumes/img/vanilla_wepink.svg",
    alt: "Body Cream Vanilla Hug",
    etiqueta: "Desapego Lacrado",
    nome: "Vanilla Hug",
    descricao: "Loção Corporal (200ml)",
    preco: "R$ 45,00",
    mensagem: "Olá Jocélia! Tenho interesse no Body Cream Vanilla Hug.",
  },
];
