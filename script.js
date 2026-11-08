const nome = "Gabriel Mendes";
const area = "Desenvolvimento Fullstack";
const cidade = "Salvador";
const projetosConcluidos = 3;
const projetosEmAndamento = 1;
const disponivel = true;

console.log(`Tipo de nome: ${typeof nome}`);
console.log(`Tipo de projetosConcluidos: ${typeof projetosConcluidos}`);
console.log(`Tipo de disponivel: ${typeof disponivel}`);

const apresentacao = `Olá! Eu sou ${nome}, atuo com ${area} e moro em ${cidade}.`;
console.log(apresentacao);

const totalProjetos = projetosConcluidos + projetosEmAndamento;
console.log(`Total de projetos: ${totalProjetos}`);

if (totalProjetos >= 1) {
  console.log("Há pelo menos um projeto cadastrado.");
} else {
  console.log("Nenhum projeto cadastrado.");
}

if (totalProjetos === 0) {
  console.log("Ainda sem projetos");
} else if (totalProjetos <= 2) {
  console.log("Portfólio em construção");
} else {
  console.log("Portfólio com vários projetos");
}

if (disponivel && totalProjetos > 0) {
  console.log("Aberto a novos projetos e parcerias!");
} else {
  console.log("No momento não estou aceitando novos projetos.");
}


function apresentarPerfil(nome, area) {
  return `${nome} atua na área de ${area}.`;
}

function resumirProjetos(concluidos, andamento) {
  return concluidos + andamento;
}

console.log(apresentarPerfil(nome, area));
console.log(apresentarPerfil("Ana Souza", "Front-End"));

console.log(`Projetos (${projetosConcluidos} + ${projetosEmAndamento}): ${resumirProjetos(projetosConcluidos, projetosEmAndamento)}`);
console.log(`Projetos (5 + 2): ${resumirProjetos(5, 2)}`);


const numeroWhatsApp = "5571986263673";

// Seletor descendente: pega só o formulário da seção de contato
// (o cadastro de projetos também usa a classe .formulario).
const formulario = document.querySelector("#contato .formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nomeVisitante = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const servico = document.getElementById("assunto").value.trim() || "Sem assunto";
  const mensagem = document.getElementById("mensagem").value.trim();

  const texto = `*Olá, me chamo ${nomeVisitante} e vim pelo portfólio. Esse é o meu email para contato: E-mail:* ${email} e tenho interesse em um ${servico}. ${mensagem}`;

  const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(link, "_blank");

  formulario.reset();
});


/* =========================================================
   Parte final — Interatividade do portfólio (DOM e eventos)
   Os dados ficam apenas na memória da página: projetos
   cadastrados ou removidos voltam ao original ao recarregar.
   ========================================================= */

const rotulosCategoria = {
  dados: "Dados",
  automacao: "Automação",
  web: "Web",
};

/* ---------- A.1 Alternância de tema ---------- */
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function () {
  const escuro = document.body.classList.toggle("escuro");
  botaoTema.setAttribute("aria-pressed", String(escuro));
  botaoTema.textContent = escuro ? "Tema claro" : "Tema escuro";
});

/* ---------- A.2 Mostrar mais / Mostrar menos ---------- */
const botaoMostrar = document.getElementById("mostrar-mais");
const textoExtra = document.getElementById("apresentacao-extra");

botaoMostrar.addEventListener("click", function () {
  const expandido = botaoMostrar.getAttribute("aria-expanded") === "true";
  textoExtra.hidden = expandido;
  botaoMostrar.setAttribute("aria-expanded", String(!expandido));
  botaoMostrar.textContent = expandido ? "Mostrar mais" : "Mostrar menos";
});

/* ---------- Elementos usados pelos projetos ---------- */
const formularioProjeto = document.querySelector("#cadastro");
const campoNomeProjeto = document.querySelector("#projeto-nome");
const listaProjetos = document.querySelector("#lista-projetos");
const filtro = document.querySelector("#filtro");
const areaStatus = document.querySelector("#status");
const contador = document.querySelector("#contador");
const listaVazia = document.querySelector("#lista-vazia");

function mostrarStatus(mensagem, tipo) {
  areaStatus.textContent = mensagem;
  areaStatus.classList.toggle("status-erro", tipo === "erro");
  areaStatus.classList.toggle("status-sucesso", tipo === "sucesso");
}

/* ---------- C. Contador de projetos visíveis (alteração autoral) ---------- */
function atualizarContador() {
  // Nova seleção a cada chamada: inclui cards criados e ignora removidos.
  const todos = listaProjetos.querySelectorAll(".projeto");
  const visiveis = listaProjetos.querySelectorAll(".projeto:not([hidden])");
  const palavra = todos.length === 1 ? "projeto" : "projetos";

  contador.textContent = `Mostrando ${visiveis.length} de ${todos.length} ${palavra}`;
  listaVazia.hidden = visiveis.length > 0;
}

/* ---------- A.3 Filtro por categoria ---------- */
function filtrarProjetos() {
  const categoria = filtro.value;
  const cards = listaProjetos.querySelectorAll(".projeto");

  cards.forEach(function (card) {
    card.hidden = categoria !== "todos" && card.dataset.categoria !== categoria;
  });

  atualizarContador();
}

filtro.addEventListener("change", function () {
  filtrarProjetos();
  mostrarStatus(`Filtro aplicado: ${filtro.selectedOptions[0].textContent}.`);
});

/* ---------- A.4 Cadastro validado ---------- */
function criarCardProjeto(nomeProjeto, categoria, descricao) {
  const card = document.createElement("article");
  card.className = "card projeto";
  card.dataset.categoria = categoria;

  const topo = document.createElement("div");
  topo.className = "card-topo";

  const etiqueta = document.createElement("span");
  etiqueta.className = "card-etiqueta";
  etiqueta.textContent = "Novo";

  const rotulo = document.createElement("span");
  rotulo.className = "card-categoria";
  rotulo.textContent = rotulosCategoria[categoria];

  topo.append(etiqueta, rotulo);

  const titulo = document.createElement("h3");
  titulo.textContent = nomeProjeto; // textContent: o texto digitado nunca vira HTML

  const texto = document.createElement("p");
  texto.textContent = descricao || "Projeto cadastrado pelo formulário.";

  const acoes = document.createElement("div");
  acoes.className = "card-acoes";

  const botaoRemover = document.createElement("button");
  botaoRemover.type = "button";
  botaoRemover.className = "botao botao-secundario remover";
  botaoRemover.setAttribute("aria-label", `Remover projeto ${nomeProjeto}`);

  // span dentro do botão: o clique cai no span, e closest() ainda acha o botão
  const textoBotao = document.createElement("span");
  textoBotao.textContent = "Remover";
  botaoRemover.append(textoBotao);

  acoes.append(botaoRemover);
  card.append(topo, titulo, texto, acoes);

  return card;
}

formularioProjeto.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!formularioProjeto.checkValidity()) {
    formularioProjeto.reportValidity();
    mostrarStatus("Informe um nome de projeto com pelo menos 3 caracteres.", "erro");
    return;
  }

  const dados = new FormData(formularioProjeto);
  const nomeProjeto = dados.get("nome").trim();
  const categoria = dados.get("categoria");
  const descricao = dados.get("descricao").trim();

  if (nomeProjeto.length < 3) {
    mostrarStatus("O nome precisa ter pelo menos 3 caracteres (sem contar espaços).", "erro");
    campoNomeProjeto.focus();
    return;
  }

  const card = criarCardProjeto(nomeProjeto, categoria, descricao);
  listaProjetos.append(card);
  filtrarProjetos(); // o novo card já respeita o filtro ativo

  let mensagem = `Projeto "${nomeProjeto}" adicionado em ${rotulosCategoria[categoria]}.`;
  if (card.hidden) {
    mensagem += " Ele está oculto pelo filtro atual.";
  }
  mostrarStatus(mensagem, "sucesso");

  formularioProjeto.reset();
  campoNomeProjeto.focus();
});

/* ---------- A.5 Remoção por delegação ---------- */
listaProjetos.addEventListener("click", function (evento) {
  const botao = evento.target.closest(".remover");
  if (!botao || !listaProjetos.contains(botao)) {
    return;
  }

  const card = botao.closest(".projeto");
  const titulo = card.querySelector("h3").textContent.trim();

  // Decide para onde o foco vai antes de remover (quem usa teclado não se perde)
  const visiveis = Array.from(listaProjetos.querySelectorAll(".projeto:not([hidden])"));
  const posicao = visiveis.indexOf(card);
  const vizinho = visiveis[posicao + 1] || visiveis[posicao - 1];

  card.remove();
  atualizarContador();
  mostrarStatus(`Projeto "${titulo}" removido.`, "sucesso");

  if (vizinho) {
    vizinho.querySelector(".remover").focus();
  } else {
    filtro.focus();
  }
});

atualizarContador();
