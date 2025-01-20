import {
  faApple,
  faDocker,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "@theme/Layout";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  // TODO: Write this entire page better
  return (
    <Layout title={"Project Absence"} description="👁️ Uncover the unseen">
      <main>
        <div className="container padding-top--md padding-bottom--lg">
          <div style={{ textAlign: "center" }} className="markdown">
            <h1>Project Absence</h1>
            <img src="/assets/purple.png" height="20%" width="20%" />
            <p>
              <strong>👁️ Uncover the unseen</strong>
            </p>
            <p>
              Project Absence is a tool for analyzing websites. Its features
              include finding open ports, discovering subdomains, discovering
              files and more will be coming with the time.
            </p>
            <div className="margin-bottom--xl">
              <a href="/docs" className="button button--primary">
                Documentation
              </a>
              <a
                href="/graph-view"
                className="button button--secondary button--outline margin-left--md"
              >
                View tool results as graph
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon size="3x" icon={faLinux} />
              <FontAwesomeIcon size="3x" icon={faApple} />
              <FontAwesomeIcon size="3x" icon={faWindows} />
              <FontAwesomeIcon size="3x" icon={faDocker} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
