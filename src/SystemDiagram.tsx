import {
  CircuitBoard,
  Radio,
  RefreshCw,
  Thermometer,
  Wind,
} from "lucide-react";
import "./schematic.css";

type SystemDiagramProps = { activeStep: number };

export default function SystemDiagram({ activeStep }: SystemDiagramProps) {
  const inputActive = activeStep === 0 || activeStep === 1;
  return (
    <figure
      className={`control-schematic phase-${activeStep}`}
      aria-label="Sensores interiores e condições exteriores informam o controlador RenovAR. O controlador comanda as janelas motorizadas. Novas medições alimentam a decisão seguinte."
    >
      <div className="schematic-heading">
        <span>Dados ligados à ação</span>
        <span className="schematic-step">0{activeStep + 1} / 05</span>
      </div>
      <div
        className={`feedback-loop ${activeStep === 4 ? "is-highlighted" : ""}`}
        aria-hidden="true"
      />
      <div className="schematic-content">
        <div className="schematic-inputs">
          <div
            className={`schematic-node sensor-node ${inputActive || activeStep === 4 ? "is-highlighted" : ""}`}
          >
            <Radio size={22} aria-hidden="true" />
            <h4>Ar interior</h4>
            <p>Sensores ambientais</p>
            <span>
              Qualidade do ar
              <br />
              Temperatura e humidade
            </span>
          </div>
          <div
            className={`schematic-node exterior-node ${activeStep === 1 ? "is-highlighted" : ""}`}
          >
            <Thermometer size={22} aria-hidden="true" />
            <h4>Condições exteriores</h4>
            <p>Contexto para ventilar</p>
            <span>
              Referência exterior
              <br />
              para a decisão
            </span>
          </div>
        </div>
        <div
          className={`data-junction ${activeStep === 1 ? "is-highlighted" : ""}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M24 0V13Q24 20 31 20H69Q76 20 76 13V0M50 20V38" />
            <path d="M48.5 32L50 38L51.5 32" />
          </svg>
          <span>Dados</span>
        </div>
        <div
          className={`schematic-node controller-node ${activeStep === 1 || activeStep === 2 ? "is-highlighted" : ""}`}
        >
          <CircuitBoard size={29} aria-hidden="true" />
          <div>
            <h4>Controlador RenovAR</h4>
            <p>Compara condições. Decide quando ventilar.</p>
            <span>Conforto térmico → qualidade do ar → eficiência energética</span>
          </div>
        </div>
        <div
          className={`command-junction ${activeStep === 2 || activeStep === 3 ? "is-highlighted" : ""}`}
          aria-hidden="true"
        >
          <span>Comando</span>
        </div>
        <div
          className={`schematic-node ventilation-node ${activeStep === 3 ? "is-highlighted" : ""}`}
        >
          <div className="schematic-window" aria-hidden="true">
            <span className="window-motor" />
            <span className="window-pane pane-left" />
            <span className="window-pane pane-right" />
            <Wind size={21} />
          </div>
          <div>
            <h4>Ventilação</h4>
            <p>Janelas motorizadas</p>
            <span>Comando de abertura e fecho</span>
          </div>
        </div>
        <figcaption
          className={`feedback-caption ${activeStep === 4 ? "is-highlighted" : ""}`}
        >
          <RefreshCw size={15} aria-hidden="true" />
          Nova medição. Próxima decisão.
        </figcaption>
      </div>
      <div className="schematic-key" aria-label="Legenda">
        <span>
          <i className="key-data" aria-hidden="true" />
          Dados
        </span>
        <span>
          <i className="key-command" aria-hidden="true" />
          Comando
        </span>
        <span>
          <i className="key-feedback" aria-hidden="true" />
          Nova medição
        </span>
      </div>
    </figure>
  );
}
