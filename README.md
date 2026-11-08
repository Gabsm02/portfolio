# Meu Primeiro Portfólio — Gabriel de Oliveira Mendes

Portfólio pessoal desenvolvido como atividade da disciplina **Programação Front-End** (Aula 06 — HTML Semântico, Tabelas e Organização da Página) da **Universidade Católica do Salvador (UCSAL)**, com a professora Daniele Souza das Virgens.

O objetivo é apresentar quem eu sou, meus conhecimentos, projetos, trajetória e uma forma de contato, usando uma estrutura HTML semântica e bem organizada.

## Estudante

- **Nome:** Gabriel de Oliveira Mendes
- **Curso:** Engenharia de Software — UCSAL
- **Atuação:** Estagiário na Vivo, desenvolvedor Fullstack

## Estrutura de arquivos

```
.
├── index.html            # Página do portfólio
├── style.css             # Estilos (cores inspiradas na Vivo, layout responsivo)
├── script.js             # JavaScript: saídas da Aula 11, contato via WhatsApp e interatividade (DOM e eventos)
├── aula11-javascript/
│   ├── index.html        # Página da oficina da Aula 11
│   ├── atividade11.js    # Implementações A, B, C e D
│   └── respostas.md      # Respostas da Parte 1 e saídas do console
├── imagens/
│   └── foto.jpeg         # Foto usada na seção "Sobre mim"
├── image.png             # Print da página aberta no navegador (primeira versão, sem CSS)
├── tags_semanticas.txt   # Anotações sobre as tags semânticas usadas
└── atividade.pdf         # Enunciado da atividade
```

## Como visualizar

Não há dependências nem etapa de build. Basta abrir o arquivo `index.html` no navegador, ou usar uma extensão como o **Live Server** do VS Code para servir a página localmente.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, Flexbox/Grid e media query para telas de até 600px)
- JavaScript (variáveis, tipos, operadores, condicionais e funções — saídas no console)
- JavaScript com DOM e eventos (tema, Mostrar mais, cadastro validado, filtro e remoção por delegação)

## Explicação da estrutura semântica

**Como a página foi organizada?**
A página é dividida por função, de cima para baixo: `header` (apresentação e menu), `main` (conteúdo principal com as seções), `aside` (informações complementares) e `footer` (encerramento).

**Onde foi usado o `header`?**
No topo da página, com meu nome, um selo de "Estagiário na Vivo", o título principal (`h1`), minha área (Desenvolvedor Fullstack), uma frase de apresentação e botões para os projetos e o contato.

**Onde foi usado o `nav`?**
Dentro do `header`, envolvendo a lista do menu com links internos para as seções *Sobre mim*, *Conhecimentos*, *Projetos* e *Contato*.

**Qual conteúdo ficou dentro do `main`?**
As quatro seções principais do portfólio: Sobre mim, Conhecimentos, Projetos e Contato.

**Quais seções foram criadas?**
- `#sobre` — apresentação pessoal, curso, estágio e interesses, com foto.
- `#conhecimentos` — lista de tecnologias e tabela de habilidades.
- `#projetos` — cards com os projetos desenvolvidos.
- `#contato` — formulário de contato.

**Que informações foram organizadas na tabela?**
As tecnologias que conheço (HTML, CSS, JavaScript, Python e Banco de dados), com o nível de conhecimento e onde aplico cada uma. A tabela usa `table`, `thead`, `tbody`, `tr`, `th` e `td`.

**Por que a tabela foi adequada para esse tipo de informação?**
Porque são dados com a mesma estrutura (tecnologia → nível → aplicação), que ficam mais fáceis de comparar em linhas e colunas. A tabela foi usada apenas para dados, não para montar o layout.

**Por que os projetos foram organizados com `article`?**
Porque cada projeto é um conteúdo independente, com sentido próprio: tem título, descrição, tecnologias utilizadas e um botão de acesso. Os projetos apresentados são:
- Ferramentas de análise de dados (Vivo)
- Bot Telegram (Vivo)
- Automação Celldowntime (Vivo)

**Qual informação ficou no `aside`?**
Informações complementares: a linha do tempo da minha trajetória (Cubos Academy, Praxis Empresa Júnior e estágio na Vivo) e um bloco "Agora" com o que estou fazendo atualmente e minha disponibilidade para novos projetos.

**O formulário possui `label` corretamente associado aos campos?**
Sim. Cada `label` tem o atributo `for` igual ao `id` do campo correspondente: `nome`, `email`, `assunto` e `mensagem`. Os campos obrigatórios usam `required`, e o e-mail usa `type="email"`.

**O que ficou no `footer`?**
Os créditos da página: ano, meu nome, a disciplina (Programação Front-End) e a instituição (UCSAL).

**Foi necessário usar alguma `div`? Por quê?**
Sim, mas só para agrupar elementos com fins de estilização, quando nenhuma tag semântica se aplicava — por exemplo, a linha do topo do cabeçalho (`.cabecalho-topo`), a área de apresentação, o grupo de botões, o container dos cards e os grupos de campos do formulário. Toda a estrutura de significado da página continua feita com tags semânticas.

## Interatividade — DOM e eventos (Parte final)

Funcionalidades adicionadas ao portfólio, seguindo a parte final da atividade *Laboratório de DOM e eventos*.

### A. Funcionalidades

| Funcionalidade | Onde fica | Como funciona |
| --- | --- | --- |
| Alternância de tema | Botão `#tema` no topo | `click` alterna a classe `escuro` no `body` com `classList.toggle()`, atualiza o texto do botão e o `aria-pressed`. O CSS só troca as variáveis de cor. |
| Mostrar mais / Mostrar menos | Botão `#mostrar-mais` na apresentação | `click` alterna o atributo `hidden` do parágrafo `#apresentacao-extra` e atualiza o texto e o `aria-expanded`. |
| Cadastro validado | Formulário `#cadastro` na seção Projetos | `submit` com `preventDefault()`, `checkValidity()` / `reportValidity()`, leitura com `new FormData()` e `trim()` no nome (mínimo de 3 caracteres). O card é criado com `createElement()` e todos os textos usam `textContent`, então `<b>Teste</b>` aparece como texto. Mensagens aparecem em `#status` (`role="status"`). |
| Filtro por categoria | Select `#filtro` | A função `filtrarProjetos()` faz uma nova seleção de `.projeto` a cada execução, compara `dataset.categoria` com o filtro e ajusta `hidden`. É chamada no `change` do filtro e após cada cadastro, então um card novo já respeita o filtro ativo. |
| Remoção por delegação | Um único listener em `#lista-projetos` | `evento.target.closest(".remover")` encontra o botão (mesmo clicando no `span` interno dos cards novos) e `closest(".projeto")` encontra o card, removido com `remove()`. Funciona para cards originais e recém-criados. |

### B. Acessibilidade

- Todos os campos têm `label` associado por `for`/`id` (o cadastro usa `projeto-nome`, `projeto-categoria` e `projeto-descricao` para não repetir os ids do formulário de contato).
- Todas as ações são `button` (tema, Mostrar mais, Adicionar, Remover), então funcionam com **Enter** e **Espaço**; **Tab** e **Shift+Tab** percorrem os controles na ordem da página.
- Foco visível com `:focus-visible` (contorno branco no cabeçalho roxo e roxo/lilás no restante).
- Os botões Remover têm `aria-label` com o nome do projeto, e após remover o foco vai para o próximo card (ou para o filtro), sem voltar ao topo da página.
- Nenhuma ação depende de passar o mouse: o efeito de hover nos cards é só visual.

### C. Alteração autoral: contador de projetos visíveis

- **Seletor:** `#contador` mostra o texto; a contagem usa `listaProjetos.querySelectorAll(".projeto")` e `".projeto:not([hidden])"`.
- **Eventos:** é atualizado no carregamento, no `change` do filtro, no `submit` do cadastro e no `click` de remoção.
- **Manipulação:** `textContent` recebe "Mostrando X de Y projetos" (com singular/plural) e o aviso `#lista-vazia` tem o `hidden` desligado quando nenhum card está visível no filtro.

### Limite desta atividade

Os projetos cadastrados ou removidos ficam **apenas na memória da página**: ao recarregar, a lista volta aos três projetos originais e o tema volta ao claro. Não há servidor, banco de dados nem `localStorage`.

### Correção encontrada durante os testes

O formulário de contato era selecionado com `document.querySelector(".formulario")`, que retorna o **primeiro** elemento com a classe. Como o cadastro de projetos também usa `.formulario` e aparece antes, o listener do WhatsApp passou a ser registrado no formulário errado (abria o WhatsApp e limpava o cadastro). A solução foi usar o seletor descendente `#contato .formulario`.

## Boas práticas seguidas

- Um único `main` na página.
- Hierarquia de títulos em ordem (`h1` → `h2` → `h3`).
- Menu dentro de `nav`.
- Links com textos claros (sem "clique aqui").
- Tabela com cabeçalho (`thead` / `th`).
- Comentários no HTML apenas para separar as grandes áreas da página.
- Atributo `lang="pt-BR"`, `meta viewport` e texto alternativo (`alt`) na imagem.

---

© 2026 Gabriel Mendes · Programação Front-End · UCSAL
