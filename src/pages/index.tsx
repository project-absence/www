import Admonition from "@theme/Admonition";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout title={`Project Absence`} description="👁️ Uncover the unseen">
      <main>
        <div className="container padding-top--md padding-bottom--lg">
          <div className="markdown">
            <h1>Project Absence</h1>
            <p className="spaced">
              <a href="https://docs.rs/project-absence">
                <img
                  src="https://img.shields.io/badge/docs.rs-project--absence-61c192.svg"
                  alt="Docs.rs Badge"
                />
              </a>{" "}
              <a href="https://crates.io/crates/project-absence">
                <img
                  src="https://img.shields.io/crates/v/project-absence.svg?color=fe7d37"
                  alt="Crates.io Badge"
                />
              </a>{" "}
              <a href="https://github.com/project-absence/project-absence/actions">
                <img
                  src="https://github.com/project-absence/project-absence/actions/workflows/ci.yml/badge.svg"
                  alt="CI Badge"
                />
              </a>{" "}
              <a href="https://deps.rs/repo/github/project-absence/project-absence">
                <img
                  src="https://deps.rs/repo/github/project-absence/project-absence/status.svg"
                  alt="Dependency Status Badge"
                />
              </a>
            </p>
            <p className="spaced">
              <a href="https://github.com/project-absence/project-absence/commits/main">
                <img
                  src="https://img.shields.io/github/last-commit/project-absence/project-absence"
                  alt="Last Commit Badge"
                />
              </a>{" "}
              <a href="https://conventionalcommits.org/en/v1.0.0/">
                <img
                  src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white"
                  alt="Conventional Commits Badge"
                />
              </a>
            </p>
            <Admonition type="caution" title="Warning">
              <p>
                This is a WIP tool that is <strong>very unstable</strong> and{" "}
                <strong>not fully optimised</strong>, use at your own care! This
                page will also be reworked.
              </p>
            </Admonition>
            <p>Uncover the unseen</p>
            <h2 id="contributing">Contributing</h2>
            <p>
              People may contribute by following the{" "}
              <a href="/community/contributing-guidelines/">
                Contributing Guidelines
              </a>{" "}
              and the <a href="/community/code-of-conduct/">Code of Conduct</a>.
            </p>
            <h2 id="license">License</h2>
            <p>
              This library was made with 💜 by Krypton and is under the{" "}
              <a href="https://github.com/project-absence/project-absence/blob/main/LICENSE.md">
                MIT License
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
