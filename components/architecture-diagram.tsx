import { architecturePage } from "@/content/architecture";

const steps = architecturePage.diagram.steps;

function HorizontalDiagram() {
  const boxWidth = 168;
  const boxHeight = 112;
  const gap = 44;
  const startX = 8;
  const y = 48;
  const width = startX * 2 + steps.length * boxWidth + (steps.length - 1) * gap;
  const height = y + boxHeight + 24;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${width} ${height}`}
      className="hidden h-auto w-full lg:block"
    >
      {steps.map((step, index) => {
        const x = startX + index * (boxWidth + gap);
        const highlight = index === 1;
        return (
          <g key={step.title}>
            {index < steps.length - 1 ? (
              <path
                d={`M${x + boxWidth} ${y + boxHeight / 2} H${x + boxWidth + gap - 10}`}
                stroke="#F3F1EC"
                strokeWidth="1.5"
                markerEnd="url(#arrow)"
              />
            ) : null}
            <rect
              x={x}
              y={y}
              width={boxWidth}
              height={boxHeight}
              fill="#1A1D21"
              stroke={highlight ? "#F5A623" : "#8A9199"}
              strokeWidth="1.5"
            />
            <text
              x={x + 16}
              y={y + 32}
              fill="#F5A623"
              fontSize="12"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {String(index + 1).padStart(2, "0")}
            </text>
            <text
              x={x + 16}
              y={y + 60}
              fill="#F3F1EC"
              fontSize="16"
              fontWeight="600"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {step.title}
            </text>
            <text
              x={x + 16}
              y={y + 84}
              fill="#C5C3BE"
              fontSize="13"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {step.detail}
            </text>
          </g>
        );
      })}
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 1 L8 5 L0 9" fill="none" stroke="#F3F1EC" strokeWidth="1.5" />
        </marker>
      </defs>
    </svg>
  );
}

function VerticalDiagram() {
  const boxWidth = 280;
  const boxHeight = 88;
  const gap = 36;
  const x = 24;
  const startY = 8;
  const width = boxWidth + 48;
  const height = startY * 2 + steps.length * boxHeight + (steps.length - 1) * gap;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full max-w-sm lg:hidden"
    >
      {steps.map((step, index) => {
        const y = startY + index * (boxHeight + gap);
        const highlight = index === 1;
        return (
          <g key={step.title}>
            {index < steps.length - 1 ? (
              <path
                d={`M${x + boxWidth / 2} ${y + boxHeight} V${y + boxHeight + gap - 8}`}
                stroke="#F3F1EC"
                strokeWidth="1.5"
              />
            ) : null}
            <rect
              x={x}
              y={y}
              width={boxWidth}
              height={boxHeight}
              fill="#1A1D21"
              stroke={highlight ? "#F5A623" : "#8A9199"}
              strokeWidth="1.5"
            />
            <text
              x={x + 16}
              y={y + 32}
              fill="#F5A623"
              fontSize="12"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {String(index + 1).padStart(2, "0")}
            </text>
            <text
              x={x + 52}
              y={y + 36}
              fill="#F3F1EC"
              fontSize="16"
              fontWeight="600"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {step.title}
            </text>
            <text
              x={x + 52}
              y={y + 60}
              fill="#C5C3BE"
              fontSize="13"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {step.detail}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure>
      <figcaption className="max-w-2xl text-lg leading-relaxed text-muted">
        {architecturePage.diagram.lede}
      </figcaption>
      <ol className="sr-only">
        {steps.map((step) => (
          <li key={step.title}>
            {step.title} — {step.detail}
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <HorizontalDiagram />
        <VerticalDiagram />
      </div>
    </figure>
  );
}
