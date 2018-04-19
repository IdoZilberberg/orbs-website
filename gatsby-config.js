module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/languages`,
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-transformer-remark',
    `gatsby-transformer-json`,
    'gatsby-plugin-react-helmet'],
}
