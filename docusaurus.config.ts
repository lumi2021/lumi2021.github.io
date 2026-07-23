import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Lumi\'s Portifolio',
    tagline: 'lumi2021\'s cool portifolio',
    favicon: 'img/favicon.ico',

    future: {
        v4: true,
    },

    url: 'https://lumi2021.github.io',
    baseUrl: '/',

    organizationName: 'lumi2021',
    projectName: 'lumi2021.github.io',

    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'pt',
        locales: [ 'en', 'pt' ],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    path: 'posts',
                    routeBasePath: 'posts',
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },

                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },

                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },

                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',

        colorMode: {
            respectPrefersColorScheme: true,
        },

        footer: {
            style: 'dark',
            links: [
                // {
                //   title: 'Docs',
                //   items: [
                //     {
                //       label: 'Tutorial',
                //       to: '/docs/intro',
                //     },
                //   ],
                // },
                // {
                //   title: 'Community',
                //   items: [
                //     {
                //       label: 'Stack Overflow',
                //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //     },
                //     {
                //       label: 'Discord',
                //       href: 'https://discordapp.com/invite/docusaurus',
                //     },
                //     {
                //       label: 'X',
                //       href: 'https://x.com/docusaurus',
                //     },
                //   ],
                // },
                // {
                //   title: 'More',
                //   items: [
                //     {
                //       label: 'Blog',
                //       to: '/blog',
                //     },
                //     {
                //       label: 'GitHub',
                //       href: 'https://github.com/facebook/docusaurus',
                //     },
                //   ],
                // },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} lumi2021. Built with Docusaurus.`,
        },

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },

    } satisfies Preset.ThemeConfig,
};

export default config;
