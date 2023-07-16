// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AssettoServer',
  tagline: 'Custom Assetto Corsa server with focus on freeroam',
  url: 'https://assettoserver.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  clientModules: [
    require.resolve('./atob.js'),
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'compujuckel', // Usually your GitHub org/user name.
  projectName: 'AssettoServer', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/compujuckel/assettoserver-docs/blob/master/',
          showLastUpdateTime: true,
          versions: {
            current: {
              label: "0.0.53",
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'patreon-docs',
        path: 'patreon-docs',
        routeBasePath: 'patreon-docs',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateTime: true,
        versions: {
          current: {
            label: "Unreleased",
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AssettoServer',
        logo: {
          alt: 'AssettoServer Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Patreon Docs',
            docsPluginId: 'patreon-docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
            docsPluginId: 'patreon-docs',
          },
          {
            to: 'https://discord.gg/uXEXRcSkyz',
            "aria-label": 'Discord',
            className: 'navbar-discord',
            position: 'right',
          },
          {
            to: 'https://github.com/compujuckel/AssettoServer',
            "aria-label": 'GitHub',
            className: 'navbar-github',
            position: 'right',
          },
          {
            type: 'html',
            value: '<a class="button button--primary" style="--ifm-color-primary: #FF424D" href="https://patreon.com/assettoserver" target="_blank"><svg style="height: 0.7rem" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Patreon</title><path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z"/></svg> Become a Patron</a>',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} AssettoServer. Built with Docusaurus.<br/><a href="/impressum" style="--ifm-link-color: --ifm-footer-color">Impressum</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ini'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
