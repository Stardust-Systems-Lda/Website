import { useEffect, useRef, useState, type MouseEvent } from "react";
import SystemDiagram from "./SystemDiagram";
import ThemeToggle from "./ThemeToggle";
import usePageEffects from "./usePageEffects";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Wind,
  Activity,
  Radio,
  SlidersHorizontal,
} from "lucide-react";

const contactEmail = "geral@renovar-systems.com";
const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Contacto através do site RenovAR")}`;
const pilotHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Interesse num piloto RenovAR")}`;
const navigation = [
  { label: "Como funciona", href: "#funcionamento" },
  { label: "Pilotos", href: "#validacao" },
  { label: "O sistema", href: "#solucao" },
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
  const navigationRef = useRef<HTMLElement>(null);
  const activeSection = usePageEffects();
  const step = steps[activeStep];
  const StepIcon = step.icon;

  useEffect(() => {
    if (!menuOpen) return;
    navigationRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function followAnchor(event: MouseEvent<HTMLAnchorElement>) {
    if (!menuOpen) return;
    setMenuOpen(false);
    const destination = event.currentTarget.getAttribute("href")?.slice(1);
    if (destination) document.getElementById(destination)?.focus({ preventScroll: true });
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
            ref={navigationRef}
            id="navegacao"
            className={`navigation ${menuOpen ? "is-open" : ""}`}
            aria-label="Navegação principal"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={followAnchor}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contacto" onClick={followAnchor}
              aria-current={activeSection === "contacto" ? "location" : undefined}>
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
        <section id="top" className="hero" tabIndex={-1}>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">RenovAR Systems · Qualidade do ar</p>
              <h1>Ventilação<br /><span>inteligente.</span></h1>
              <p className="hero-lede">Para o edifício que já existe.</p>
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
              <div className="hero-photograph">
                <img
                  className="window-photo"
                  src="/assets/renovar-janelas-abertas.jpeg"
                  alt="Janelas com atuadores motorizados do protótipo RenovAR, abertas num espaço interior"
                  width="1536"
                  height="2048"
                  fetchPriority="high"
                />
              </div>
              <figcaption className="photo-caption">
                <strong>Ventilação natural motorizada</strong>
                <span>O protótipo, em funcionamento.</span>
              </figcaption>
            </figure>
          </div>
          <div className="container hero-bottom">
            <p>Monitorização ambiental. Controlo local. Atuação.</p>
            <a href="#funcionamento">
              Explorar o funcionamento <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="problema" className="problem section-space" tabIndex={-1}>
          <div className="container problem-grid">
            <p className="eyebrow">O ponto de partida</p>
            <div>
              <h2>Ventilar depende do que se passa dentro e fora.</h2>
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

        <section id="funcionamento" className="operation section-space" tabIndex={-1}>
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Como funciona</p>
                <h2>Das medições ao comando da janela.</h2>
              </div>
              <p>
                Selecione uma etapa para acompanhar como as condições do espaço
                orientam a ventilação.
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
              <div className="cycle-copy">
                <div aria-live="polite" aria-atomic="true">
                  <div className="cycle-copy-content" key={step.name}>
                    <p className="eyebrow">{step.name}</p>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <span className="detail-label">
                      <StepIcon size={18} aria-hidden="true" />
                      {step.detail}
                    </span>
                  </div>
                </div>
                <button
                  className="cycle-next text-link"
                  type="button"
                  onClick={() =>
                    setActiveStep(current => (current + 1) % steps.length)
                  }
                >
                  {activeStep === steps.length - 1
                    ? "Voltar ao início do ciclo"
                    : "Próxima etapa"}
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
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
                  <strong>Conforto térmico</strong>
                </li>
                <li>
                  <span>02</span>
                  <strong>Qualidade do ar</strong>
                </li>
                <li>
                  <span>03</span>
                  <strong>Eficiência energética</strong>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="validacao" className="development section-space" tabIndex={-1}>
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Pilotos</p>
                <h2>Preparar uma instalação piloto.</h2>
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
                    Monitorização e decisão de ventilação
                  </li>
                  <li>
                    Atuação em janelas motorizadas
                  </li>
                  <li>
                    Operação local e acompanhamento dos dados
                  </li>
                </ul>
              </div>
              <div className="next-stage">
                <p className="eyebrow">Trabalhe connosco</p>
                <h3>O ponto de partida é o espaço.</h3>
                <p>
                  Como é utilizado, como ventila e o que pretende melhorar.
                  A partir daí, definimos a
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

        <section id="solucao" className="product section-space" tabIndex={-1}>
          <div className="container product-grid">
            <figure className="sensor-visual" data-reveal>
              <img
                src="/assets/renovar-sensor.jpeg"
                alt="Protótipo do sensor ambiental RenovAR instalado numa parede, com caixa e placa eletrónica visíveis"
                width="1536"
                height="1536"
                loading="lazy"
              />
              <figcaption>
                <span>Sensor ambiental</span>
                <span>Protótipo funcional</span>
              </figcaption>
            </figure>
            <div className="product-copy">
              <p className="eyebrow">O sistema</p>
              <h2>Sensores, controlo e acompanhamento.</h2>
              <p className="body-copy">
                A instalação é definida pelas características do edifício e pelos
                equipamentos disponíveis. O sistema reúne a medição do ar, o
                controlo da ventilação e o acesso aos dados.
              </p>
              <div className="feature-list">
                <div>
                  <div>
                    <h3>Monitorização ambiental</h3>
                    <p>
                      CO₂, temperatura, humidade relativa, partículas e
                      compostos orgânicos voláteis.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Controlo local</h3>
                    <p>
                      Modos automático, assistido e manual, com autonomia de
                      operação local.
                    </p>
                  </div>
                </div>
                <div>
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

        <section id="equipa" className="team section-space" tabIndex={-1}>
          <div className="container">
            <div className="team-heading" data-reveal>
              <h2>Os fundadores.</h2>
              <p>Da arquitetura do produto à instalação no terreno.</p>
            </div>
            <div className="team-list">
              <article>
                <h3>Afonso Mota</h3>
                <p className="member-role">Direção técnica e estratégia</p>
                <p className="member-bio">
                  Define a arquitetura do produto e orienta o desenvolvimento
                  do firmware, dos algoritmos de controlo e da integração
                  digital. Coordena as decisões técnicas e a evolução do produto.
                </p>
              </article>
              <article>
                <h3>Gabriel Conceição</h3>
                <p className="member-role">
                  Operações, negócio e comunicação
                </p>
                <p className="member-bio">
                  Acompanha as operações e o desenvolvimento do negócio,
                  assegurando a documentação, a comunicação e as relações
                  externas. Coordena as instalações e a apresentação da marca
                  RenovAR.
                </p>
              </article>
              <article>
                <h3>Nuno Ferreira</h3>
                <p className="member-role">Eletrónica e prototipagem física</p>
                <p className="member-bio">
                  Desenvolve a eletrónica e as placas de circuito, integra
                  sensores e dá forma aos protótipos através de modelação e
                  impressão 3D. Acompanha a prototipagem física e a execução
                  técnica das instalações.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="perguntas" className="faq section-space" tabIndex={-1}>
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2>Antes de instalar.</h2>
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

        <section id="contacto" className="contact-section" tabIndex={-1}>
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Avaliar um piloto</p>
              <h2>Conte-nos como ventila o seu espaço.</h2>
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
          <a href="/links/">
            Links e contactos <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={contactHref}>
            Contacto <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
