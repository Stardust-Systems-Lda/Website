import { useEffect, useRef, useState } from "react";
import SystemDiagram from "./SystemDiagram";
import ThemeToggle from "./ThemeToggle";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
  Wind,
  Thermometer,
  Activity,
  Zap,
  Radio,
  SlidersHorizontal,
} from "lucide-react";

const contactEmail = "geral@renovar-systems.com";
const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Contacto através do site RenovAR")}`;
const pilotHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Interesse num piloto RenovAR")}`;
const navigation = [
  { label: "Como funciona", href: "#funcionamento" },
  { label: "O sistema", href: "#solucao" },
  { label: "Pilotos", href: "#validacao" },
  { label: "Equipa", href: "#equipa" },
];

const steps = [
  {
    name: "Monitorizar",
    title: "Conhecer o ar do espaço.",
    text: "Os sensores acompanham continuamente a qualidade do ar. As leituras em tempo real e o histórico permitem perceber como o ambiente evolui ao longo da utilização do espaço.",
    detail: "Sensores ambientais",
    icon: Radio,
  },
  {
    name: "Interpretar",
    title: "Relacionar interior e exterior.",
    text: "As condições no espaço são analisadas em conjunto com as condições exteriores. Esta comparação dá contexto às medições e ajuda a escolher o momento de ventilar.",
    detail: "Interior + exterior",
    icon: Activity,
  },
  {
    name: "Decidir",
    title: "Escolher quando ventilar.",
    text: "O controlador decide se deve ventilar e qual a ação adequada. A decisão considera o conforto térmico, a qualidade do ar e a eficiência energética, por esta ordem.",
    detail: "Prioridades definidas",
    icon: SlidersHorizontal,
  },
  {
    name: "Atuar",
    title: "Passar dos dados à ação.",
    text: "O controlador envia comandos de abertura e fecho às janelas motorizadas. A configuração de atuação é definida de acordo com os meios de ventilação disponíveis no edifício.",
    detail: "Ventilação no edifício",
    icon: Wind,
  },
  {
    name: "Medir",
    title: "Acompanhar o que mudou.",
    text: "As novas leituras mostram a evolução do ambiente e alimentam a decisão seguinte. O ciclo mantém-se em funcionamento, com registo dos dados para acompanhamento e ajuste.",
    detail: "Medição contínua",
    icon: Activity,
  },
];

const questions = [
  {
    question: "A que espaços se destina a RenovAR?",
    answer:
      "A RenovAR destina-se a edifícios de serviços de pequena e média dimensão, como escritórios, salas de reunião, espaços de ensino e comércio. O sistema é pensado para espaços existentes, com ocupação variável e diferentes meios de ventilação.",
  },
  {
    question: "É preciso substituir a ventilação existente?",
    answer:
      "A instalação parte dos meios disponíveis no edifício. A equipa avalia as janelas e os equipamentos de ventilação, identifica as adaptações necessárias e define uma configuração adequada ao espaço.",
  },
  {
    question: "O sistema depende sempre da internet?",
    answer:
      "O controlo é executado localmente. A comunicação Wi-Fi permite a ligação à plataforma, o acompanhamento remoto e as atualizações. O acesso remoto e os serviços cloud precisam de ligação à internet.",
  },
  {
    question: "Como é considerada a eficiência energética?",
    answer:
      "O controlador relaciona as condições interiores e exteriores para decidir quando ventilar. A eficiência energética entra nessa decisão depois do conforto térmico e da qualidade do ar. Nos pilotos, o desempenho será acompanhado nas condições de utilização de cada edifício.",
  },
  {
    question: "Como posso avaliar um piloto?",
    answer:
      "Envie uma mensagem para geral@renovar-systems.com com o tipo de espaço, a localização e os meios de ventilação existentes. A equipa analisa consigo as condições da instalação e os objetivos de acompanhamento do piloto.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const step = steps[activeStep];
  const StepIcon = step.icon;

  useEffect(() => {
    if (!menuOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function followAnchor() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#top"
            aria-label="RenovAR Systems — início"
            onClick={followAnchor}
          >
            <img
              className="brand-light"
              src="/assets/renovar-simbolo.png"
              alt=""
              width="64"
              height="64"
            />
            <img
              className="brand-dark"
              src="/assets/renovar-simbolo-branco.png"
              alt=""
              width="64"
              height="64"
            />
          </a>
          <nav
            id="navegacao"
            className={`navigation ${menuOpen ? "is-open" : ""}`}
            aria-label="Navegação principal"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={followAnchor}>
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contacto" onClick={followAnchor}>
              Avaliar um piloto <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
          <div className="header-controls">
            <ThemeToggle />
            <button
              ref={menuButton}
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="navegacao"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section id="top" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="line-mark" /> Monitorização e controlo da
                ventilação
              </p>
              <h1>
                O ar muda.
                <br />O edifício <span>responde.</span>
              </h1>
              <p className="hero-description">
                A RenovAR liga sensores ambientais ao controlo da ventilação de
                edifícios existentes, considerando as condições interiores e
                exteriores.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">
                  Avaliar um piloto{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="text-link" href="#funcionamento">
                  Ver como funciona <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
              <a className="hero-stage" href="#validacao">
                <span className="status-dot" /> Protótipo funcional · Preparação
                de pilotos
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <figure className="hero-visual">
              <img
                className="window-photo"
                src="/assets/renovar-janelas-abertas.jpeg"
                alt="Janelas com atuadores motorizados do protótipo RenovAR, abertas num espaço interior"
                width="1536"
                height="2048"
                fetchPriority="high"
              />
              <div className="photo-topline" aria-hidden="true">
                <span>DO AR À AÇÃO</span>
                <Wind size={22} />
              </div>
              <figcaption className="photo-caption">
                <span className="caption-number">01 /</span>
                <span>
                  Ventilação natural motorizada
                  <small>Fotografia do protótipo em funcionamento</small>
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="container hero-bottom">
            <p>
              Edifícios existentes.
              <br />
              <strong>Novas formas de cuidar do ar.</strong>
            </p>
            <a href="#problema" aria-label="Descobrir o problema">
              <ArrowDown size={24} aria-hidden="true" />
            </a>
            <p className="hero-bottom-right">
              Desenvolvido para espaços de serviços
              <br />
              de pequena e média dimensão.
            </p>
          </div>
        </section>

        <section id="problema" className="problem section-space">
          <div className="container problem-grid">
            <p className="eyebrow">01 — O ponto de partida</p>
            <div>
              <h2>
                Saber como está o ar
                <br />é só o primeiro passo.
              </h2>
              <p className="large-copy">
                Um sensor mostra o que está a acontecer. Para melhorar o
                ambiente, é preciso decidir quando ventilar e pôr essa decisão
                em prática.
              </p>
              <p className="body-copy">
                Abrir uma janela nem sempre é a resposta adequada: o exterior
                também conta. A RenovAR liga as medições às condições do
                edifício e aos meios de ventilação disponíveis.
              </p>
              <ul className="space-types" aria-label="Exemplos de aplicação">
                <li>Escritórios</li>
                <li>Espaços de ensino</li>
                <li>Comércio</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="funcionamento" className="operation section-space">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 — Como funciona</p>
                <h2>
                  Um ciclo completo.
                  <br />
                  Da medição à ventilação.
                </h2>
              </div>
              <p>
                Explore as cinco etapas. O sistema mede, decide, atua e volta a
                medir para orientar a próxima decisão.
              </p>
            </div>
            <div
              className="cycle-controls"
              role="group"
              aria-label="Explorar as cinco etapas de funcionamento"
            >
              {steps.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className={`cycle-step ${activeStep === index ? "is-active" : ""}`}
                  aria-pressed={activeStep === index}
                  aria-controls="cycle-panel"
                  onClick={() => setActiveStep(index)}
                >
                  <span className="step-number">0{index + 1}</span>
                  <span>{item.name}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              ))}
            </div>
            <div id="cycle-panel" className="cycle-panel">
              <div className="cycle-copy" aria-live="polite" aria-atomic="true">
                <p className="eyebrow">
                  0{activeStep + 1} / {step.name}
                </p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="detail-label">
                  <StepIcon size={18} aria-hidden="true" />
                  {step.detail}
                </span>
              </div>
              <SystemDiagram activeStep={activeStep} />
            </div>
            <div id="beneficios" className="priorities">
              <div className="priority-intro">
                <p className="eyebrow">A ordem das prioridades</p>
                <p>Decidir quando ventilar também é saber o que preservar.</p>
              </div>
              <ol>
                <li>
                  <span>01</span>
                  <Thermometer size={21} aria-hidden="true" />
                  <strong>Conforto térmico</strong>
                </li>
                <li>
                  <span>02</span>
                  <Wind size={21} aria-hidden="true" />
                  <strong>Qualidade do ar</strong>
                </li>
                <li>
                  <span>03</span>
                  <Zap size={21} aria-hidden="true" />
                  <strong>Eficiência energética</strong>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="solucao" className="product section-space">
          <div className="container product-grid">
            <figure className="sensor-visual">
              <img
                src="/assets/renovar-sensor.jpeg"
                alt="Protótipo do sensor ambiental RenovAR instalado numa parede, com caixa e placa eletrónica visíveis"
                width="1536"
                height="1536"
                loading="lazy"
              />
              <figcaption>
                <span>02 / Sensor ambiental</span>
                <span>Protótipo funcional</span>
              </figcaption>
            </figure>
            <div className="product-copy">
              <p className="eyebrow">03 — O sistema</p>
              <h2>
                Tecnologia que se liga
                <br />
                ao espaço que já existe.
              </h2>
              <p className="body-copy">
                Sensores, controlo e acompanhamento trabalham em conjunto. A
                instalação é definida pelas características do edifício e pelos
                equipamentos disponíveis.
              </p>
              <div className="feature-list">
                <div>
                  <Radio size={22} aria-hidden="true" />
                  <div>
                    <h3>Monitorização ambiental</h3>
                    <p>
                      CO₂, temperatura, humidade relativa, partículas e
                      compostos orgânicos voláteis.
                    </p>
                  </div>
                </div>
                <div>
                  <SlidersHorizontal size={22} aria-hidden="true" />
                  <div>
                    <h3>Controlo local</h3>
                    <p>
                      Modos automático, assistido e manual, com autonomia de
                      operação local.
                    </p>
                  </div>
                </div>
                <div>
                  <Activity size={22} aria-hidden="true" />
                  <div>
                    <h3>Plataforma de acompanhamento</h3>
                    <p>
                      Leituras em tempo real e histórico, com comunicação Wi-Fi
                      e acesso remoto através da cloud.
                    </p>
                  </div>
                </div>
              </div>
              <a className="text-link" href="#perguntas">
                Esclareça as suas dúvidas{" "}
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="validacao" className="development section-space">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 — Pilotos</p>
                <h2>
                  Do protótipo
                  <br />
                  ao seu espaço.
                </h2>
              </div>
              <p>
                Estamos a preparar pilotos em edifícios existentes para
                acompanhar o sistema em condições reais de utilização.
              </p>
            </div>
            <div className="development-grid">
              <div className="current-stage">
                <span className="stage-label">
                  <span className="status-dot" /> Tecnologia em funcionamento
                </span>
                <h3>Protótipo funcional</h3>
                <p className="trl-label">
                  TRL 4 <span>Testado em ambiente controlado</span>
                </p>
                <ul>
                  <li>
                    <Check size={17} aria-hidden="true" />
                    Monitorização e decisão de ventilação
                  </li>
                  <li>
                    <Check size={17} aria-hidden="true" />
                    Atuação em janelas motorizadas
                  </li>
                  <li>
                    <Check size={17} aria-hidden="true" />
                    Operação local e acompanhamento dos dados
                  </li>
                </ul>
              </div>
              <div className="next-stage">
                <p className="eyebrow">Trabalhe connosco</p>
                <h3>Vamos conhecer o seu edifício.</h3>
                <p>
                  O ponto de partida é o espaço: como é utilizado, como ventila
                  e o que pretende melhorar. A partir daí, definimos a
                  configuração e os objetivos de acompanhamento.
                </p>
                <a className="text-link" href={pilotHref}>
                  Avaliar um piloto{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <ol id="roadmap" className="pilot-steps">
                  <li>
                    <span>01</span>Analisar o espaço e a ventilação existente
                  </li>
                  <li>
                    <span>02</span>Definir a instalação e o acompanhamento
                  </li>
                  <li>
                    <span>03</span>Observar o sistema em utilização real
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="equipa" className="team section-space">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">05 — A equipa</p>
                <h2>Quem está a construir a RenovAR.</h2>
              </div>
              <p>
                Do desenvolvimento técnico à instalação, uma equipa com
                responsabilidades complementares.
              </p>
            </div>
            <div className="team-list">
              <article>
                <span className="member-number">01 /</span>
                <h3>Afonso Mota</h3>
                <p>Direção técnica e estratégia</p>
              </article>
              <article>
                <span className="member-number">02 /</span>
                <h3>Gabriel Conceição</h3>
                <p>
                  Operações, negócio e comunicação
                  <br />
                  Coordenação das instalações
                </p>
              </article>
              <article>
                <span className="member-number">03 /</span>
                <h3>Nuno Ferreira</h3>
                <p>
                  Eletrónica e prototipagem
                  <br />
                  Modelação 3D e execução das instalações
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="perguntas" className="faq section-space">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">06 — Perguntas frequentes</p>
              <h2>
                Respostas para
                <br />o seu projeto.
              </h2>
              <p className="body-copy">
                Aplicação, instalação e funcionamento, explicados de forma
                direta.
              </p>
            </div>
            <div className="faq-list">
              {questions.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <ChevronDown size={20} aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Avaliar um piloto</p>
              <h2>
                O seu espaço pode
                <br />
                ser o próximo passo.
              </h2>
              <p>
                Conte-nos o tipo de espaço, a localização e como é feita a
                ventilação. A equipa ajuda a avaliar uma configuração adequada
                ao seu edifício.
              </p>
              <a className="button button-white" href={pilotHref}>
                Avaliar um piloto <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-address">
              <span>Contacto direto</span>
              <a href={contactHref}>
                {contactEmail}
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
              <p>
                Envie-nos uma mensagem por email.
                <br />
                Analisamos consigo a adequação do sistema.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand-band">
          <div className="container footer-top">
            <img
              className="footer-signature"
              src="/assets/renovar-assinatura.png"
              alt="RenovAR Systems — Breathe Better, Live Better"
              width="4800"
              height="2000"
              loading="lazy"
            />
            <div
              className="footer-mobile-brand"
              role="img"
              aria-label="RenovAR Systems"
            >
              <img
                src="/assets/renovar-simbolo.png"
                alt=""
                width="64"
                height="64"
              />
            </div>
            <a className="text-link" href="#top">
              Voltar ao início <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} RenovAR Systems</p>
          <p>Qualidade do ar e ventilação inteligente.</p>
          <a href={contactHref}>
            Contacto <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
