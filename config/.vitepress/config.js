import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cure Dolly Script - Grammaire Japonaise',
  description: 'Traduction française du script de Cure Dolly pour apprendre la grammaire japonaise',
  
  // Configuration pour GitHub Pages
  base: '/cure-script/',
  
  // Langue par défaut : français
  lang: 'fr-FR',
  
  // Configuration multilingue
  locales: {
    root: {
      label: 'Français',
      lang: 'fr-FR',
      title: 'Cure Dolly Script - Grammaire Japonaise',
      description: 'Traduction française du script de Cure Dolly pour apprendre la grammaire japonaise',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/' },
          { text: 'À propos', link: '/about' }
        ],
        sidebar: generateSidebar('fr'),
        editLink: {
          pattern: 'https://github.com/clublettreurs/cure-script/edit/main/config/docs/fr/:path',
          text: 'Modifier cette page sur GitHub'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Cure Dolly Script - Japanese Grammar',
      description: 'Cure Dolly\'s Japanese grammar script',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about' }
        ],
        sidebar: generateSidebar('en'),
        editLink: {
          pattern: 'https://github.com/clublettreurs/cure-script/edit/main/config/docs/en/:path',
          text: 'Edit this page on GitHub'
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'Cure Dolly Script - Японская грамматика',
      description: 'Скрипт японской грамматики Cure Dolly',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'О проекте', link: '/ru/about' }
        ],
        sidebar: generateSidebar('ru'),
        editLink: {
          pattern: 'https://github.com/clublettreurs/cure-script/edit/main/config/docs/ru/:path',
          text: 'Редактировать эту страницу на GitHub'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.png',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clublettreurs/cure-script' }
    ],

    footer: {
      message: 'Basé sur le travail de Cure Dolly',
      copyright: 'Copyright © 2024 Club Lettreurs'
    },

    search: {
      provider: 'local'
    }
  },

  // Configuration du build
  srcDir: 'docs',
  outDir: '../dist',
  
  // Optimisations
  cleanUrls: true,
  lastUpdated: true
})

function generateSidebar(lang) {
  const lessons = []
  
  // Générer automatiquement la sidebar basée sur les fichiers
  for (let i = 1; i <= 97; i++) {
    lessons.push({
      text: `Leçon ${i}`,
      link: `/${lang === 'fr' ? '' : lang + '/'}${i}-`
    })
  }

  return [
    {
      text: lang === 'fr' ? 'Introduction' : lang === 'en' ? 'Introduction' : 'Введение',
      items: [
        { text: lang === 'fr' ? 'Accueil' : lang === 'en' ? 'Home' : 'Главная', link: `/${lang === 'fr' ? '' : lang + '/'}` },
        { text: lang === 'fr' ? 'À propos' : lang === 'en' ? 'About' : 'О проекте', link: `/${lang === 'fr' ? '' : lang + '/'}about` }
      ]
    },
    {
      text: lang === 'fr' ? 'Leçons' : lang === 'en' ? 'Lessons' : 'Уроки',
      items: lessons.slice(0, 10) // Afficher les 10 premières leçons
    }
  ]
}
