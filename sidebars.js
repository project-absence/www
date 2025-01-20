// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: "category",
      label: "Installation",
      items: ["installation/docker"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Usage",
      items: ["usage/arguments", "usage/config"],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;
