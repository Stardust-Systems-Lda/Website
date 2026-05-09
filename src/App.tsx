import { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Brain,
  Building2,
  Check,
  ChevronRight,
  CircuitBoard,
  CloudCog,
  Cpu,
  EyeOff,
  Fan,
  FileCheck,
  Gauge,
  History,
  Layers3,
  Menu,
  PlugZap,
  RadioTower,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Thermometer,
  Waves,
  Wind,
  X,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const contactEmail = 'stardust.systems7@gmail.com';

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type LinkItem = readonly [string, string];

const navItems: LinkItem[] = [
  ['Problema', '#problema'],
  ['Solução', '#solucao'],
  ['Funcionamento', '#funcionamento'],
  ['Validação', '#validacao'],
  ['Benefícios', '#beneficios'],
  ['Roadmap', '#roadmap'],
  ['Contacto', '#contacto'],
];

const footerGroups = [
  {
    title: 'Produto',
    links: [
      ['Problema', '#problema'],
      ['Solução', '#solucao'],
      ['Funcionamento', '#funcionamento'],
      ['Benefícios', '#beneficios'],
    ] as LinkItem[],
  },
  {
    title: 'Operação',
    links: [
      ['Validação', '#validacao'],
      ['Dashboard', '#dashboard'],
      ['Roadmap', '#roadmap'],
      ['Contacto', '#contacto'],
    ] as LinkItem[],
  },
];

const heroProblemCards = [
  {
    title: 'Invisível',
    description: 'Não se vê, mas acumula-se em espaços fechados.',
  },
  {
    title: 'Contínuo',
    description: 'A degradação pode ocorrer ao longo de horas, dias ou meses.',
  },
  {
    title: 'Operacional',
    description: 'Sem atuação automática, os dados não resolvem o problema.',
  },
];

const diagnosticMetrics = [
  ['CO₂', '1450 ppm', 'acima do limite configurado'],
  ['VOCs', 'elevado', 'fontes interiores ativas'],
  ['Partículas', 'moderado', 'tendência em observação'],
  ['Humidade', '62%', 'risco de desconforto'],
  ['Ventilação', 'não adaptativa', 'horário fixo'],
];

const problemCards: CardItem[] = [
  {
    title: 'Ar interior invisível',
    description:
      'Poluentes e parâmetros ambientais degradam-se sem sinais imediatos. Quando o desconforto é percebido, o espaço já pode estar mal ventilado há horas.',
    icon: EyeOff,
  },
  {
    title: 'Ventilação estática',
    description:
      'Horários fixos e regras manuais não acompanham ocupação real, variações ambientais ou necessidades específicas de cada espaço.',
    icon: Wind,
  },
  {
    title: 'Sensores sem atuação',
    description:
      'Muitos sistemas mostram valores num ecrã, mas não controlam a ventilação. A informação existe, mas não muda o comportamento do edifício.',
    icon: Activity,
  },
  {
    title: 'Impacto acumulado',
    description:
      'A exposição repetida a ambientes interiores mal ventilados pode afetar conforto, bem-estar, concentração e perceção de qualidade do espaço.',
    icon: Brain,
  },
  {
    title: 'Ineficiência energética',
    description:
      'Ventilar de menos prejudica o ar interior. Ventilar em excesso desperdiça energia. O desafio está em ventilar quando é necessário.',
    icon: Zap,
  },
  {
    title: 'Pressão regulamentar',
    description:
      'A qualidade do ar interior e o desempenho energético estão cada vez mais ligados a requisitos de gestão, certificação e operação dos edifícios.',
    icon: FileCheck,
  },
];

const impactItems = [
  {
    title: 'Conforto e bem-estar',
    description:
      'Parâmetros fora dos limites configurados podem contribuir para desconforto e perceção negativa do espaço.',
  },
  {
    title: 'Concentração e desempenho',
    description:
      'Ambientes interiores mal ventilados podem afetar atenção, fadiga e qualidade de utilização ao longo do dia.',
  },
  {
    title: 'Sistema respiratório',
    description:
      'Partículas, humidade e COVs reforçam a importância de monitorização contínua e ventilação adequada.',
  },
  {
    title: 'Ocupantes vulneráveis',
    description:
      'Crianças, idosos e pessoas com alergias ou asma podem ser mais sensíveis a condições ambientais degradadas.',
  },
  {
    title: 'Operação e custos',
    description:
      'A ventilação sem feedback ambiental aumenta a dependência de regras fixas e intervenção manual.',
  },
  {
    title: 'Conformidade e risco',
    description:
      'A pressão regulamentar aumenta a necessidade de dados históricos, gestão consistente e evidência operacional.',
  },
];

const marketShiftCards: CardItem[] = [
  {
    title: 'Preocupação crescente',
    description:
      'Empresas, ocupantes e gestores de espaços estão mais atentos à qualidade do ambiente interior.',
    icon: Activity,
  },
  {
    title: 'Edifícios mais exigentes',
    description:
      'Espaços com ocupação variável precisam de ventilação ajustada às condições reais, não apenas a horários.',
    icon: Building2,
  },
  {
    title: 'Regulamentação mais apertada',
    description:
      'A qualidade do ar interior e a eficiência energética são cada vez mais relevantes na operação dos edifícios.',
    icon: FileCheck,
  },
  {
    title: 'Dados precisam de ação',
    description:
      'A próxima etapa não é apenas medir melhor. É transformar dados ambientais em decisões operacionais.',
    icon: Zap,
  },
];

const solutionSteps = [
  {
    title: 'Medir',
    description:
      'Sensores ambientais monitorizam continuamente CO₂, temperatura, humidade, partículas e COVs.',
    icon: RadioTower,
  },
  {
    title: 'Interpretar',
    description:
      'A lógica local ou local/cloud analisa os dados e determina a necessidade de ventilação.',
    icon: Cpu,
  },
  {
    title: 'Atuar',
    description:
      'O sistema aciona ventilação natural ou mecânica existente, de forma automática ou assistida.',
    icon: SlidersHorizontal,
  },
];

const features: CardItem[] = [
  {
    title: 'Monitorização contínua',
    description:
      'Leitura permanente de CO₂, temperatura, humidade, partículas e COVs em espaços interiores.',
    icon: Activity,
  },
  {
    title: 'Controlo automático',
    description:
      'Execução de lógica de controlo para atuar sobre ventilação conforme as condições reais.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Integração existente',
    description:
      'Ligação a janelas motorizadas, grelhas, ventiladores, VMC ou sistemas HVAC existentes.',
    icon: Building2,
  },
  {
    title: 'Operação local autónoma',
    description:
      'Capacidade de funcionamento local para continuidade operacional, com opção local/cloud.',
    icon: Cpu,
  },
  {
    title: 'Plataforma digital',
    description:
      'Visualização em tempo real, histórico de dados e configuração operacional de múltiplos espaços.',
    icon: Gauge,
  },
  {
    title: 'Atualizações OTA',
    description:
      'Evolução de firmware e parâmetros sem intervenções físicas recorrentes no equipamento.',
    icon: RefreshCw,
  },
  {
    title: 'Histórico de dados',
    description:
      'Registo temporal para auditoria técnica, análise operacional e apoio a decisões de gestão.',
    icon: History,
  },
  {
    title: 'Arquitetura modular',
    description:
      'Unidades e módulos adaptáveis a diferentes zonas, escalas e tipos de edifício.',
    icon: CircuitBoard,
  },
];

const benefits = [
  {
    title: 'Melhor qualidade do ar interior',
    description:
      'Ajuda a manter os parâmetros ambientais observados e a atuar quando o espaço exige renovação de ar.',
  },
  {
    title: 'Maior conforto e bem-estar dos ocupantes',
    description:
      'Reduz a dependência de perceções tardias, apoiando uma gestão mais consistente das condições interiores.',
  },
  {
    title: 'Redução de ventilação desnecessária',
    description:
      'Evita funcionamento excessivo quando as condições do espaço não exigem renovação adicional do ar.',
  },
  {
    title: 'Apoio à conformidade regulamentar',
    description:
      'Fornece dados e histórico que ajudam equipas técnicas a acompanhar requisitos de qualidade e operação.',
  },
  {
    title: 'Menor intervenção manual',
    description:
      'Automatiza respostas repetitivas e permite que equipas de operação atuem com melhor informação.',
  },
  {
    title: 'Dados históricos para auditoria e análise',
    description:
      'Regista tendências para perceber padrões, comparar espaços e justificar decisões operacionais.',
  },
];

const customers = [
  'Escritórios',
  'Edifícios administrativos',
  'PMEs',
  'Facility managers',
  'Investigação e educação',
  'Pequenas unidades de saúde',
  'Ambientes controlados',
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
  'Estimativa de ocupação sem câmaras',
  'Modelos físicos + IA para otimização',
  'Otimização preditiva da renovação do ar',
  'Relatórios automáticos',
  'Integração smart building',
  'Sensores adicionais',
];

const validatedVisuals = [
  {
    title: 'Arquitetura do sistema',
    description:
      'Da observação ambiental à decisão local/cloud e à interface operacional para utilizadores técnicos.',
    image: '/assets/renovar-system-architecture.png',
    alt: 'Diagrama validado da arquitetura RenovAR, do sensing e atuação até à interface de utilizador.',
  },
  {
    title: 'Diferença estratégica',
    description:
      'Privacidade, modelos físicos, integração aberta e arquitetura preparada para evolução faseada.',
    image: '/assets/renovar-strategic-difference.png',
    alt: 'Mapa estratégico RenovAR com privacidade, modelos físicos, integração simples e arquitetura escalável.',
  },
  {
    title: 'Evolução não-intrusiva',
    description:
      'Linha de evolução para estimar ocupação e taxas de renovação sem câmaras nem sensores sensíveis.',
    image: '/assets/renovar-non-intrusive-intelligence.png',
    alt: 'Visual técnico sobre inteligência não-intrusiva e estimativa sem câmaras.',
  },
];

const designPillars = [
  {
    title: 'Modularidade e escalabilidade',
    description:
      'Permite começar pelo essencial e evoluir por zonas, edifícios ou requisitos operacionais.',
    icon: Layers3,
  },
  {
    title: 'Interoperabilidade',
    description:
      'Integra-se com sistemas existentes para acrescentar decisão, não para isolar a infraestrutura.',
    icon: PlugZap,
  },
  {
    title: 'Privacidade e dados',
    description:
      'Foca-se em parâmetros ambientais e evolução não-intrusiva, evitando dependência de câmaras.',
    icon: EyeOff,
  },
  {
    title: 'Operação a longo prazo',
    description:
      'Arquitetura preparada para piloto, manutenção, atualização e operação contínua em edifícios reais.',
    icon: ShieldCheck,
  },
];

const realWorldImages = [
  {
    title: 'Unidade sensora',
    description:
      'Protótipo físico com caixa ventilada, eletrónica visível e instalação em parede para recolha ambiental contínua.',
    image: '/assets/renovar-sensor.jpeg',
    alt: 'Caixa do sensor RenovAR instalada numa parede com grelha frontal e eletrónica visível.',
    meta: 'Caixa do sensor RenovAR',
  },
  {
    title: 'Atuação sobre ventilação natural',
    description:
      'Integração com janelas atuadas automaticamente por um sistema RenovAR em contexto real.',
    image: '/assets/renovar-janelas-abertas.jpeg',
    alt: 'Janelas interiores abertas automaticamente por um sistema RenovAR.',
    meta: 'Integração física no edifício',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="renovar-shell min-h-screen bg-graphite-950 text-white">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <HeroProblem />
        <ProblemSection />
        <ImpactSection />
        <MarketShiftSection />
        <SolutionIntro />
        <SystemArchitectureSection />
        <ValidatedMaterialSection />
        <FeaturesSection />
        <RealWorldSection />
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
          className="group inline-flex items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
          aria-label="RenovAR, ir para o início"
        >
          <img
            src="/assets/renovar-logo.png"
            alt="RenovAR"
            className="h-10 w-auto object-contain drop-shadow-[0_0_18px_rgba(67,230,178,0.16)] sm:h-12"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
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

function HeroProblem() {
  return (
    <section id="top" className="relative px-5 pb-12 pt-8 sm:pt-10 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[2rem] border border-white/10 bg-graphite-900/78 p-6 shadow-insetline sm:p-8 lg:min-h-[600px] lg:p-9">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-air-300/30 bg-air-400/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-air-300">
            <span className="size-1.5 rounded-full bg-air-300" />
            Diagnóstico de ar interior
          </div>

          <div className="max-w-4xl">
            <h1 className="font-display text-4xl font-semibold uppercase leading-[0.96] tracking-[0.03em] text-white sm:text-5xl lg:text-6xl xl:text-[4.35rem]">
              Sabe a qualidade do ar que respira?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              A qualidade do ar interior é invisível, mas afeta conforto, saúde,
              produtividade e eficiência operacional todos os dias.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Em muitos edifícios, a ventilação ainda funciona por horários fixos ou regras
              estáticas. O ar degrada-se, os dados não são usados para decidir e os sistemas
              raramente atuam em função das condições reais do espaço.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#problema"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-air-400 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-graphite-950 shadow-glow transition hover:bg-air-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-300 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
            >
              Ver o problema
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#solucao"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-white transition hover:border-air-300/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
            >
              Como o RenovAR resolve
              <ChevronRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {heroProblemCards.map((card) => (
              <a
                key={card.title}
                href="#problema"
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-air-300/35 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
                    {card.title}
                  </span>
                  <ArrowRight
                    className="size-4 text-zinc-500 transition group-hover:translate-x-1 group-hover:text-air-300"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm leading-6 text-zinc-300">{card.description}</p>
              </a>
            ))}
          </div>
        </div>

        <DiagnosticPanel />
      </div>
    </section>
  );
}

function DiagnosticPanel() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-800/80 via-graphite-800 to-graphite-950 p-5 shadow-insetline sm:p-6 lg:min-h-[600px]">
      <div className="absolute inset-0 bg-technical-grid bg-[length:44px_44px] opacity-45" />
      <div className="absolute -right-20 top-20 size-72 rounded-full bg-air-400/12 blur-3xl" />
      <div className="absolute bottom-24 left-8 h-44 w-64 rounded-[2rem] border border-white/10 bg-white/[0.02]" />
      <div className="absolute bottom-40 left-20 h-20 w-20 rounded-full border border-air-300/15" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-air-300/30 to-transparent" />

      <div className="airflow-line" />
      <div className="airflow-line" />
      <div className="airflow-line" />
      <div className="airflow-line" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.67rem] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Sala reunião / Piso 02
            </p>
            <h2 className="mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-white">
              Diagnóstico ambiental
            </h2>
          </div>
          <div className="rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-amber-200">
            Atenção
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-amber-300/24 bg-amber-300/10 p-5 backdrop-blur-md">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 size-5 shrink-0 text-amber-200" aria-hidden="true" />
            <div>
              <p className="font-semibold text-white">Qualidade do ar em degradação</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                O ar interior pode degradar-se sem sinais visíveis.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {diagnosticMetrics.map(([label, value, state]) => (
            <div
              key={label}
              className="rounded-[1.35rem] border border-white/10 bg-graphite-950/55 p-4 backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.67rem] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  {label}
                </span>
                <span className="size-2 rounded-full bg-amber-200 shadow-[0_0_16px_rgba(251,191,36,.6)]" />
              </div>
              <p className="mt-4 font-display text-2xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-400">{state}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-graphite-950/70 p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Ventilação não adaptativa</p>
              <p className="mt-1 text-sm text-zinc-400">
                Sistema a funcionar por rotina, não por condições reais.
              </p>
            </div>
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-300">
              Dados sem ação
            </span>
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
    <section id="problema" className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="problema-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="problema-title"
          eyebrow="Problema"
          title="O problema não está só no ar. Está na falta de resposta."
          text="CO₂, partículas, humidade e compostos orgânicos voláteis podem acumular-se em ambientes interiores sem serem percebidos pelos ocupantes. Mesmo quando existem sensores, muitos edifícios continuam sem uma ligação efetiva entre monitorização e ventilação."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
        <div className="mt-4 rounded-[1.7rem] border border-air-300/20 bg-air-400/8 p-5 text-sm leading-7 text-zinc-300">
          Os dados são apresentados, mas nem sempre são transformados em ação. O problema não
          está apenas no ar que respiramos. Está na forma como os edifícios respondem a ele.
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="impacto-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-graphite-900/70 p-6 shadow-insetline sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">Impacto</p>
            <h2
              id="impacto-title"
              className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              O que não se vê pode afetar todos os dias.
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-400">
              A qualidade do ar interior influencia a forma como um espaço é sentido, utilizado e
              gerido. Em edifícios de serviços, escritórios, salas de reunião ou espaços educativos,
              a acumulação de CO₂, partículas, humidade e COVs pode afetar conforto, concentração
              e bem-estar.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-air-300/24 bg-air-400/10 p-5">
              <p className="text-sm font-semibold leading-7 text-white">
                O problema não está no que vemos. Está no que respiramos, e na forma como o
                edifício reage.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {impactItems.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.55rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-air-300/30 hover:bg-white/[0.055] ${
                  index === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl border border-air-300/22 bg-air-400/10">
                    <Check className="size-4 text-air-300" aria-hidden="true" />
                  </span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-zinc-600">
                    I{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-7 text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketShiftSection() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="mudanca-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="mudanca-title"
          eyebrow="Porque agora"
          title="O mercado está a mudar."
          text="A próxima etapa não é apenas medir melhor. É transformar dados ambientais em decisões operacionais que ajustam a ventilação quando o espaço precisa."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketShiftCards.map((card) => (
            <InfoCard key={card.title} {...card} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionIntro() {
  return (
    <section id="solucao" className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="solucao-title">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">
              Solução
            </p>
            <h2
              id="solucao-title"
              className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              É aqui que entra o RenovAR.
            </h2>
          </div>
          <div className="max-w-3xl lg:justify-self-end">
            <p className="text-xl font-semibold leading-8 text-white">
              Um sistema IoT modular que liga monitorização ambiental a controlo real da ventilação.
            </p>
            <p className="mt-4 inline-flex rounded-full border border-air-300/25 bg-air-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-air-300">
              RenovAR transforma dados ambientais em controlo real da ventilação.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              O RenovAR foi desenvolvido para fechar a lacuna entre saber o que está a acontecer
              no ar interior e agir sobre a ventilação. Mede parâmetros ambientais, interpreta os
              dados e atua sobre sistemas existentes, ajudando o edifício a responder às suas
              condições reais de utilização.
            </p>
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-white/10 bg-graphite-900/70 p-4 shadow-insetline sm:p-6 lg:p-8">
          <div className="absolute left-[12%] right-[12%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-air-300/35 to-transparent lg:block" />
          <div className="grid gap-4 lg:grid-cols-3">
            {solutionSteps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-[1.65rem] border border-white/10 bg-graphite-950/72 p-6 transition hover:-translate-y-1 hover:border-air-300/35 hover:bg-white/[0.055]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-air-300/25 bg-air-400/10">
                    <step.icon className="size-5 text-air-300" aria-hidden="true" />
                  </span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-zinc-600">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{step.description}</p>
                {index < solutionSteps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 z-10 hidden size-8 -translate-y-1/2 rounded-full border border-air-300/25 bg-graphite-950 p-1.5 text-air-300 lg:block"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
          <div className="mt-4 rounded-[1.45rem] border border-air-300/20 bg-air-400/8 p-5 text-sm font-semibold leading-7 text-white">
            Não é apenas monitorização. É monitorização com consequência operacional.
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemArchitectureSection() {
  const nodes = [
    [
      'Unidades sensoras',
      'Recolha contínua de parâmetros ambientais relevantes para qualidade do ar interior.',
      RadioTower,
    ],
    [
      'Processamento local',
      'Execução de lógica de controlo com capacidade de operação autónoma.',
      Cpu,
    ],
    [
      'Plataforma digital',
      'Visualização em tempo real, histórico de dados e gestão de múltiplos espaços.',
      CloudCog,
    ],
    [
      'Módulo de controlo',
      'Interface entre a decisão do sistema e a atuação física sobre a ventilação.',
      SlidersHorizontal,
    ],
    [
      'Ventilação existente',
      'Integração com janelas motorizadas, grelhas, VMC, ventilação mecânica ou HVAC.',
      Fan,
    ],
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">
              Funcionamento
            </p>
            <h2
              id="funcionamento-title"
              className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Da medição à ação: a arquitetura do sistema.
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-400">
              O RenovAR funciona como uma camada operacional sobre edifícios existentes. Em vez
              de substituir a infraestrutura, integra-se com sistemas de ventilação natural ou
              mecânica e acrescenta capacidade de decisão baseada em dados.
            </p>
            <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Configuração técnica
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                A configuração pode adaptar-se às políticas de IT do cliente, com infraestrutura
                local, cloud ou abordagem híbrida.
              </p>
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

function ValidatedMaterialSection() {
  return (
    <section
      id="validacao"
      className="px-5 py-16 lg:px-8 lg:py-24"
      aria-labelledby="validacao-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">
              Validação
            </p>
            <h2
              id="validacao-title"
              className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Pensado para edifícios reais, não para demonstrações isoladas.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            A solução foi concebida para responder a uma limitação prática dos edifícios: a
            separação entre medição ambiental, decisão operacional e atuação física. A arquitetura
            modular permite começar pelo essencial e evoluir sem redesenhar todo o sistema.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {validatedVisuals.map((visual, index) => (
            <article
              key={visual.title}
              className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-graphite-900/72 shadow-insetline transition hover:-translate-y-1 hover:border-air-300/28 ${
                index === 0 ? 'lg:col-span-2' : index === 2 ? 'lg:col-span-3' : ''
              }`}
            >
              <div className="relative overflow-hidden border-b border-white/10 bg-zinc-100 p-2">
                <img
                  src={visual.image}
                  alt={visual.alt}
                  loading="lazy"
                  className="aspect-[16/10] h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-graphite-950/50 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-air-300">
                    Material interno
                  </span>
                  <ArrowRight
                    className="size-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-air-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{visual.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{visual.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {designPillars.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5 transition hover:border-air-300/30 hover:bg-white/[0.055]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-2xl border border-air-300/22 bg-air-400/10">
                  <Icon className="size-5 text-air-300" aria-hidden="true" />
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  Pilar
                </span>
              </div>
              <h3 className="text-base font-semibold leading-7 text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-zinc-400">
          Funcionalidades como estimativa de ocupação, otimização preditiva e relatórios
          automáticos fazem parte da evolução futura, não do núcleo atual do MVP.
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
          eyebrow="MVP atual"
          title="O que o RenovAR já permite fazer."
          text="O núcleo funcional do RenovAR já permite monitorizar parâmetros ambientais, executar lógica de controlo e atuar sobre ventilação existente em configurações reais."
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

function RealWorldSection() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="sistema-real-title">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">
              Sistema real
            </p>
            <h2
              id="sistema-real-title"
              className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Implementação real. Não apenas mockup.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            O RenovAR já foi materializado em hardware funcional, com unidades de sensorização,
            módulos de controlo e integração com ventilação natural motorizada. Esta base permite
            validar o funcionamento em ambientes reais e evoluir para instalações mais robustas.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {realWorldImages.map((photo) => (
            <figure
              key={photo.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-insetline"
            >
              <div className="grid min-h-[320px] place-items-center rounded-[1.45rem] bg-zinc-100 p-2 sm:min-h-[420px]">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  className="max-h-[520px] w-full rounded-[1.15rem] object-contain"
                />
              </div>
              <figcaption className="p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
                  {photo.title}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{photo.meta}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{photo.description}</p>
              </figcaption>
            </figure>
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
            Quando o edifício responde ao ar, a operação muda.
          </h2>
          <p className="mt-6 text-xl font-semibold leading-8 text-white">
            Ar melhor. Operação mais eficiente. Edifícios mais inteligentes.
          </p>
          <p className="mt-5 text-base leading-8 text-zinc-400">
            Ao ligar monitorização ambiental a atuação sobre ventilação, o RenovAR permite que o
            edifício deixe de funcionar por pressupostos e passe a responder às condições reais
            do espaço.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="rounded-[1.55rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-air-300/30 hover:bg-white/[0.055]"
            >
              <div className="mb-8 flex items-center justify-between">
                <Check className="size-5 text-air-300" aria-hidden="true" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  B{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-semibold leading-7 text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{benefit.description}</p>
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
              Para edifícios onde o ar interior importa.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            O foco inicial do RenovAR está em edifícios de serviços de pequena e média escala,
            onde a ocupação variável, a ausência de automação avançada e a necessidade de eficiência
            tornam a gestão da ventilação particularmente relevante. O cliente pode ser o
            proprietário, a entidade gestora ou a organização responsável pela operação do espaço.
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
    <section
      id="dashboard"
      className="px-5 py-16 lg:px-8 lg:py-24"
      aria-labelledby="dashboard-title"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="dashboard-title"
          eyebrow="Interface operacional"
          title="Dados que orientam decisões."
          text="A dashboard combina estado ambiental, atuação, tendências e recomendações para apoiar operação técnica, não apenas visualização passiva."
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
            <MetricPanel className="lg:col-span-3" label="CO₂" value="742" unit="ppm" status="Espaço dentro dos limites configurados" icon={Gauge} />
            <MetricPanel className="lg:col-span-3" label="Temperatura" value="22.4" unit="°C" status="Estável" icon={Thermometer} />
            <MetricPanel className="lg:col-span-3" label="Humidade" value="48" unit="%" status="Ideal" icon={Waves} />
            <MetricPanel className="lg:col-span-3" label="VOCs" value="0.31" unit="ppm" status="Qualidade do ar em observação" icon={ShieldCheck} />
            <MetricPanel className="lg:col-span-3" label="Partículas" value="11" unit="µg/m³" status="Baixo" icon={Activity} />

            <div className="rounded-[1.6rem] border border-white/10 bg-graphite-950/72 p-5 lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Estado da ventilação
              </p>
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
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-air-300">
                Modo automático ativo
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-graphite-950/72 p-5 lg:col-span-4">
              <div className="mb-8 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Histórico 24h
                </p>
                <span className="text-xs font-semibold text-air-300">Tendência CO₂ / atuação</span>
              </div>
              <div className="chart-bars grid h-36 grid-cols-12 items-end gap-2" aria-label="Gráfico temporal de qualidade do ar">
                {[44, 52, 48, 68, 76, 71, 62, 54, 59, 49, 42, 38].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-air-300/22 bg-air-400/10 p-5 lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
                Ação recomendada
              </p>
              <h3 className="mt-5 text-xl font-semibold leading-7 text-white">
                Ventilação recomendada até estabilização da tendência CO₂.
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-300">
                Última atuação há 18 minutos. Tendência de descida observada. Sem intervenção
                manual necessária.
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
          title="Atual no essencial. Evolutivo no potencial."
          text="A evolução futura será construída sobre a base já existente, sem apresentar estas capacidades como funcionalidades atuais."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <RoadmapColumn title="MVP atual" items={mvpItems} active />
          <RoadmapColumn title="Evolução futura" items={futureItems} />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contacto" className="px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="contacto-title">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-air-300/24 bg-gradient-to-br from-air-400/20 via-graphite-800 to-graphite-950 p-6 shadow-glow sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-technical-grid bg-[length:48px_48px] opacity-35" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)] lg:items-stretch">
            <div className="flex flex-col justify-between gap-8 py-1 lg:py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">
                  Contacto
                </p>
                <h2
                  id="contacto-title"
                  className="mt-4 max-w-4xl font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
                >
                  Não basta saber que o ar está mau. É preciso fazer o edifício reagir.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                  Fale connosco para avaliar como o RenovAR pode ser aplicado ao seu edifício,
                  ao seu sistema de ventilação e às suas necessidades operacionais.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-5 inline-flex rounded-full border border-air-300/25 bg-air-400/10 px-4 py-2 text-sm font-semibold text-air-300 transition hover:border-air-300/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${contactEmail}?subject=Pedido%20de%20demonstra%C3%A7%C3%A3o%20RenovAR`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-air-400 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-graphite-950 shadow-glow transition hover:bg-air-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-300 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
                >
                  Pedir demonstração
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-white transition hover:border-air-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
                >
                  Contactar equipa
                </a>
              </div>
            </div>

            <figure className="overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/[0.035] p-3 shadow-insetline">
              <img
                src="/assets/renovar-equipa.jpeg"
                alt="Equipa RenovAR junto ao protótipo de ventilação inteligente"
                loading="lazy"
                className="w-full rounded-[1.15rem] bg-zinc-100 object-contain"
              />
              <figcaption className="p-4 sm:p-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-air-300">
                  Protótipo funcional
                </p>
                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
                  Equipa RenovAR junto ao protótipo em contexto académico e técnico.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-graphite-950 px-5 py-12 lg:px-8 lg:py-16">
      <div className="absolute inset-0 bg-technical-grid bg-[length:56px_56px] opacity-25" />
      <div className="absolute -left-24 top-0 size-72 rounded-full bg-air-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 size-96 rounded-full bg-air-600/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr_0.9fr] lg:items-start">
          <div>
            <a
              href="#top"
              className="inline-flex rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
              aria-label="RenovAR, voltar ao início"
            >
              <img
                src="/assets/renovar-logo.png"
                alt="RenovAR"
                className="h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(67,230,178,0.16)]"
              />
            </a>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
              Sistema IoT modular para monitorização da qualidade do ar interior e controlo
              automático da ventilação existente.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['MVP IoT', 'Operação local/cloud', 'Ventilação existente', 'Monitorização + atuação'].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-zinc-400"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="grid gap-8 sm:grid-cols-2 lg:justify-self-center"
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-air-300">
                  {group.title}
                </p>
                <div className="mt-4 grid gap-3">
                  {group.links.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="text-sm font-medium text-zinc-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <address className="not-italic lg:justify-self-end lg:text-right">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-air-300">
              Contacto direto
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-4 inline-flex max-w-full rounded-full border border-air-300/28 bg-air-400/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-air-300/50 hover:bg-air-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
            >
              <span className="truncate">{contactEmail}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500 lg:ml-auto">
              Para demonstrações, pilotos ou avaliação técnica em edifícios de serviços.
            </p>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RenovAR. Todos os direitos reservados.</p>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 font-bold uppercase tracking-[0.14em] text-zinc-500 transition hover:text-air-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
          >
            Pedir demonstração
            <ArrowRight
              className="size-4 transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
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
