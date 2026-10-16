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
