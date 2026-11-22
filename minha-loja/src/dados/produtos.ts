export type Categoria = "perfume" | "body-splash" | "locao" | "combo";

export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  categoria: Categoria;
  etiqueta: string;
  imagem: string;
  esgotado: boolean;
};
