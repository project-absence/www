import { getServiceIcon } from "@site/src/utils/service-icon";
import Badge from "../Badge";
import NodeDetails from "../NodeDetails";

type OpenPort = {
  port: number;
  potential_service: string;
};

type HostnameModalProps = {
  label: string;
  expired: boolean;
  recent: boolean;
  ports?: OpenPort[] | undefined;
};

export default function HostnameModal({
  label,
  expired,
  recent,
  ports,
}: HostnameModalProps) {
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
      {ports && (
        <NodeDetails title="Open Ports">
          <pre>
            <ul
              style={{
                listStyleType: "none",
                margin: "0px",
                padding: "0px",
              }}
            >
              {ports.map((port) => {
                if (port.potential_service !== "unknown") {
                  return (
                    <li style={{ alignItems: "center", display: "flex" }}>
                      {port.port} - {port.potential_service}{" "}
                      {getServiceIcon(port.potential_service)}
                    </li>
                  );
                }
                return (
                  <li style={{ alignItems: "center", display: "flex" }}>
                    {port.port}
                  </li>
                );
              })}
            </ul>
          </pre>
        </NodeDetails>
      )}
    </div>
  );
}
