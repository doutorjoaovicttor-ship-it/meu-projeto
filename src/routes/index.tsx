import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Github,
  Mail,
  MapPin,
  Palette,
  Rocket,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "João Victtor — Portfólio" },
      {
        name: "description",
        content:
          "Site pessoal de João Victtor Braga Ferro de Novais: projetos, habilidades e contato.",
      },
      { property: "og:title", content: "João Victtor — Portfólio" },
      {
        property: "og:description",
        content:
          "Site pessoal de João Victtor Braga Ferro de Novais: projetos, habilidades e contato.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projetos = [
  {
    titulo: "Meu primeiro site",
    descricao:
      "Este próprio site — feito com React, hospedado na nuvem e com o código aberto no GitHub.",
    tag: "Web",
  },
  {
    titulo: "Em breve",
    descricao:
      "Espaço reservado para o próximo projeto. Volte em breve para ver as novidades.",
    tag: "Novidade",
  },
  {
    titulo: "Em breve",
    descricao:
      "Mais um projeto a caminho. Ideias boas levam tempo para ficar prontas.",
    tag: "Novidade",
  },
];

const habilidades = [
  {
    icone: Code2,
    titulo: "Programação",
    descricao: "Sites e aplicativos feitos com ferramentas modernas.",
  },
  {
    icone: Palette,
    titulo: "Design",
    descricao: "Visual limpo, com atenção aos detalhes e à experiência.",
  },
  {
    icone: Rocket,
    titulo: "Aprendizado",
    descricao: "Sempre estudando algo novo e colocando em prática.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Cabeçalho */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-semibold tracking-tight">
            João Victtor
          </span>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#sobre" className="transition-colors hover:text-foreground">
              Sobre
            </a>
            <a
              href="#projetos"
              className="transition-colors hover:text-foreground"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="transition-colors hover:text-foreground"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Apresentação */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 md:pt-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          Brasil
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Olá, eu sou o{" "}
          <span className="italic text-primary">João Victtor</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Bem-vindo ao meu cantinho na internet. Aqui eu mostro meus projetos,
          minhas habilidades e um pouco sobre mim.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver projetos
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            Falar comigo
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Sobre mim
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Sou João Victtor Braga Ferro de Novais. Este site é o começo da
            minha jornada na programação — um espaço para aprender, experimentar
            e compartilhar o que eu construir pelo caminho.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {habilidades.map((h) => (
              <div
                key={h.titulo}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <h.icone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{h.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Uma seleção do que eu já fiz — e do que vem por aí.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projetos.map((p, i) => (
              <article
                key={i}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <span className="mb-4 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {p.tag}
                </span>
                <h3 className="text-xl font-semibold">{p.titulo}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato / Rodapé */}
      <footer id="contato" className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
            O código deste site é aberto — qualauer pessoa pode ver, sugerir
            melhorias e contribuir no GitHub.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/doutorjoaovicttor-ship-it/meu-projeto"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Github className="h-4 w-4" />
              Ver no GitHub
            </a>
            <a
              href="mailto:contato@exemplo.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Mail className="h-4 w-4" />
              Enviar e-mail
            </a>
          </div>
          <p className="mt-16 text-xs text-muted-foreground">
            © {new Date().getFullYear()} João Victtor Braga Ferro de Novais.
            Feito com React e código aberto.
          </p>
        </div>
      </footer>
    </div>
  );
}
