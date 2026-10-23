import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { CtaButton, Reveal, ScrollProgress, SectionTitle, WalletCard, type CardArt } from "@/components/landing/parts";

const title = "CARD STYLE — Personalize o visual dos seus cartões na Wallet";
const description =
  "Ferramenta para Windows que muda apenas a aparência dos cartões no Apple Wallet do seu iPhone. Pagamento único e vídeo tutorial incluso.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const styles: CardArt[] = [
  { name: "Onyx", art: "art-onyx" },
  { name: "Aurum", art: "art-gold", light: true },
  { name: "Aurora", art: "art-aurora" },
  { name: "Neon", art: "art-neon" },
  { name: "Mármore", art: "art-marble", light: true },
  { name: "Carbono", art: "art-carbon" },
  { name: "Minimal", art: "art-minimal", light: true },
  { name: "Oceano", art: "art-ocean" },
  { name: "Rosé", art: "art-rose" },
  { name: "Esmeralda", art: "art-emerald" },
  { name: "Sunset", art: "art-sunset" },
  { name: "Titânio", art: "art-titanium", light: true },
];

const nav = [
  ["O que é", "#o-que-e"],
  ["Estilos", "#estilos"],
  ["Como funciona", "#como-funciona"],
  ["FAQ", "#faq"],
];

const steps = [
  ["Receba o acesso por e-mail", "Logo após a confirmação do pagamento, você recebe o link de download e o tutorial."],
  ["Conecte o iPhone ao PC Windows", "Use o cabo USB no primeiro pareamento. Depois, a conexão pode ser feita via Wi-Fi."],
  ["Escolha o estilo e aplique", "Selecione um dos designs disponíveis e aplique ao cartão desejado com poucos cliques."],
  ["Reabra a Wallet", "Abra novamente o app Wallet no iPhone e veja o novo visual do seu cartão."],
];

const faq = [
  ["É seguro?", "A ferramenta altera somente a imagem de exibição do cartão no seu aparelho. Ela não acessa dados bancários, senhas ou informações de pagamento."],
  ["Muda meu cartão de verdade?", "Não. Número, limite, banco, bandeira e o funcionamento dos pagamentos continuam exatamente iguais. Apenas a aparência na Wallet muda."],
  ["Preciso de cabo?", "Sim, um cabo USB é necessário para o primeiro pareamento entre o iPhone e o PC. Depois, a conexão pode ser feita por Wi-Fi."],
  ["Funciona em qualquer iPhone?", "Funciona na maioria dos iPhones com Apple Wallet. Como a Apple atualiza o iOS com frequência, recomendamos assistir ao tutorial antes e, em caso de dúvida, falar com o suporte."],
  ["Posso restaurar o original?", "Sim. Você pode voltar ao visual original do cartão a qualquer momento pela própria ferramenta."],
  ["Como recebo o acesso?", "O acesso é digital e enviado para o e-mail informado na compra, logo após a confirmação do pagamento."],
  ["Qual a política de reembolso?", `Você tem ${siteConfig.guaranteeDays} dias de garantia. Se não ficar satisfeito, basta solicitar o reembolso dentro desse prazo.`],
];

function Index() {
  const wa = `https://wa.me/${siteConfig.whatsappNumber}`;
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <div className="border-b border-border bg-secondary px-4 py-2 text-center text-xs text-muted-foreground">
        Acesso digital imediato • Pagamento único • Vídeo tutorial incluso
      </div>

      <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-serif text-xl tracking-wide">
            CARD <span className="text-gold-gradient italic">Style</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>
            ))}
          </nav>
          <a href="#preco" className="rounded-full border border-gold/40 px-4 py-2 text-xs text-gold hover:bg-gold-soft">
            Comprar
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative px-5 pb-24 pt-16 md:pt-24">
          <div className="bg-spot pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
            <Reveal>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gold">Seu Apple Wallet, com outra presença.</p>
              <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
                CARD STYLE: personalize o <em className="text-gold-gradient">visual</em> dos seus cartões na Wallet
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Uma ferramenta para PC Windows que troca a arte dos cartões exibidos no Apple Wallet do seu iPhone. Só a aparência muda — o resto continua igual.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaButton>Quero meu CARD STYLE</CtaButton>
                <span className="text-sm text-muted-foreground">a partir de {siteConfig.price}</span>
              </div>
            </Reveal>
            <Reveal className="flex justify-center [perspective:1200px]">
              <div className="phone-float relative h-[560px] w-[280px] rounded-[3rem] border border-border bg-card p-3 shadow-glow">
                <div className="h-full w-full overflow-hidden rounded-[2.4rem] bg-background p-4 pt-12">
                  <div className="absolute left-1/2 top-6 h-6 w-24 -translate-x-1/2 rounded-full bg-secondary" />
                  <p className="mb-4 text-lg font-semibold">Wallet</p>
                  <div className="relative">
                    {[1, 3, 0, 4].map((n) => styles[n]!).map((c, i) => (
                      <WalletCard key={c.name} c={c} className={i ? "-mt-[42%]" : ""} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* O que é */}
        <section id="o-que-e" className="scroll-mt-20 px-5 py-24">
          <Reveal className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="O que é" title={<>Personalização <em className="text-gold-gradient">visual</em>, nada além disso</>} sub="O CARD STYLE é uma ferramenta de customização estética. Ele troca a arte que aparece no cartão dentro da Wallet." />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass rounded-2xl p-8">
                <h3 className="mb-4 font-serif text-2xl text-gold">O que muda</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ A imagem/arte exibida no cartão</li>
                  <li>✓ A presença visual da sua Wallet</li>
                </ul>
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="mb-4 font-serif text-2xl">O que não muda</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>— Número do cartão</li>
                  <li>— Limite, banco ou bandeira</li>
                  <li>— Funcionamento dos pagamentos</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Estilos */}
        <section id="estilos" className="scroll-mt-20 py-24">
          <Reveal>
            <div className="px-5">
              <SectionTitle eyebrow="Estilos" title={<>Escolha a sua <em className="text-gold-gradient">assinatura</em></>} />
            </div>
            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 md:px-[max(1.25rem,calc((100vw-72rem)/2))]">
              {styles.map((c) => (
                <div key={c.name} className="w-72 shrink-0 snap-center">
                  <WalletCard c={c} />
                  <p className="mt-3 text-center text-sm text-muted-foreground">{c.name}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-xl px-5 text-center text-xs text-muted-foreground">
              Designs ilustrativos e independentes. Não somos afiliados à Apple nem a qualquer banco ou bandeira.
            </p>
          </Reveal>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="scroll-mt-20 px-5 py-24">
          <Reveal className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Como funciona" title={<>Quatro passos, <em className="text-gold-gradient">poucos minutos</em></>} />
            <div className="grid gap-4 md:grid-cols-4">
              {steps.map(([t, d], i) => (
                <div key={t} className="glass rounded-2xl p-6">
                  <span className="font-serif text-4xl italic text-gold">0{i + 1}</span>
                  <h3 className="mt-3 font-medium">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="glass mt-8 flex aspect-video items-center justify-center rounded-2xl">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-glow">▶</div>
                <p className="font-serif text-2xl">Vídeo tutorial</p>
                <p className="text-sm text-muted-foreground">Passo a passo completo incluso no acesso</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Requisitos */}
        <section className="px-5 py-24">
          <Reveal className="mx-auto max-w-3xl">
            <SectionTitle eyebrow="Requisitos" title={<>Transparência <em className="text-gold-gradient">antes</em> da compra</>} />
            <ul className="grid gap-3 sm:grid-cols-2">
              {["PC com Windows", "iPhone", "Cabo USB para o primeiro pareamento", "iTunes ou Apple Devices instalado"].map((r) => (
                <li key={r} className="glass rounded-xl px-5 py-4 text-sm">✓ {r}</li>
              ))}
            </ul>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Importante: o CARD STYLE não é um app para iPhone — ele roda no seu PC Windows. O visual original do cartão pode ser restaurado a qualquer momento.
            </p>
          </Reveal>
        </section>

        {/* Preço */}
        <section id="preco" className="scroll-mt-20 px-5 py-24">
          <Reveal className="mx-auto max-w-md">
            <div className="relative rounded-3xl border border-gold/30 bg-card p-8 shadow-glow">
              <div className="bg-spot pointer-events-none absolute inset-0 rounded-3xl" />
              <div className="relative text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-gold">Pagamento único</p>
                <p className="mt-4 text-sm text-muted-foreground">a partir de</p>
                <p className="font-serif text-6xl">{siteConfig.price}</p>
                <ul className="my-8 space-y-3 text-left text-sm">
                  {["Ferramenta CARD STYLE para Windows", "Coleção de estilos exclusivos", "Vídeo tutorial passo a passo", "Opção de restaurar o original", "Suporte por WhatsApp e e-mail"].map((i) => (
                    <li key={i} className="flex gap-3"><span className="text-gold">✓</span>{i}</li>
                  ))}
                </ul>
                <CtaButton className="w-full">Quero meu CARD STYLE</CtaButton>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs text-gold">
                  🛡 Garantia de {siteConfig.guaranteeDays} dias
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 px-5 py-24">
          <Reveal className="mx-auto max-w-3xl">
            <SectionTitle eyebrow="FAQ" title={<>Perguntas <em className="text-gold-gradient">frequentes</em></>} />
            <div className="space-y-3">
              {faq.map(([q, a]) => (
                <details key={q} className="glass group rounded-xl px-6 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    {q}
                    <span className="text-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto max-w-6xl space-y-6 text-center text-sm text-muted-foreground">
          <p className="font-serif text-2xl text-foreground">CARD <span className="text-gold-gradient italic">Style</span></p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-foreground">Termos de Uso</a>
            <a href="#" className="hover:text-foreground">Política de Privacidade</a>
            <a href={wa} className="hover:text-foreground">WhatsApp</a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">{siteConfig.email}</a>
          </div>
          <p className="mx-auto max-w-2xl text-xs">
            Apple, Apple Pay e Wallet são marcas registradas da Apple Inc. Este produto é independente e não possui afiliação com a Apple ou instituições financeiras.
          </p>
        </div>
      </footer>
    </div>
  );
}
