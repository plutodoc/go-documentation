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
    {
      type: 'doc',
      id: 'std/bufio',
      label: 'bufio',
    },
    {
      type: 'doc',
      id: 'std/builtin',
      label: 'builtin',
    },
    {
      type: 'doc',
      id: 'std/bytes',
      label: 'bytes',
    },
  ]
};

module.exports = sidebars;
