import { defineConfig } from 'vitepress'

// ─── Edit these to match your brand ──────────────────────────────────────────
const DISCORD = 'https://discord.gg/vRqEgswrng'
const STORE = 'https://kb3-studios.tebex.store/'

const base = process.env.DOCS_BASE || '/'

export default defineConfig({
  base,
  lang: 'en-US',
  title: 'KB3 Studios',
  titleTemplate: ':title · KB3 Studios Docs',
  description: 'Official documentation for KB3 Studios FiveM resources.',
  cleanUrls: true,
  appearance: 'dark', // matches the logo; visitors can still switch to light
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }],
    ['link', { rel: 'apple-touch-icon', href: `${base}apple-touch-icon.png` }],
    ['meta', { name: 'theme-color', content: '#00c8f0' }],
    ['meta', { property: 'og:image', content: `${base}logo.webp` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'KB3 Studios Docs' }],
    ['meta', { property: 'og:description', content: 'Installation, configuration and developer reference for KB3 Studios FiveM resources.' }],
  ],

  themeConfig: {
    logo: { src: '/logo-nav.webp', alt: 'KB3 Studios' },
    siteTitle: 'Docs',

    nav: [
      { text: 'Getting started', link: '/guide/getting-started' },
      {
        text: 'Resources',
        items: [
          { text: 'Admin Panel', link: '/admin-panel/' },
          { text: 'Lean System', link: '/lean/' },
          { text: 'Weapon Handling', link: '/weapon-handling/' },
          { text: 'Metal Detecting', link: '/metal-detecting/' },
          { text: 'Nova HUD', link: '/nova-hud/' },
        ],
      },
      { text: 'Performance', link: '/guide/performance' },
      { text: 'Store', link: STORE },
      { text: 'Support', link: DISCORD },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting started', link: '/guide/getting-started' },
            { text: 'Performance', link: '/guide/performance' },
            { text: 'Getting support', link: '/guide/support' },
          ],
        },
        {
          text: 'Resources',
          items: [
            { text: 'Admin Panel', link: '/admin-panel/' },
            { text: 'Lean System', link: '/lean/' },
            { text: 'Weapon Handling', link: '/weapon-handling/' },
            { text: 'Metal Detecting', link: '/metal-detecting/' },
            { text: 'Nova HUD', link: '/nova-hud/' },
          ],
        },
      ],
      '/admin-panel/': [
        {
          text: 'Admin Panel',
          items: [
            { text: 'Overview', link: '/admin-panel/' },
            { text: 'Installation', link: '/admin-panel/installation' },
            { text: 'Configuration', link: '/admin-panel/configuration' },
            { text: 'Staff & permissions', link: '/admin-panel/permissions' },
            { text: 'Commands & controls', link: '/admin-panel/commands' },
          ],
        },
        {
          text: 'Integration',
          items: [
            { text: 'Compatibility', link: '/admin-panel/compatibility' },
            { text: 'Hooks', link: '/admin-panel/hooks' },
            { text: 'Exports', link: '/admin-panel/exports' },
          ],
        },
        {
          text: 'Help',
          items: [
            { text: 'Upgrading from KB3 Control', link: '/admin-panel/upgrading' },
            { text: 'Troubleshooting', link: '/admin-panel/troubleshooting' },
            { text: 'Changelog', link: '/admin-panel/changelog' },
          ],
        },
      ],
      '/lean/': [
        {
          text: 'Lean System',
          items: [
            { text: 'Overview', link: '/lean/' },
            { text: 'Installation', link: '/lean/installation' },
            { text: 'Items', link: '/lean/items' },
            { text: 'Configuration', link: '/lean/configuration' },
            { text: 'Custom ingredients', link: '/lean/custom-ingredients' },
            { text: 'Commands', link: '/lean/commands' },
            { text: 'EMS & prescriptions', link: '/lean/ems' },
          ],
        },
        {
          text: 'Developers',
          items: [{ text: 'Exports & events', link: '/lean/developers' }],
        },
        {
          text: 'Help',
          items: [
            { text: 'Updating', link: '/lean/updating' },
            { text: 'Troubleshooting', link: '/lean/troubleshooting' },
            { text: 'Changelog', link: '/lean/changelog' },
          ],
        },
      ],
      '/weapon-handling/': [
        {
          text: 'Weapon Handling',
          items: [
            { text: 'Overview', link: '/weapon-handling/' },
            { text: 'Installation', link: '/weapon-handling/installation' },
            { text: 'Configuration', link: '/weapon-handling/configuration' },
            { text: 'Commands & controls', link: '/weapon-handling/commands' },
            { text: 'Placement editor', link: '/weapon-handling/editor' },
          ],
        },
        {
          text: 'Developers',
          items: [
            { text: 'Draw integration', link: '/weapon-handling/draw-integration' },
            { text: 'Adapters & exports', link: '/weapon-handling/developers' },
          ],
        },
        {
          text: 'Help',
          items: [
            { text: 'Migrating from SNRP', link: '/weapon-handling/migrating' },
            { text: 'Troubleshooting', link: '/weapon-handling/troubleshooting' },
            { text: 'Changelog', link: '/weapon-handling/changelog' },
          ],
        },
      ],
      '/metal-detecting/': [
        {
          text: 'Metal Detecting',
          items: [
            { text: 'Overview', link: '/metal-detecting/' },
            { text: 'Installation', link: '/metal-detecting/installation' },
            { text: 'Inventory setup', link: '/metal-detecting/inventories' },
            { text: 'Configuration', link: '/metal-detecting/configuration' },
            { text: 'Loot & prices', link: '/metal-detecting/loot' },
            { text: 'Loot editor', link: '/metal-detecting/loot-editor' },
            { text: 'Commands', link: '/metal-detecting/commands' },
          ],
        },
        {
          text: 'Developers',
          items: [{ text: 'Exports & custom adapters', link: '/metal-detecting/developers' }],
        },
        {
          text: 'Help',
          items: [
            { text: 'Updating', link: '/metal-detecting/updating' },
            { text: 'Troubleshooting', link: '/metal-detecting/troubleshooting' },
            { text: 'Changelog', link: '/metal-detecting/changelog' },
          ],
        },
      ],
      '/nova-hud/': [
        {
          text: 'Nova HUD',
          items: [
            { text: 'Overview', link: '/nova-hud/' },
            { text: 'Installation', link: '/nova-hud/installation' },
            { text: 'Configuration', link: '/nova-hud/configuration' },
            { text: 'Commands & controls', link: '/nova-hud/commands' },
            { text: 'Settings menu', link: '/nova-hud/settings' },
          ],
        },
        {
          text: 'Features',
          items: [
            { text: 'Vehicle', link: '/nova-hud/vehicle' },
            { text: 'Map & postals', link: '/nova-hud/map' },
            { text: 'Weapons', link: '/nova-hud/weapons' },
            { text: 'Stress', link: '/nova-hud/stress' },
          ],
        },
        {
          text: 'Developers',
          items: [{ text: 'Exports & events', link: '/nova-hud/developers' }],
        },
        {
          text: 'Help',
          items: [
            { text: 'Troubleshooting', link: '/nova-hud/troubleshooting' },
            { text: 'Changelog', link: '/nova-hud/changelog' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'discord', link: DISCORD }],

    search: { provider: 'local' },

    outline: { level: [2, 3], label: 'On this page' },

    footer: {
      message: `FiveM resources by KB3 Studios · <a href="${STORE}" target="_blank" rel="noopener">Store</a> · <a href="${DISCORD}" target="_blank" rel="noopener">Discord</a>`,
      copyright: `© ${new Date().getFullYear()} KB3 Studios. All rights reserved.`,
    },

    docFooter: { prev: 'Previous', next: 'Next' },
  },
})
