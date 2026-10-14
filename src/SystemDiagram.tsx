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
        <span>O ciclo de controlo</span>
        <span className="schematic-step" aria-hidden="true">
          0{activeStep + 1} / 05
        </span>
      </div>

      <div className="schematic-content">
        <div className="schematic-inputs">
          <div
            className={`schematic-node sensor-node ${inputActive || activeStep === 4 ? "is-highlighted" : ""}`}
          >
            <div className="schematic-node-heading">
              <Radio size={21} aria-hidden="true" />
              <h4>Ar interior</h4>
            </div>
            <p>Qualidade do ar, temperatura e humidade.</p>
          </div>
          <div
            className={`schematic-node exterior-node ${activeStep === 1 ? "is-highlighted" : ""}`}
          >
            <div className="schematic-node-heading">
              <Thermometer size={21} aria-hidden="true" />
              <h4>Condições exteriores</h4>
            </div>
            <p>Referência para decidir quando ventilar.</p>
          </div>
        </div>

        <div
          className={`data-junction ${inputActive ? "is-highlighted" : ""}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 48" preserveAspectRatio="none">
            <path d="M24 0V17Q24 22 29 22H71Q76 22 76 17V0M50 22V45" />
            <path d="M48.5 38L50 45L51.5 38" />
          </svg>
          <span>Dados</span>
        </div>

        <div
          className={`schematic-node controller-node ${activeStep === 1 || activeStep === 2 ? "is-highlighted" : ""}`}
        >
          <CircuitBoard size={28} aria-hidden="true" />
          <div>
            <h4>Controlador RenovAR</h4>
            <p>Relaciona as condições. Decide quando ventilar.</p>
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
            <h4>Janelas motorizadas</h4>
            <p>Abertura e fecho para renovar o ar.</p>
          </div>
        </div>

        <div
          className={`feedback-loop ${activeStep === 4 ? "is-highlighted" : ""}`}
        >
          <RefreshCw size={21} aria-hidden="true" />
          <div className="feedback-caption">
            <h4>Nova medição</h4>
            <p>As leituras orientam a próxima decisão.</p>
          </div>
        </div>
      </div>

      <figcaption className="schematic-key" aria-label="Legenda">
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
          Retorno
        </span>
      </figcaption>
    </figure>
  );
}
