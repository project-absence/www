import { checkFlag, DomainFlags } from "@site/src/utils/flags";
import { getServiceIcon } from "@site/src/utils/service-icon";
import Badge from "../Badge";
import NodeDetails from "../NodeDetails";

type Port = {
  port: number;
  potential_service: string;
};

interface IBanner {
  display(): string;
}

class HttpBanner implements IBanner {
  content_type?: string;
  allow?: string;
  server?: string;
  title?: string;

  constructor(data: {
    content_type?: string;
    allow?: string;
    server?: string;
    title?: string;
  }) {
    this.content_type = data.content_type;
    this.allow = data.allow;
    this.server = data.server;
    this.title = data.title;
  }

  display(): string {
    const entries = [];
    if (this.content_type)
      entries.push({ key: "http-content-type", value: this.content_type });
    if (this.allow) entries.push({ key: "http-allow", value: this.allow });
    if (this.server)
      entries.push({ key: "http-server-header", value: this.server });
    if (this.title) entries.push({ key: "http-title", value: this.title });

    return formatTree(entries);
  }
}

function formatTree(entries: { key: string; value: string }[]): string {
  return entries
    .map(({ key, value }, index, array) =>
      index === array.length - 1 ? `└ ${key}: ${value}` : `├ ${key}: ${value}`
    )
    .join("\n");
}

function createBanner(port: number, data: any): IBanner {
  if (!data || typeof data !== "object") {
    throw new Error(`Invalid banner data on port ${port}`);
  }
  switch (port) {
    case 80:
    case 443:
      return new HttpBanner(data);
    default:
      throw new Error(`Unknown banner type on port ${port}`);
  }
}

type BannerData = { server?: string; title?: string };

type DomainModalProps = {
  label: string;
  flags: number;
  screenshot?: string;
  ports?: Port[];
  banners?: { [key: string]: BannerData };
};

export default function DomainModal({
  label,
  flags,
  screenshot,
  ports,
  banners,
}: DomainModalProps) {
  const expired = checkFlag(flags, DomainFlags.HAS_EXPIRED);
  const recent = checkFlag(flags, DomainFlags.IS_RECENT);

  function renderPorts() {
    if (!ports || ports.length === 0) return null;
    return (
      <NodeDetails title="Open Ports">
        <pre>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            {ports.map((port) => {
              const rawBanner = banners[port.port];
              const bannerText = rawBanner
                ? createBanner(port.port, rawBanner).display()
                : "";
              return (
                <li key={port.port} style={{ alignItems: "center" }}>
                  <span style={{ display: "flex" }}>
                    {port.port} -{" "}
                    {port.potential_service !== "unknown"
                      ? port.potential_service
                      : ""}{" "}
                    {getServiceIcon(port.potential_service)}
                  </span>
                  {bannerText && <p>{bannerText}</p>}
                </li>
              );
            })}
          </ul>
        </pre>
      </NodeDetails>
    );
  }

  return (
    <div className="container">
      <div className="row margin-top--md margin-bottom--md">
        <div className="col col--12">
          <div className="row">
            <div className="col col--3">
              <strong>Label:</strong>
            </div>
            <div className="col col--9">{label}</div>
          </div>
        </div>
      </div>
      <div className="row margin-top--md margin-bottom--md">
        <div className="col col--12">
          <div className="row">
            <div className="col col--3">
              <strong>Status:</strong>
            </div>
            <div className="col col--9">
              <Badge
                content={expired ? "Expired" : "Active"}
                type={expired ? "danger" : "success"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row margin-top--md margin-bottom--md">
        <div className="col col--12">
          <div className="row">
            <div className="col col--3">
              <strong>Recent:</strong>
            </div>
            <div className="col col--9">
              <Badge
                content={recent ? "Yes" : "No"}
                type={recent ? "info" : "secondary"}
              />
            </div>
          </div>
        </div>
      </div>
      {screenshot && !screenshot.endsWith(".png") && (
        <NodeDetails title="Screenshot">
          <img src={`data:image/png;base64,${screenshot}`} />
        </NodeDetails>
      )}
      {renderPorts()}
    </div>
  );
}
