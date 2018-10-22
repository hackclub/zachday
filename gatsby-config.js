const path = require('path')

module.exports = {
  siteMetadata: {
    name: 'zachday',
    siteUrl: 'https://zachday.netlify.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        theme: path.join(__dirname, 'src/theme'),
        data: path.join(__dirname, 'src/data.json')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'zachday',
        short_name: 'zachday',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2b34b6',
        display: 'minimal-ui'
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/icon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify'
  ]
}
