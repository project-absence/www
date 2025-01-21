import {
  faBan,
  faBullhorn,
  faVolumeHigh,
  faVolumeLow,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "./Badge";

type NoiseLevelProps = {
  level: "none" | "low" | "medium" | "high";
};

function levelToIcon(
  level: "none" | "low" | "medium" | "high"
): IconDefinition {
  switch (level) {
    case "none":
      return faBan;
    case "low":
      return faVolumeLow;
    case "medium":
      return faVolumeHigh;
    case "high":
      return faBullhorn;
  }
}

function levelToType(
  level: "none" | "low" | "medium" | "high"
): "primary" | "secondary" | "success" | "info" | "warning" | "danger" {
  switch (level) {
    case "none":
      return "success";
    case "low":
      return "info";
    case "medium":
      return "warning";
    case "high":
      return "danger";
  }
}

export default function NoiseLevel({ level }: NoiseLevelProps) {
  return (
    <p>
      <Badge
        content={`Noise Level: ${level.charAt(0).toUpperCase() + level.slice(1)}`}
        type={levelToType(level)}
        icon={levelToIcon(level)}
      />
    </p>
  );
}
