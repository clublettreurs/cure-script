import { defineConfig } from 'vitepress';
import { sidebar } from './sidebar.mts'; 

export default defineConfig({
  title: "Cure Dolly",
  description: "in markdown",
  srcDir: 'docs',
  base: process.env.VITE_BASE_URL || '/cure-script/',
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
    }
    // Les versions anglaise et russe sont disponibles sur le site original :
    // https://kellenok.github.io/cure-script/
  },

  markdown: {
    image: {
      lazyLoading: true
    }
  },
  
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { rel: 'icon', href: '/cure-script/favicon.ico' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet', rel: 'stylesheet' }
    ],
    ['meta', { name: 'og:title', content: "Cure Dolly Grammar guide" }],
    ['meta', { property: 'og:description', content: 'Enjoy the entire grammar guide in a easy-to-read web format' }],
    ['meta', { property: 'og:image', content: '/cure-script/og.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://clublettreurs.github.io/cure-script' }],
    ['meta', { name: 'twitter:url', content: 'https://clublettreurs.github.io/cure-script' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' } ],
    ['meta', { name: 'twitter:title', content: 'Cure Dolly Grammar guide' } ],
    ['meta', { name: 'twitter:description', content: 'Enjoy the entire grammar guide in a easy-to-read web format' } ],
    ['meta', { name: 'twitter:image', content: '/cure-script/og.png' } ],
  ],

  themeConfig: {
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/clublettreurs/cure-script/edit/main/config/docs/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clublettreurs/cure-script' }
    ],
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'À propos', link: '/about' },
      { text: '🇬🇧 English', link: 'https://kellenok.github.io/cure-script/', target: '_blank' },
      { text: '🇷🇺 Русский', link: 'https://kellenok.github.io/cure-script/ru/', target: '_blank' },
      { text: '🌐 Site complet', link: 'https://kellenok.github.io/cure-script/', target: '_blank' }
    ],
    footer: {
      message: 'Traduction française par <a href="https://github.com/clublettreurs">Club Lettreurs</a> • Site créé par <a href="https://bento.me/kln">Kellen</a> • Transcription originale par <a href="https://docs.google.com/document/d/1XpuXerkGU8waJ4DPDNJA4bGeqOvM-csXjTe57iHARc">Mordraug/Nunko</a>'
    }
  }
});
