// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: "category",
      label: "Installation",
      items: [
        "installation/docker",
        "installation/cargo",
        "installation/from-source",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Usage",
      items: ["usage/arguments", "usage/config"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Modules",
      items: [
        "modules/enumerate_files",
        "modules/enumerate_subdomains",
        "modules/passive_dns",
        "modules/port_scanner",
      ],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;
