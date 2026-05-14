import { useEffect, useState } from 'react';
import {
  Activity,
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
    title: 'O ar não avisa',
    description: 'Pode piorar sem cheiro, cor ou sinal evidente.',
  },
  {
    title: 'Ventilação fixa',
    description: 'Muitos edifícios ventilam por horário, não por necessidade.',
  },
  {
    title: 'Resposta em falta',
    description: 'Sem ligação à ventilação, a leitura fica sem consequência.',
  },
];

const diagnosticParameters = [
  {
    label: 'CO₂',
    title: 'Renovação do ar',
    description:
      'Quando sobe, pode indicar que a ocupação aumentou e que o ar novo não está a acompanhar.',
  },
  {
    label: 'COVs',
    title: 'Fontes interiores',
    description:
      'Materiais, produtos de limpeza, mobiliário e equipamentos podem libertar compostos para o ar.',
  },
  {
    label: 'Partículas em Suspensão (PM)',
    title: 'Matéria suspensa',
    description:
      'Poeiras, circulação de pessoas e atividades no espaço alteram a carga de partículas no ar.',
  },
  {
    label: 'Humidade',
    title: 'Conforto do espaço',
    description:
      'Valores muito baixos ou altos mudam a sensação do espaço e ajudam a perceber se o ambiente precisa de ajuste.',
  },
  {
    label: 'Ventilação',
    title: 'A resposta do edifício',
    description:
      'O ponto crítico é transformar estes sinais numa ação proporcional sobre janelas, grelhas, VMC ou AVAC.',
  },
];

const problemCards: CardItem[] = [
  {
    title: 'Ar interior invisível',
    description:
      'A qualidade do ar pode piorar sem sinais imediatos. Quando o desconforto se sente, o espaço pode já estar mal ventilado há horas.',
    icon: EyeOff,
  },
  {
    title: 'Ventilação estática',
    description:
      'Horários fixos e regras manuais não acompanham a ocupação real, as variações do ar ou as necessidades de cada espaço.',
    icon: Wind,
  },
  {
    title: 'Sensores sem atuação',
    description:
      'Muitos sistemas mostram valores num ecrã, mas não controlam a ventilação. A informação existe, mas o edifício continua a funcionar da mesma forma.',
    icon: Activity,
  },
  {
    title: 'Ocupação variável',
    description:
      'Salas cheias, teletrabalho e usos intermitentes mudam a necessidade de ar ao longo do dia.',
    icon: Brain,
  },
  {
    title: 'Ineficiência energética',
    description:
      'Ventilar de menos prejudica o ar interior. Ventilar em excesso desperdiça energia. O desafio está em ventilar quando é necessário.',
    icon: Zap,
  },
  {
    title: 'Gestão pouco documentada',
    description:
      'Sem histórico e resposta consistente, torna-se mais difícil demonstrar como o edifício acompanha a qualidade do ar.',
    icon: FileCheck,
  },
];

const impactItems = [
  {
    title: 'Experiência do espaço',
    description:
      'Ar pesado, seco ou húmido torna o espaço menos agradável e mais difícil de manter estável.',
  },
  {
    title: 'Atenção ao longo do dia',
    description:
      'Quando a ventilação não acompanha a utilização real, podem surgir fadiga e quebra de concentração.',
  },
  {
    title: 'Sistema respiratório',
    description:
      'Partículas, humidade e COVs tornam mais importante acompanhar o ar e garantir ventilação adequada.',
  },
  {
    title: 'Ocupantes vulneráveis',
    description:
      'Crianças, idosos e pessoas com alergias ou asma podem ser mais sensíveis a ar interior em pior estado.',
  },
  {
    title: 'Operação e custos',
    description:
      'Sem informação sobre o ar interior, a ventilação depende mais de regras fixas e intervenção manual.',
  },
  {
    title: 'Conformidade e risco',
    description:
      'Histórico e registos ajudam equipas técnicas a acompanhar requisitos e justificar decisões de operação.',
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
      'A lógica local, cloud ou híbrida analisa os dados e avalia a necessidade de ventilação.',
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
      'Regras de controlo atuam sobre a ventilação de acordo com as condições reais do espaço.',
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
      'Continua a funcionar localmente, com opção de integração em infraestrutura local ou cloud.',
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
      'Atualização de firmware e parâmetros sem intervenções físicas recorrentes no equipamento.',
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
      'Ajuda a acompanhar as condições do ar e a atuar quando o espaço precisa de renovação.',
  },
  {
    title: 'Maior conforto e bem-estar dos ocupantes',
    description:
      'Ajuda a agir antes de o desconforto ser evidente, mantendo uma gestão mais consistente do espaço.',
  },
  {
    title: 'Redução de ventilação desnecessária',
    description:
      'Evita funcionamento excessivo quando as condições do espaço não exigem renovação adicional do ar.',
  },
  {
    title: 'Apoio à conformidade regulamentar',
    description:
      'Fornece dados e histórico que ajudam equipas técnicas a acompanhar requisitos de qualidade do ar e operação.',
  },
  {
    title: 'Menor intervenção manual',
    description:
      'Automatiza respostas repetitivas e permite que equipas de operação atuem com melhor informação.',
  },
  {
    title: 'Dados históricos para auditoria e análise',
    description:
      'Regista tendências para identificar padrões, comparar espaços e apoiar decisões de operação.',
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
  'Operação local ou cloud',
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
      'Da leitura ambiental à decisão local ou cloud e à interface usada pelas equipas técnicas.',
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
    title: 'Evolução sem intrusão',
    description:
      'Linha de evolução para estimar ocupação e taxas de renovação sem câmaras nem sensores sensíveis.',
    image: '/assets/renovar-non-intrusive-intelligence.png',
    alt: 'Visual técnico sobre estimativa sem câmaras nem sensores sensíveis.',
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
      'Integra-se com sistemas existentes para acrescentar decisão sem isolar a infraestrutura já instalada.',
    icon: PlugZap,
  },
  {
    title: 'Privacidade e dados',
    description:
      'Baseia-se em dados ambientais e evita depender de câmaras.',
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
    description:
      'Protótipo físico com caixa ventilada, eletrónica visível e instalação em parede para leitura contínua do ar.',
    image: '/assets/renovar-sensor.jpeg',
    alt: 'Caixa do sensor RenovAR instalada numa parede com grelha frontal e eletrónica visível.',
    meta: 'Caixa do sensor RenovAR',
  },
  {
    description:
      'Integração com janelas abertas automaticamente por um sistema RenovAR em contexto real.',
    image: '/assets/renovar-janelas-abertas.jpeg',
    alt: 'Janelas interiores abertas automaticamente por um sistema RenovAR.',
    meta: 'Integração física no edifício',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="renovar-shell min-h-screen bg-graphite-950 text-white">
      <ScrollProgress />
      <div className="renovar-dot-field" aria-hidden="true" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="relative z-10">
        <HeroProblem />
        <ProblemSection />
        <ImpactSection />
        <SolutionIntro />
        <SystemArchitectureSection />
        <ValidatedMaterialSection />
        <FeaturesSection />
        <RealWorldSection />
        <CustomersSection />
        <DashboardPreview />
        <RoadmapSection />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
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
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-graphite-950/72 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.36)] backdrop-blur-2xl lg:px-5">
        <a
          href="#top"
          className="group inline-flex items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
          aria-label="RenovAR, ir para o início"
        >
          <img
            src="/assets/renovar-logo.png"
            alt="RenovAR"
            className="h-9 w-auto object-contain drop-shadow-[0_0_18px_rgba(67,230,178,0.16)] sm:h-10"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-5 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative rounded-full text-[0.68rem] font-bold uppercase tracking-[0.18em] text-zinc-500 transition hover:text-air-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400 focus-visible:ring-offset-4 focus-visible:ring-offset-graphite-950"
            >
              {label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-air-300 transition-all duration-300 group-hover:w-full" />
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
          className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-white/12 bg-graphite-900/96 px-5 py-5 shadow-2xl backdrop-blur-2xl lg:hidden"
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
    <section id="top" className="relative overflow-hidden px-5 pb-8 pt-28 sm:pt-32 lg:px-8 lg:pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-air-400/[0.045] via-transparent to-transparent" />
      <img
        src="/assets/renovar-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 hidden w-[42rem] -translate-x-1/2 opacity-[0.045] blur-[1px] saturate-50 lg:block"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-stretch gap-4 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative flex h-full overflow-hidden rounded-[2rem] border border-white/10 bg-graphite-900/78 p-6 shadow-insetline sm:p-8 lg:p-9">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-air-400/[0.055] to-transparent" />
          <div className="pointer-events-none absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-air-300/20 to-transparent" />

          <div className="relative z-10 flex w-full flex-col">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl font-semibold uppercase leading-[0.96] tracking-[0.03em] text-white sm:text-5xl lg:text-6xl xl:text-[4.35rem]">
                Sabe a qualidade do ar que respira?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
                Em espaços fechados, o ar pode perder qualidade muito antes de alguém notar.
                CO₂, partículas, humidade e COVs acumulam-se enquanto o edifício continua a
                ventilar sempre da mesma forma.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                O problema não é só medir a qualidade do ar. É fazer com que essa leitura chegue à
                ventilação existente e ajude o espaço a reagir quando precisa de ar novo.
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
                Como o RenovAR atua
                <ChevronRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 rounded-[1.65rem] border border-white/10 bg-graphite-950/44 p-3 backdrop-blur-md">
              <div className="grid gap-3 sm:grid-cols-3">
                {heroProblemCards.map((card) => (
                  <a
                    key={card.title}
                    href="#problema"
                    className="group rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 transition hover:-translate-y-1 hover:border-air-300/35 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-air-400"
                  >
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-air-300">
                      {card.title}
                    </p>
                    <p className="text-sm leading-6 text-zinc-300">{card.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DiagnosticPanel />
      </div>
    </section>
  );
}

function DiagnosticPanel() {
  const airSignals = diagnosticParameters.slice(0, 4);
  const ventilationSignal = diagnosticParameters[4];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-800/80 via-graphite-800 to-graphite-950 p-5 shadow-insetline sm:p-6">
      <div className="absolute inset-0 bg-technical-grid bg-[length:44px_44px] opacity-45" />
      <div className="absolute -right-20 top-20 size-72 rounded-full bg-air-400/12 blur-3xl" />
      <div className="absolute bottom-24 left-8 h-44 w-64 rounded-[2rem] border border-white/10 bg-white/[0.02]" />
      <div className="absolute bottom-40 left-20 h-20 w-20 rounded-full border border-air-300/15" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-air-300/30 to-transparent" />

      <div className="airflow-line" />
      <div className="airflow-line" />
      <div className="airflow-line" />
      <div className="airflow-line" />

      <div className="relative z-10 grid gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.67rem] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Leitura operacional
            </p>
            <h2 className="mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-white">
              Do sinal à resposta
            </h2>
          </div>
          <div className="rounded-full border border-air-300/30 bg-air-400/10 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-air-300">
            Ar + Ventilação
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-air-300/22 bg-air-400/10 p-5 backdrop-blur-md">
          <p className="font-semibold text-white">Os indicadores só são úteis quando orientam uma resposta.</p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            O RenovAR lê sinais do ar interior e usa-os para apoiar decisões sobre a ventilação:
            aumentar ar novo, evitar funcionamento desnecessário ou manter o espaço estável.
          </p>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-[0.67rem] font-bold uppercase tracking-[0.18em] text-zinc-500">
              O que é lido
            </p>
            <span className="h-px flex-1 bg-gradient-to-r from-air-300/25 to-transparent" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {airSignals.map((parameter) => (
              <div
                key={parameter.label}
                className="rounded-[1.35rem] border border-white/10 bg-graphite-950/55 p-4 backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-air-300/20 bg-air-400/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-air-300">
                    {parameter.label}
                  </span>
                </div>
                <p className="mt-4 text-base font-semibold text-white">{parameter.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{parameter.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-[0.67rem] font-bold uppercase tracking-[0.18em] text-zinc-500">
              O que tem de acontecer
            </p>
            <span className="h-px flex-1 bg-gradient-to-r from-air-300/25 to-transparent" />
          </div>
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div
              key={ventilationSignal.label}
              className="rounded-[1.35rem] border border-white/10 bg-graphite-950/55 p-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-air-300/20 bg-air-400/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-air-300">
                  {ventilationSignal.label}
                </span>
              </div>
              <p className="mt-4 text-base font-semibold text-white">{ventilationSignal.title}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{ventilationSignal.description}</p>
            </div>
            <div className="rounded-[1.35rem] border border-air-300/20 bg-air-400/10 p-4 lg:min-w-[16.5rem]">
              <p className="text-sm font-semibold leading-6 text-white">Medir não chega.</p>
              <p className="mt-2 whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.1em] text-air-300 sm:text-xs">
                Medir → interpretar → atuar
              </p>
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
    <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
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
    <section id="problema" className="px-5 py-12 lg:px-8 lg:py-20" aria-labelledby="problema-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="problema-title"
          eyebrow="Problema"
          title="O problema não está só no ar. Está na falta de resposta."
          text="CO₂, partículas, humidade e compostos orgânicos voláteis podem acumular-se em ambientes interiores sem serem sentidos pelos ocupantes. Mesmo quando existem sensores, muitos edifícios continuam sem uma ligação prática entre monitorização e ventilação."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
        <div className="mt-4 rounded-[1.7rem] border border-air-300/20 bg-air-400/8 p-5 text-sm leading-7 text-zinc-300">
          Os dados podem aparecer num ecrã, mas nem sempre levam a uma ação. O problema não
          está apenas no ar que respiramos. Está na forma como o edifício responde a esse ar.
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="px-5 py-12 lg:px-8 lg:py-20" aria-labelledby="impacto-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-graphite-900/70 p-6 shadow-insetline sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">Impacto</p>
            <h2
              id="impacto-title"
              className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              O que não se vê pesa no dia a dia.
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-400">
              A qualidade do ar interior influencia a forma como um espaço é sentido, usado e
              gerido. Em edifícios de serviços, escritórios, salas de reunião ou espaços educativos,
              a acumulação de CO₂, partículas, humidade e COVs reflete-se na utilização diária do
              espaço, na atenção das pessoas e na exigência de gestão técnica.
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
                <div className="mb-7">
                  <span className="grid size-10 place-items-center rounded-2xl border border-air-300/22 bg-air-400/10">
                    <Check className="size-4 text-air-300" aria-hidden="true" />
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

function SolutionIntro() {
  return (
    <section id="solucao" className="px-5 py-12 lg:px-8 lg:py-20" aria-labelledby="solucao-title">
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
              O RenovAR foi criado para resolver a falha entre saber o que se passa no ar
              interior e agir sobre a ventilação. Lê as condições ambientais, interpreta os dados e
              atua sobre sistemas existentes, ajudando o edifício a responder à forma como está a
              ser usado.
            </p>
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-white/10 bg-graphite-900/70 p-4 shadow-insetline sm:p-6 lg:p-8">
          <div className="absolute left-[12%] right-[12%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-air-300/35 to-transparent lg:block" />
          <div className="grid gap-4 lg:grid-cols-3">
            {solutionSteps.map((step) => (
              <article
                key={step.title}
                className="relative rounded-[1.65rem] border border-white/10 bg-graphite-950/72 p-6 transition hover:-translate-y-1 hover:border-air-300/35 hover:bg-white/[0.055]"
              >
                <div className="mb-8">
                  <span className="grid size-12 place-items-center rounded-2xl border border-air-300/25 bg-air-400/10">
                    <step.icon className="size-5 text-air-300" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{step.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 rounded-[1.45rem] border border-air-300/20 bg-air-400/8 p-5 text-sm font-semibold leading-7 text-white">
            Não serve apenas para mostrar dados. Serve para transformar leitura em resposta operacional.
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemArchitectureSection() {
  const nodes = [
    [
      'Unidades de sensorização',
      'Recolha contínua de dados essenciais sobre a qualidade do ar interior.',
      RadioTower,
    ],
    [
      'Processamento local',
      'Regras de controlo executadas localmente, com capacidade de operação autónoma.',
      Cpu,
    ],
    [
      'Plataforma digital',
      'Visualização em tempo real, histórico de dados e gestão de múltiplos espaços.',
      CloudCog,
    ],
    [
      'Módulo de controlo',
      'Ligação entre a decisão do sistema e a atuação física sobre a ventilação.',
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
      className="px-5 py-12 lg:px-8 lg:py-20"
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
              O RenovAR funciona como uma camada de operação para edifícios existentes. Em vez
              de substituir a infraestrutura, liga-se a sistemas de ventilação natural ou mecânica
              e ajuda a decidir com base em dados.
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
                  <div className="mb-8">
                    <span className="grid size-11 place-items-center rounded-2xl border border-air-300/22 bg-air-400/10">
                      <Icon className="size-5 text-air-300" aria-hidden="true" />
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
      className="px-5 py-12 lg:px-8 lg:py-20"
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
            O sistema foi desenhado para responder a uma limitação prática dos edifícios: a
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
              <div className="mb-6">
                <span className="grid size-10 place-items-center rounded-2xl border border-air-300/22 bg-air-400/10">
                  <Icon className="size-5 text-air-300" aria-hidden="true" />
                </span>
              </div>
              <h3 className="text-base font-semibold leading-7 text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-zinc-400">
          Funcionalidades como estimativa de ocupação, otimização preditiva e relatórios
          automáticos fazem parte da evolução futura e não do núcleo atual do MVP.
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="beneficios" className="px-5 py-12 lg:px-8 lg:py-20" aria-labelledby="beneficios-title">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-graphite-900/70 p-6 shadow-insetline sm:p-8 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-300">
            MVP + impacto
          </p>
          <h2
            id="beneficios-title"
            className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl lg:text-5xl"
          >
            O que já faz. O que muda na operação.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-400">
            O núcleo atual do RenovAR já junta monitorização, lógica de controlo e atuação sobre
            ventilação existente. O valor está em reduzir a distância entre saber o estado do ar e
            fazer o edifício responder.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {['Medir', 'Interpretar', 'Atuar'].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-air-300/20 bg-air-400/8 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-air-300"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-insetline sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
              Funcionalidades atuais
            </p>
            <div className="mt-5 grid gap-3">
              {features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4 rounded-[1.25rem] border border-white/8 bg-graphite-950/48 p-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-air-300/20 bg-air-400/10">
                    <Icon className="size-4 text-air-300" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-air-400/10 to-white/[0.03] p-5 shadow-insetline sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
              Benefícios práticos
            </p>
            <div className="mt-5 grid gap-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[1.25rem] border border-white/8 bg-graphite-950/42 p-4">
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-air-300" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldSection() {
  return (
    <section className="px-5 py-12 lg:px-8 lg:py-20" aria-labelledby="sistema-real-title">
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
            O RenovAR já existe em hardware funcional, com unidades de sensorização, módulos de controlo
            e integração com ventilação natural motorizada. Esta base permite validar o
            funcionamento em ambientes reais e evoluir para instalações mais robustas.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {realWorldImages.map((photo) => (
            <figure
              key={photo.meta}
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
                <h3 className="text-xl font-semibold text-white">{photo.meta}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{photo.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomersSection() {
  return (
    <section id="mercado" className="px-5 py-12 lg:px-8 lg:py-20" aria-labelledby="mercado-title">
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
            tornam a gestão da ventilação muito relevante. O cliente pode ser o
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
              <div className="mb-7">
                <Building2 className="size-5 text-air-300" aria-hidden="true" />
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
  const integrationLayers = [
    {
      title: 'Ar interior',
      description: 'CO₂, partículas, temperatura, humidade e COVs como sinais ambientais do espaço.',
      icon: Gauge,
    },
    {
      title: 'Ventilação e AVAC',
      description: 'Janelas motorizadas, grelhas, VMC ou sistemas mecânicos que já existem no edifício.',
      icon: Fan,
    },
    {
      title: 'Iluminação',
      description: 'Luzes e circuitos que podem entrar na mesma lógica de operação do espaço.',
      icon: Zap,
    },
    {
      title: 'Tomadas e cargas',
      description: 'Tomadas, equipamentos e cargas auxiliares que ajudam a perceber como o espaço é usado.',
      icon: PlugZap,
    },
  ];

  const platformFlow = [
    {
      title: 'Ler sinais',
      description: 'Recolher dados relevantes de sensores, equipamentos e módulos instalados.',
    },
    {
      title: 'Aplicar regras',
      description: 'Cruzar limites, horários, modos de utilização e prioridades técnicas.',
    },
    {
      title: 'Coordenar respostas',
      description: 'Apoiar decisões ou acionar sistemas quando a configuração o permite.',
    },
    {
      title: 'Guardar contexto',
      description: 'Manter histórico útil para análise, manutenção e melhoria da operação.',
    },
  ];

  return (
    <section
      id="dashboard"
      className="px-5 py-12 lg:px-8 lg:py-20"
      aria-labelledby="dashboard-title"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="dashboard-title"
          eyebrow="Interface operacional"
          title="Uma interface para ligar sistemas do edifício."
          text="A plataforma dá contexto aos sinais do espaço e pode juntar qualidade do ar, ventilação, iluminação, tomadas e outros sistemas numa leitura operacional comum."
        />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-graphite-900/82 p-4 shadow-insetline sm:p-6 lg:p-8">
          <div className="absolute inset-0 bg-technical-grid bg-[length:58px_58px] opacity-25" />
          <div className="absolute -left-20 top-10 size-72 rounded-full bg-air-400/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-air-300/8 blur-3xl" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-graphite-950/68 p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Visão conceptual
              </p>
              <div>
                <h3 className="mt-4 max-w-xl text-2xl font-semibold uppercase leading-tight tracking-[0.07em] text-white sm:text-3xl">
                  A interface não é o produto todo. É a forma de o edifício ganhar contexto.
                </h3>
                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Esta secção é uma representação de produto e interoperabilidade, não uma análise
                  em tempo real. Mostra como o RenovAR pode organizar sinais e sistemas diferentes
                  sem reduzir tudo a um ecrã de números.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {platformFlow.map((item, index) => (
                  <div key={item.title} className="grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-[3rem_1fr]">
                    <span className="font-display text-sm font-semibold text-air-300/80">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-air-300/22 bg-air-400/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
                  Representação conceptual
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Os módulos abaixo indicam áreas que a plataforma pode integrar. Não correspondem
                  a leituras ao vivo, comandos diretos ou estados finais de uma instalação.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-graphite-950/58 p-5 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(68,229,181,0.12),transparent_36%)]" />
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-air-300/20 to-transparent lg:block" />
              <div className="relative z-10">
                <div className="mb-5 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                      Mapa de interoperabilidade
                    </p>
                    <h3 className="mt-3 text-xl font-semibold uppercase tracking-[0.06em] text-white">
                      Sistemas dentro da mesma lógica operacional.
                    </h3>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Pré-visualização conceptual
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="relative min-h-[260px] rounded-[1.7rem] border border-air-300/18 bg-air-400/8 p-6">
                    <div className="absolute inset-6 rounded-full border border-air-300/12" />
                    <div className="absolute inset-12 rounded-full border border-white/8" />
                    <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-air-300/35 bg-graphite-950/80 shadow-glow" />
                    <div className="relative z-10 flex min-h-[212px] items-center justify-center text-center">
                      <div>
                        <span className="mx-auto grid size-14 place-items-center rounded-2xl border border-air-300/25 bg-graphite-950/70">
                          <CircuitBoard className="size-6 text-air-300" aria-hidden="true" />
                        </span>
                        <p className="mt-4 text-sm font-semibold text-white">RenovAR</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-air-300">
                          camada de decisão
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {integrationLayers.map(({ title, description, icon: Icon }) => (
                      <article
                        key={title}
                        className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4"
                      >
                        <div className="mb-5">
                          <span className="grid size-10 place-items-center rounded-xl border border-air-300/22 bg-air-400/10">
                            <Icon className="size-5 text-air-300" aria-hidden="true" />
                          </span>
                        </div>
                        <h4 className="text-base font-semibold text-white">{title}</h4>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.78fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-300">
                      Interoperabilidade
                    </p>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">
                      A qualidade do ar deixa de estar isolada. Pode ser relacionada com outros
                      sinais do edifício para apoiar uma operação mais coordenada.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                      Escala possível
                    </p>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">
                      Do controlo de ventilação a uma camada mais ampla de automação técnica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="px-5 py-12 lg:px-8 lg:py-20" aria-labelledby="roadmap-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="roadmap-title"
          eyebrow="Roadmap"
          title="O que existe hoje. O que vem a seguir."
          text="A evolução futura será construída sobre a base já existente, sem tratar estas capacidades como funcionalidades já disponíveis."
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
    <section id="contacto" className="px-5 py-12 lg:px-8 lg:py-20" aria-labelledby="contacto-title">
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
              {['MVP IoT', 'Operação local ou cloud', 'Ventilação existente', 'Monitorização + atuação'].map((label) => (
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
      <div className="mb-8">
        <span className="grid size-11 place-items-center rounded-2xl border border-air-300/22 bg-air-400/10">
          <Icon className="size-5 text-air-300" aria-hidden="true" />
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
    </article>
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
