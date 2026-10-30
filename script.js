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

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nomeVisitante = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();
  const servico = document.querySelector("#assunto").value.trim() || "Sem assunto";
  const mensagem = document.querySelector("#mensagem").value.trim();

  const texto = `*Olá, me chamo ${nomeVisitante} e vim pelo portfólio. Esse é o meu email para contato: E-mail:* ${email} e tenho interesse em um ${servico}. ${mensagem}`;

  const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(link, "_blank");

  formulario.reset();
});
