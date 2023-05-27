// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Intro',
    },
  ],
  stdSidebar: [
    {
      type: 'category',
      label: 'archive',
      link: {
        type: 'generated-index',
        title: 'archive',
      },
      items: [
        {
          type: 'doc',
          id: 'std/archive/tar',
          label: 'tar',
        },
        {
          type: 'doc',
          id: 'std/archive/zip',
          label: 'zip',
        },
      ],
    },
  ]
};

module.exports = sidebars;
