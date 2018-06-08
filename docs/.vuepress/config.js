module.exports = {
  base: "/html2/",
  locales: {
    '/': {
      lang: 'en',
      title: 'Styde HTML',
      description: 'Build forms, fields, menus, alert messages and other view components quickly in Laravel'
    },
    '/es/': {
      lang: 'es',
      title: 'Styde HTML',
      description: 'Paquete para generar componentes HTML en Laravel'
    }
  },
  themeConfig: {
    editLinks: true,
    repo: 'stydenet/html',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'master',
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Documentation', link: '/usage/' },
          { text: 'Old version (<= 1.5.*)', link: '/old-version/' },
        ],
        sidebar: {
          '/usage/': genSidebarConfig('Usage', 'Components')
        }
      },
      '/es/': {
        selectText: 'Idiomas',
        label: 'Español',
        editLinkText: 'Editar esta página en GitHub',
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Documentación', link: '/es/usage/' },
          { text: 'Versión anterior (<= 1.5.*)', link: '/es/old-version/' },
        ],
        sidebar: {
          '/es/usage/': genSidebarConfig('Uso', 'Componentes')
        }
      }
    }
  }
}
function genSidebarConfig (title, components) {
  return [
    {
      title: title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'config',
        'internationalization',
        'themes'
      ]
    },
    {
      title: components,
      collapsable: false,
      children: [
        'field-builder',
        'form-builder',
        'html-builder',
        'menu-generator',
        'alert-messages',
        'access-handler',
      ]
    }
  ]
}
