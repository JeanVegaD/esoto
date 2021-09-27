module.exports = {
  title: 'Emanuelle CI 2020-2021',
  url: ' https://jeanvegad.github.io',
  baseUrl: '/esoto/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'jeanvegad', // Usually your GitHub org/user name.
  projectName: 'esoto', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'Emanuelle CI logo',
        src: 'img/logos/logo_overWhite_fit.png',
      },
      items: [
              { to: 'docs/quiensoy', label: '¿Quién soy?', position: 'right'},
              { to: 'docs/candidatura', label: '¿Por qué mi candidatura?', position: 'right'},
              { to: 'docs/campus_tecnologico_local_San_Carlos', label: 'Ideario', position: 'right'},
              { to: 'https://www.tec.ac.cr/unidades/consejo-institucional', label: 'Consejo Institucional', position: 'right'}
      ],
    },
    footer: {
      style: 'dark',
    },
    googleAnalytics: {
      trackingID: "UA-175989649-1",
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docs/investigacion',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
    'https://kit.fontawesome.com/6c84ac616f.js',
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js',
  ],
};
