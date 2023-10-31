// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Academecians',
  tagline: "Late to Study? We've Got You Covered!",
  favicon: 'img/favicon.ico',

  // https://gdsc-bit-raipur.github.io
  // Set the production url of your site here
  url: 'http://ayesavi.in',
  // Set the /<baseUrl>/  pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/The-Academecians',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GDSC-BIT-Raipur', // Usually your GitHub org/user name.
  projectName: 'The-Academecians', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets:[
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:"/",  
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins:[math],
          rehypePlugins:[katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/GDSC-BIT-Raipur/The-Academecians/tree/main",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Academecians',
        logo: {
          alt: 'site-logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/blog', label: 'First Year', position: 'left'},
          {
            href: 'https://github.com/GDSC-BIT-Raipur/The-Academecians',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'First Year',
            items: [
              {
                label: 'First Year',
                to: '/docs/first-year',
              },
            ],
          },
          {
            title: 'Community',
            items: [
            
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/gdsc_bitr/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gdsc_bitr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/GDSC-BIT-Raipur/The-Academecians',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Academecians, Powered By GDSC-BITR`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
