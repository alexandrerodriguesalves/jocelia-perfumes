import { useEffect, useState } from "react";
import type { SubmitEvent } from "react";
import { supabase } from "../lib/supabase";
import type { Produto } from "../dados/produtos";

export default function Admin() {
  const [logado, setLogado] = useState(false);
  const [verificando, setVerificando] = useState(true);

  useEffect(function () {
    verificarSessao();
  }, []);

  async function verificarSessao() {
    const { data } = await supabase.auth.getSession();

    if (data.session) {
      setLogado(true);
    }
    setVerificando(false);
  }

  if (verificando) {
    return <p className="p-8 text-center">Carregando...</p>;
  }

  if (logado) {
    return (
      <Painel
        onSair={function () {
          setLogado(false);
        }}
      />
    );
  }

  return (
    <Login
      onEntrar={function () {
        setLogado(true);
      }}
    />
  );
}

function Login(props: { onEntrar: () => void }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function entrar(e: SubmitEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    if (error) {
      setErro("Email ou senha incorretos.");
    } else {
      props.onEntrar();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-rosa-claro p-4">
      <form
        onSubmit={entrar}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-3"
      >
        <h1 className="text-xl font-bold text-center">Área da Jocelia</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={function (e) {
            setEmail(e.target.value);
          }}
          className="border rounded p-2"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={function (e) {
            setSenha(e.target.value);
          }}
          className="border rounded p-2"
          required
        />
        {erro !== "" && <p className="text-red-600 text-sm">{erro}</p>}
        <button
          type="submit"
          className="bg-rosa-forte text-white py-2 rounded font-semibold"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

function Painel(props: { onSair: () => void }) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("perfume");
  const [etiqueta, setEtiqueta] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);

  useEffect(function () {
    listarProdutos();
  }, []);

  async function listarProdutos() {
    const { data } = await supabase
      .from("produtos")
      .select("*")
      .order("criado_em", { ascending: false });

    if (data) {
      setProdutos(data);
    }
  }

  async function adicionarProduto(e: SubmitEvent) {
    e.preventDefault();

    if (arquivo === null) {
      alert("Escolha uma foto do produto.");
      return;
    }

    const caminho =
      Date.now() + "-" + arquivo.name.replace(/[^a-zA-Z0-9.]/g, "-");

    const { error: erroFoto } = await supabase.storage
      .from("fotos")
      .upload(caminho, arquivo);

    if (erroFoto) {
      alert("Erro ao enviar a foto: " + erroFoto.message);
      return;
    }

    const { data: urlFoto } = supabase.storage
      .from("fotos")
      .getPublicUrl(caminho);

    const { error } = await supabase.from("produtos").insert({
      nome: nome,
      descricao: descricao,
      preco: preco,
      categoria: categoria,
      etiqueta: etiqueta,
      imagem: urlFoto.publicUrl,
    });

    if (error) {
      alert("Erro ao salvar o produto: " + error.message);
      return;
    }

    setNome("");
    setDescricao("");
    setPreco("");
    setEtiqueta("");
    setArquivo(null);
    listarProdutos();
  }

  async function alternarEsgotado(produto: Produto) {
    const { error } = await supabase
      .from("produtos")
      .update({ esgotado: !produto.esgotado })
      .eq("id", produto.id);

    if (error) {
      alert("Erro ao atualizar: " + error.message);
      return;
    }
    listarProdutos();
  }

  async function apagarProduto(produto: Produto) {
    if (!confirm("Apagar " + produto.nome + "?")) {
      return;
    }

    await supabase.from("produtos").delete().eq("id", produto.id);
    listarProdutos();
  }

  async function sair() {
    await supabase.auth.signOut();
    props.onSair();
  }

  const linhas = [];

  for (let i = 0; i < produtos.length; i++) {
    const p = produtos[i];

    let textoBotao = "Marcar esgotado";
    if (p.esgotado) {
      textoBotao = "Voltar a vender";
    }

    linhas.push(
      <li
        key={p.id}
        className="flex items-center justify-between gap-3 border-b py-3"
      >
        <span>
          {p.nome} — {p.preco} {p.esgotado && <b>(esgotado)</b>}
        </span>
        <div className="flex gap-2">
          <button
            onClick={function () {
              alternarEsgotado(p);
            }}
            className="bg-gray-200 px-3 py-1 rounded text-sm"
          >
            {textoBotao}
          </button>
          <button
            onClick={function () {
              apagarProduto(p);
            }}
            className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm"
          >
            Apagar
          </button>
        </div>
      </li>,
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Painel de produtos</h1>
        <button onClick={sair} className="text-sm underline">
          Sair
        </button>
      </div>

      <form
        onSubmit={adicionarProduto}
        className="bg-gray-50 p-4 rounded-xl flex flex-col gap-3 mb-8"
      >
        <h2 className="font-semibold">Novo produto</h2>
        <input
          placeholder="Nome (ex: Heaven Pink)"
          value={nome}
          onChange={function (e) {
            setNome(e.target.value);
          }}
          className="border rounded p-2"
          required
        />
        <input
          placeholder="Descrição (ex: Body Splash (200ml))"
          value={descricao}
          onChange={function (e) {
            setDescricao(e.target.value);
          }}
          className="border rounded p-2"
        />
        <input
          placeholder="Preço (ex: R$ 50,00)"
          value={preco}
          onChange={function (e) {
            setPreco(e.target.value);
          }}
          className="border rounded p-2"
          required
        />
        <select
          value={categoria}
          onChange={function (e) {
            setCategoria(e.target.value);
          }}
          className="border rounded p-2"
        >
          <option value="perfume">Perfume</option>
          <option value="body-splash">Body Splash</option>
          <option value="locao">Loção</option>
          <option value="combo">Combo</option>
        </select>
        <input
          placeholder="Selo (ex: Novo Lacrado) - opcional"
          value={etiqueta}
          onChange={function (e) {
            setEtiqueta(e.target.value);
          }}
          className="border rounded p-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={function (e) {
            if (e.target.files) {
              setArquivo(e.target.files[0]);
            }
          }}
          required
        />
        <button
          type="submit"
          className="bg-rosa-forte text-white py-2 rounded font-semibold"
        >
          Adicionar produto
        </button>
      </form>

      <ul>{linhas}</ul>
    </div>
  );
}
