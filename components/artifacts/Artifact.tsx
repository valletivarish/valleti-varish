import type { Artifact as ArtifactType } from "@/content/types";
import LatencyBars from "./LatencyBars";
import ConfigBlock from "./ConfigBlock";
import IncidentTimeline from "./IncidentTimeline";
import ConcurrencyDiagram from "./ConcurrencyDiagram";

export default function Artifact({ artifact }: { artifact: ArtifactType }) {
  switch (artifact.kind) {
    case "latency":
      return (
        <LatencyBars
          beforeMs={artifact.beforeMs}
          afterMs={artifact.afterMs}
          label={artifact.label}
        />
      );
    case "config":
      return <ConfigBlock caption={artifact.caption} lines={artifact.lines} />;
    case "query":
      return <IncidentTimeline caption={artifact.caption} lines={artifact.lines} />;
    case "concurrency":
      return <ConcurrencyDiagram caption={artifact.caption} />;
    default:
      return null;
  }
}
