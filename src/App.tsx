import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  CircuitBoard,
  CloudCog,
  Cpu,
  Fan,
  Gauge,
  History,
  Menu,
  RadioTower,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Thermometer,
  Waves,
  Wind,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const navItems = [
  ['Produto', '#produto'],
  ['Funcionamento', '#funcionamento'],
  ['Benefícios', '#beneficios'],
  ['Mercado', '#mercado'],
  ['Roadmap', '#roadmap'],
  ['Contacto', '#contacto'],
];

const problemCards: CardItem[] = [
  {
    title: 'Ar interior invisível',
    description:
      'CO₂, partículas, humidade e VOCs podem degradar o ambiente sem sinais visíveis para quem ocupa o espaço.',
    icon: Waves,
  },
  {
    title: 'Ventilação não adaptativa',
    description:
      'Muitos edifícios continuam presos a horários fixos ou regras estáticas, mesmo quando a utilização varia ao longo do dia.',
    icon: Fan,
  },
  {
    title: 'Dados sem ação',
    description:
      'Dashboards de monitorização ajudam a ver o problema, mas raramente fecham o ciclo até ao controlo real da ventilação.',
    icon: BarChart3,
  },
];

const features: CardItem[] = [
  {
    title: 'Monitorização contínua',
    description: 'Leitura permanente de CO₂, temperatura, humidade, partículas e VOCs.',
    icon: Activity,
  },
  {
    title: 'Controlo automático',
    description: 'Atuação dinâmica sobre ventilação natural ou mecânica conforme as condições reais.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Integração existente',
    description: 'Ligação a janelas motorizadas, grelhas, ventiladores, VMC ou sistemas HVAC.',
    icon: Building2,
  },
  {
    title: 'Operação local autónoma',
    description: 'Lógica local para continuidade operacional, com opção de infraestrutura cloud ou local.',
    icon: Cpu,
  },
  {
    title: 'Plataforma digital',
    description: 'Visualização em tempo real, configuração do sistema e acompanhamento histórico.',
    icon: Gauge,
  },
  {
    title: 'Atualizações OTA',
    description: 'Evolução de firmware e parâmetros sem intervenções físicas recorrentes.',
    icon: RefreshCw,
  },
  {
    title: 'Histórico de dados',
    description: 'Registo temporal para análise, auditoria técnica e apoio a decisões operacionais.',
    icon: History,
  },
  {
    title: 'Arquitetura modular',
    description: 'Unidades e módulos adaptáveis a diferentes zonas, escalas e tipos de edifício.',
    icon: CircuitBoard,
  },
];

const benefits = [
  'Melhor qualidade do ar interior',
  'Maior conforto e bem-estar dos ocupantes',
  'Redução de ventilação desnecessária',
  'Apoio à conformidade regulamentar',
  'Menor intervenção manual',
  'Dados históricos para auditoria e análise',
];

const customers = [
  'Escritórios',
  'Edifícios administrativos',
  'PMEs',
  'Facility managers',
  'Espaços educativos',
  'Pequenas unidades de saúde',
  'Edifícios em renovação',
];

const mvpItems = [
  'Monitorização ambiental',
  'Controlo automático da ventilação',
  'Plataforma digital',
  'Operação local/cloud',
  'Atualizações OTA',
  'Integração com ventilação existente',
];

const futureItems = [
  'Inferência de ocupação',
  'Otimização preditiva',
  'Relatórios automáticos',
  'Integração smart building',
  'Sensores adicionais',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="renovar-shell min-h-screen bg-graphite-950 text-white">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />
        <ProblemSection />
        <SystemSection />
        <FeaturesSection />
        <BenefitsSection />
        <CustomersSection />
        <DashboardPreview />
        <RoadmapSection />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}

function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite-950/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#top"
          className="group inline-flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
          aria-label="RenovAR, ir para o início"
        >
          <span className="grid size-9 place-items-center rounded-full border border-air-400/40 bg-air-400/10 shadow-glow">
            <Wind className="size-4 text-air-300" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-white">
            RenovAR
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contacto"
            className="rounded-full border border-air-300/40 bg-air-400 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-graphite-950 shadow-glow transition hover:bg-air-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-300 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
          >
            Pedir demonstração
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:border-air-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950 lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-graphite-900/96 px-5 py-5 shadow-2xl lg:hidden"
        >
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Navegação móvel">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium uppercase tracking-[0.14em] text-zinc-300 transition hover:border-air-300/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-2xl bg-air-400 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-graphite-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-300"
            >
              Pedir demonstração
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-5 pb-12 pt-8 sm:pt-10 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[2rem] border border-white/10 bg-graphite-900/78 p-6 shadow-insetline sm:p-8 lg:min-h-[560px] lg:p-9">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-air-300/30 bg-air-400/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-air-300">
            <span className="size-1.5 rounded-full bg-air-300" />
            Sistema IoT para qualidade do ar interior
          </div>

          <div className="max-w-4xl">
            <h1 className="font-display text-4xl font-semibold uppercase leading-[0.96] tracking-[0.03em] text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Controlo inteligente da qualidade do ar interior.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              O RenovAR liga monitorização ambiental e atuação automática, ajustando a
              ventilação às condições reais de cada espaço.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-air-400 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-graphite-950 shadow-glow transition hover:bg-air-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-300 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
            >
              Pedir demonstração
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#funcionamento"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-white transition hover:border-air-300/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
            >
              Ver funcionamento
              <ChevronRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              ['Medir', 'Sensores ambientais em tempo real'],
              ['Interpretar', 'Lógica local/cloud e modelos de controlo'],
              ['Atuar', 'Controlo automático da ventilação'],
            ].map(([title, text]) => (
              <a
                key={title}
                href="#funcionamento"
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-air-300/35 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
                    {title}
                  </span>
                  <ArrowRight
                    className="size-4 text-zinc-500 transition group-hover:translate-x-1 group-hover:text-air-300"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm leading-6 text-zinc-300">{text}</p>
              </a>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const metrics = [
    ['CO₂', '742 ppm', 'normal'],
    ['Temperatura', '22.4 °C', 'estável'],
    ['Humidade', '48%', 'ideal'],
    ['Partículas', '11 µg/m³', 'baixo'],
    ['VOCs', '0.31 ppm', 'controlado'],
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-800/80 via-graphite-800 to-graphite-950 p-5 shadow-insetline sm:p-6 lg:min-h-[560px]">
      <div className="absolute inset-0 bg-technical-grid bg-[length:44px_44px] opacity-45" />
      <div className="absolute -right-20 top-20 size-72 rounded-full bg-air-400/15 blur-3xl" />
      <div className="absolute left-6 top-10 h-[58%] w-[72%] rounded-full border border-air-300/10" />
      <div className="absolute left-12 top-20 h-[44%] w-[58%] rounded-full border border-white/10" />

      <div className="airflow-line" />
      <div className="airflow-line" />
      <div className="airflow-line" />
      <div className="airflow-line" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.67rem] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Zona A / Piso 02
            </p>
            <h2 className="mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-white">
              Nucleo ambiental
            </h2>
          </div>
          <div className="rounded-full border border-air-300/30 bg-air-400/10 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-air-300">
            Auto
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {metrics.map(([label, value, state]) => (
            <div
              key={label}
              className="rounded-[1.35rem] border border-white/10 bg-graphite-950/48 p-4 backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.67rem] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  {label}
                </span>
                <span className="size-2 rounded-full bg-air-300 shadow-[0_0_16px_rgba(138,245,207,.8)]" />
              </div>
              <p className="mt-4 font-display text-2xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-air-300">{state}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[1.6rem] border border-air-300/22 bg-graphite-950/70 p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Modo automático ativo</p>
              <p className="mt-1 text-sm text-zinc-400">Ventilação ajustada em tempo real</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-air-300 opacity-60" />
                <span className="relative inline-flex size-3 rounded-full bg-air-300" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-air-300">
                Atuação 37%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  id,
  eyebrow,
  title,
  text,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">{eyebrow}</p>
      <h2
        id={id}
        className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">{text}</p>}
    </div>
  );
}

function ProblemSection() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="problema-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="problema-title"
          eyebrow="Problema operacional"
          title="Medir o ar não chega quando o edifício continua a reagir tarde."
          text="Muitos sistemas ainda ventilam por horário, por configuração fixa ou por decisão manual. O RenovAR fecha a lacuna entre dados ambientais e controlo efetivo."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {problemCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSection() {
  const nodes = [
    ['Unidades sensoras', 'CO₂ NDIR, temperatura, humidade, partículas e VOCs', RadioTower],
    ['Processamento local', 'Regras, limites, histerese e lógica de segurança', Cpu],
    ['Plataforma digital', 'Tempo real, histórico e configuração operacional', CloudCog],
    ['Módulo de controlo', 'Sinais para atuadores, grelhas, janelas, VMC ou HVAC', SlidersHorizontal],
    ['Ventilação existente', 'Camada operacional sobre a infraestrutura instalada', Fan],
  ] as const;

  return (
    <section
      id="funcionamento"
      className="px-5 py-16 lg:px-8 lg:py-24"
      aria-labelledby="funcionamento-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">Funcionamento</p>
            <h2
              id="funcionamento-title"
              className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Um sistema modular para medir, decidir e atuar.
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-400">
              O sistema funciona como uma camada operacional sobre edifícios existentes. Não
              exige substituição integral da infraestrutura: acrescenta inteligência, leitura
              ambiental e atuação coordenada.
            </p>
            <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Lógica central
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white">
                <span className="rounded-full border border-air-300/35 bg-air-400/10 px-4 py-2 text-air-300">
                  Medir
                </span>
                <ArrowRight className="size-4 text-zinc-500" aria-hidden="true" />
                <span className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2">
                  Interpretar
                </span>
                <ArrowRight className="size-4 text-zinc-500" aria-hidden="true" />
                <span className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2">
                  Atuar
                </span>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-graphite-900/70 p-4 shadow-insetline sm:p-6">
            <div className="absolute left-1/2 top-14 hidden h-[calc(100%-7rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-air-300/35 to-transparent lg:block" />
            <div className="grid gap-4 md:grid-cols-2">
              {nodes.map(([title, text, Icon], index) => (
                <div
                  key={title}
                  className={`relative rounded-[1.5rem] border border-white/10 bg-graphite-950/68 p-5 transition hover:border-air-300/32 hover:bg-white/[0.055] ${
                    index === 4 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl border border-air-300/22 bg-air-400/10">
                      <Icon className="size-5 text-air-300" aria-hidden="true" />
                    </span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-zinc-500">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="produto" className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="produto-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="produto-title"
          eyebrow="Produto"
          title="MVP orientado para controlo real, não apenas monitorização."
          text="As capacidades atuais concentram-se na leitura ambiental contínua, decisão operacional e integração com sistemas de ventilação existentes."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <InfoCard key={feature.title} {...feature} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="beneficios" className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="beneficios-title">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-graphite-900/70 p-6 shadow-insetline sm:p-8 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">Benefícios</p>
          <h2
            id="beneficios-title"
            className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
          >
            Ar melhor. Operação mais eficiente. Edifícios mais inteligentes.
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-400">
            O RenovAR ajuda equipas de operação a passar de observação passiva para controlo
            baseado em condições reais, mantendo uma abordagem técnica e auditável.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="rounded-[1.55rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-air-300/30 hover:bg-white/[0.055]"
            >
              <div className="mb-8 flex items-center justify-between">
                <Check className="size-5 text-air-300" aria-hidden="true" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  B{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-semibold leading-7 text-white">{benefit}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomersSection() {
  return (
    <section id="mercado" className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="mercado-title">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">Mercado</p>
            <h2
              id="mercado-title"
              className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Foco inicial em edifícios de serviços de pequena e média escala.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            A proposta é adequada a edifícios onde a qualidade do ar, o conforto e a operação
            eficiente importam, mas onde uma renovação integral da infraestrutura pode ser
            excessiva ou pouco faseada.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {customers.map((customer, index) => (
            <div
              key={customer}
              className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-5 transition hover:border-air-300/30 ${
                index === 6 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="mb-7 flex items-center justify-between">
                <Building2 className="size-5 text-air-300" aria-hidden="true" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  Sector
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{customer}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="dashboard-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="dashboard-title"
          eyebrow="Interface operacional"
          title="Dashboard desenhado para decisão e acompanhamento técnico."
          text="Uma vista de produto que combina estado ambiental, atuação e histórico sem transformar o sistema num painel passivo."
        />

        <div className="rounded-[2rem] border border-white/10 bg-graphite-900/80 p-4 shadow-insetline sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                RenovAR Control / Edifício Norte
              </p>
              <h3 className="mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-white">
                Zona Open Space 2
              </h3>
            </div>
            <div className="flex w-full max-w-xs rounded-full border border-white/10 bg-graphite-950 p-1">
              <button
                type="button"
                className="flex-1 rounded-full bg-air-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-graphite-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-300"
              >
                Auto
              </button>
              <button
                type="button"
                className="flex-1 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
              >
                Manual
              </button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <MetricPanel className="lg:col-span-3" label="CO₂" value="742" unit="ppm" status="Normal" icon={Gauge} />
            <MetricPanel className="lg:col-span-3" label="Temperatura" value="22.4" unit="°C" status="Estável" icon={Thermometer} />
            <MetricPanel className="lg:col-span-3" label="Humidade" value="48" unit="%" status="Ideal" icon={Waves} />
            <MetricPanel className="lg:col-span-3" label="VOCs" value="0.31" unit="ppm" status="Controlado" icon={ShieldCheck} />

            <div className="rounded-[1.6rem] border border-white/10 bg-graphite-950/72 p-5 lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Estado da ventilação</p>
              <div className="mt-6 flex items-end justify-between gap-5">
                <div>
                  <p className="font-display text-4xl font-semibold text-white">37%</p>
                  <p className="mt-2 text-sm text-zinc-400">Abertura equivalente</p>
                </div>
                <div className="grid size-20 place-items-center rounded-full border border-air-300/24 bg-air-400/10">
                  <Fan className="size-9 text-air-300" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-7 h-2 rounded-full bg-white/8">
                <div className="h-full w-[37%] rounded-full bg-air-400 shadow-glow" />
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-graphite-950/72 p-5 lg:col-span-5">
              <div className="mb-8 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Histórico 24h
                </p>
                <span className="text-xs font-semibold text-air-300">CO₂ / atuação</span>
              </div>
              <div className="chart-bars grid h-36 grid-cols-12 items-end gap-2" aria-label="Grafico temporal de qualidade do ar">
                {[44, 52, 48, 68, 76, 71, 62, 54, 59, 49, 42, 38].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-air-300/22 bg-air-400/10 p-5 lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
                Ação recomendada
              </p>
              <h3 className="mt-5 text-xl font-semibold leading-7 text-white">
                Manter modo automático e reduzir atuação quando CO₂ estabilizar.
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-300">
                Tendência de descida nos últimos 18 minutos. Sem intervenção manual necessária.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="roadmap-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="roadmap-title"
          eyebrow="Roadmap"
          title="Capacidades atuais separadas da evolução futura."
          text="A comunicação do produto distingue claramente o MVP operacional dos desenvolvimentos planeados para fases posteriores."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <RoadmapColumn title="MVP atual" items={mvpItems} active />
          <RoadmapColumn title="Evolucao futura" items={futureItems} />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contacto" className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="contacto-title">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-air-300/24 bg-gradient-to-br from-air-400/20 via-graphite-800 to-graphite-950 p-6 shadow-glow sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-technical-grid bg-[length:48px_48px] opacity-35" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">Contacto</p>
              <h2
                id="contacto-title"
                className="mt-4 max-w-4xl font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
              >
                Transforme dados ambientais em controlo real da ventilação.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                Fale connosco para avaliar a aplicação do RenovAR no seu edifício.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="mailto:contacto@renovar.pt?subject=Pedido%20de%20demonstra%C3%A7%C3%A3o%20RenovAR"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-air-400 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-graphite-950 shadow-glow transition hover:bg-air-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-300 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
              >
                Pedir demonstração
                <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="mailto:contacto@renovar.pt"
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-white transition hover:border-air-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
              >
                Contactar equipa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-air-400/40 bg-air-400/10">
              <Wind className="size-4 text-air-300" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-white">
              RenovAR
            </span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
            Sistema IoT modular para monitorização da qualidade do ar interior e controlo
            automático da ventilação em edifícios de serviços.
          </p>
          <p className="mt-5 text-sm text-zinc-500">Contacto: contacto@renovar.pt</p>
        </div>

        <div className="grid gap-3 text-sm text-zinc-400 sm:grid-cols-3 lg:text-right">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-zinc-600">
        © {new Date().getFullYear()} RenovAR. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function InfoCard({ title, description, icon: Icon, compact = false }: CardItem & { compact?: boolean }) {
  return (
    <article
      className={`group rounded-[1.6rem] border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-air-300/32 hover:bg-white/[0.055] ${
        compact ? 'p-5' : 'p-6 sm:p-7'
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-2xl border border-air-300/22 bg-air-400/10">
          <Icon className="size-5 text-air-300" aria-hidden="true" />
        </span>
        <ArrowRight
          className="size-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-air-300"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
    </article>
  );
}

function MetricPanel({
  label,
  value,
  unit,
  status,
  icon: Icon,
  className,
}: {
  label: string;
  value: string;
  unit: string;
  status: string;
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div className={`rounded-[1.6rem] border border-white/10 bg-graphite-950/72 p-5 ${className ?? ''}`}>
      <div className="mb-8 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
        <Icon className="size-5 text-air-300" aria-hidden="true" />
      </div>
      <div className="flex items-end gap-2">
        <p className="font-display text-4xl font-semibold text-white">{value}</p>
        <p className="pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">{unit}</p>
      </div>
      <p className="mt-4 inline-flex rounded-full border border-air-300/25 bg-air-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-air-300">
        {status}
      </p>
    </div>
  );
}

function RoadmapColumn({ title, items, active = false }: { title: string; items: string[]; active?: boolean }) {
  return (
    <div
      className={`rounded-[2rem] border p-6 sm:p-8 ${
        active
          ? 'border-air-300/30 bg-air-400/10 shadow-glow'
          : 'border-white/10 bg-white/[0.03]'
      }`}
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">
          {title}
        </h3>
        <span
          className={`rounded-full border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] ${
            active
              ? 'border-air-300/30 bg-air-400/10 text-air-300'
              : 'border-white/10 bg-white/[0.035] text-zinc-500'
          }`}
        >
          {active ? 'Atual' : 'Roadmap'}
        </span>
      </div>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
            <span
              className={`mt-1 grid size-5 shrink-0 place-items-center rounded-full border ${
                active ? 'border-air-300/35 text-air-300' : 'border-white/15 text-zinc-500'
              }`}
            >
              <Check className="size-3" aria-hidden="true" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
