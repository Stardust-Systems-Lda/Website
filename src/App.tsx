import { useEffect, useRef, useState } from "react";
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
  { label: "Desenvolvimento", href: "#validacao" },
  { label: "Equipa", href: "#equipa" },
];

const steps = [
  {
    name: "Monitorizar",
    title: "Conhecer o ar do espaço.",
    text: "O sistema recolhe CO₂, temperatura, humidade relativa, partículas e compostos orgânicos voláteis. Os dados em tempo real e o histórico ajudam a perceber como o ambiente varia.",
    detail: "Sensores ambientais",
    icon: Radio,
  },
  {
    name: "Interpretar",
    title: "Dar contexto às medições.",
    text: "Uma medição isolada não conta a história toda. A RenovAR relaciona as condições interiores e exteriores para avaliar se a renovação do ar é adequada naquele momento.",
    detail: "Interior + exterior",
    icon: Activity,
  },
  {
    name: "Decidir",
    title: "Escolher quando ventilar.",
    text: "A decisão segue uma ordem de prioridades: conforto térmico, qualidade do ar e eficiência energética. O sistema determina se deve ventilar e qual a opção adequada às condições disponíveis.",
    detail: "Prioridades definidas",
    icon: SlidersHorizontal,
  },
  {
    name: "Atuar",
    title: "Passar dos dados à ação.",
    text: "O protótipo pode comandar a abertura e o fecho de janelas motorizadas. A ligação a equipamentos de ventilação ou climatização depende de uma avaliação técnica de cada instalação.",
    detail: "Ventilação no edifício",
    icon: Wind,
  },
  {
    name: "Medir",
    title: "Acompanhar o que mudou.",
    text: "Depois da atuação, as medições continuam. Esse acompanhamento permite observar a evolução do ambiente e apoiar os ajustes do sistema e a validação em cada espaço.",
    detail: "Medição contínua",
    icon: Activity,
  },
];

const questions = [
  {
    question: "Para que espaços está a ser desenvolvido?",
    answer:
      "A RenovAR dirige-se a edifícios existentes, sobretudo espaços de serviços de pequena e média dimensão, como escritórios, salas de reunião, espaços de ensino e comércio. A adequação e a instalação são avaliadas caso a caso.",
  },
  {
    question: "É preciso substituir a ventilação existente?",
    answer:
      "O objetivo é aproveitar os meios de ventilação disponíveis no edifício. Pode ser necessário motorizar janelas ou adaptar interfaces de controlo. Não existe uma compatibilidade universal: cada equipamento e cada espaço precisam de avaliação técnica.",
  },
  {
    question: "O sistema depende sempre da internet?",
    answer:
      "O protótipo inclui comunicação Wi-Fi, operação local e ligação à cloud. A autonomia local permite manter as funções de controlo previstas para a instalação quando não há ligação à internet; as funções remotas dependem da conectividade.",
  },
  {
    question: "Já existe uma poupança energética comprovada?",
    answer:
      "A eficiência energética é uma prioridade da decisão, mas ainda não publicamos uma percentagem de poupança comprovada. Esse resultado precisa de ser medido em contexto real, tendo em conta o edifício, o equipamento e as condições de utilização.",
  },
  {
    question: "Já está disponível como produto comercial?",
    answer:
      "A RenovAR está na fase de MVP funcional, com validação em ambiente controlado (TRL 4). A próxima etapa é a validação através de pilotos em espaços reais. A versão atual não é apresentada como um produto industrializado ou certificado.",
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
              src="/assets/renovar-simbolo.png"
              alt=""
              width="64"
              height="64"
            />
            <span>
              RenovAR <span className="brand-systems">Systems</span>
            </span>
          </a>
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
              Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section id="top" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="line-mark" /> Qualidade do ar · Ventilação
                inteligente
              </p>
              <h1>
                O ar muda.
                <br />O edifício <span>responde.</span>
              </h1>
              <p className="hero-description">
                Ligamos a monitorização do ar ao controlo da ventilação, para
                ajudar os espaços existentes a responder às condições de cada
                momento.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#funcionamento">
                  Conheça o sistema <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="text-link" href="#contacto">
                  Fale connosco <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <a className="hero-stage" href="#validacao">
                <span className="status-dot" /> MVP funcional · Em
                desenvolvimento <ArrowUpRight size={14} aria-hidden="true" />
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
                <ArrowUpRight size={22} aria-hidden="true" />
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
                  Uma decisão com contexto.
                </h2>
              </div>
              <p>
                Da primeira medição ao acompanhamento do resultado, cada etapa
                tem uma função.
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
              <div
                className="system-diagram"
                role="img"
                aria-label="Esquema conceptual: condições exteriores e interiores informam o controlo da ventilação no edifício"
              >
                <span className="diagram-label outside-label">
                  <Wind size={15} aria-hidden="true" /> Exterior
                </span>
                <div
                  className={`diagram-air ${activeStep === 3 ? "is-flowing" : ""}`}
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </div>
                <div className="diagram-building">
                  <div className="diagram-roof" />
                  <div className="diagram-window">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="diagram-label inside-label">
                    <Activity size={15} aria-hidden="true" /> Interior
                  </span>
                  <div className="diagram-controller">
                    <span className="status-dot" />
                    RenovAR<small>Medição + controlo</small>
                  </div>
                </div>
                <p className="diagram-note">Esquema de funcionamento</p>
              </div>
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
                    <h3>Controlo com escolha</h3>
                    <p>
                      Modos automático, assistido e manual, com autonomia de
                      operação local.
                    </p>
                  </div>
                </div>
                <div>
                  <Activity size={22} aria-hidden="true" />
                  <div>
                    <h3>Acompanhamento contínuo</h3>
                    <p>
                      Dados em tempo real e histórico, comunicação Wi-Fi e
                      funções locais e na cloud.
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
                <p className="eyebrow">04 — Desenvolvimento</p>
                <h2>
                  Um protótipo real.
                  <br />O próximo passo é no terreno.
                </h2>
              </div>
              <p>
                O produto está em desenvolvimento. Apresentamos o que existe
                hoje e o que ainda precisa de validação.
              </p>
            </div>
            <div className="development-grid">
              <div className="current-stage">
                <span className="stage-label">
                  <span className="status-dot" /> Estado atual
                </span>
                <h3>MVP funcional</h3>
                <p className="trl-label">
                  TRL 4 <span>Validação em ambiente controlado</span>
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
                <p className="stage-note">
                  As fotografias mostram o protótipo. Não representam uma
                  instalação comercial nem uma prova de poupança energética.
                </p>
              </div>
              <div className="next-stage">
                <p className="eyebrow">A seguir</p>
                <h3>Validar em espaços reais.</h3>
                <p>
                  Estamos a preparar a fase de pilotos para avaliar o
                  funcionamento, a instalação e os resultados em condições reais
                  de utilização.
                </p>
                <a className="text-link" href={pilotHref}>
                  Tenho interesse num piloto{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <div id="roadmap" className="roadmap">
                  <h4>Em estudo para fases futuras</h4>
                  <p>
                    Controlo preditivo, inferência de ocupação e novas
                    integrações de comunicação. Estas capacidades não são
                    apresentadas como funcionalidades validadas da versão atual.
                  </p>
                </div>
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
                Antes de
                <br />
                abrir a janela.
              </h2>
              <p className="body-copy">
                Algumas respostas sobre a aplicação, os limites e a fase atual
                do sistema.
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
              <p className="eyebrow">Vamos conversar</p>
              <h2>
                O seu espaço pode
                <br />
                ser o próximo passo.
              </h2>
              <p>
                Quer conhecer o sistema, explorar uma parceria ou avaliar um
                piloto? Conte-nos como é o seu espaço e o que procura melhorar.
              </p>
              <a className="button button-white" href={contactHref}>
                Falar com a RenovAR{" "}
                <ArrowUpRight size={19} aria-hidden="true" />
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
        <div className="container">
          <div className="footer-top">
            <img
              className="footer-signature"
              src="/assets/renovar-assinatura.png"
              alt="RenovAR Systems — Breathe Better, Live Better"
              width="4800"
              height="2000"
              loading="lazy"
            />
            <div className="footer-mobile-brand">
              <img
                src="/assets/renovar-simbolo.png"
                alt=""
                width="64"
                height="64"
              />
              <div>
                <strong>RenovAR Systems</strong>
                <p>Breathe Better, Live Better</p>
              </div>
            </div>
            <a className="text-link" href="#top">
              Voltar ao início <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} RenovAR Systems</p>
            <p>Qualidade do ar e ventilação inteligente.</p>
            <a href={contactHref}>
              Contacto <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
