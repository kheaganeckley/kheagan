require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kheagan`,
    description: 'Just a little somthing about me',
    SEOdescription:
      'This is a blog about some of my (kheagan eckley) holidays. Its got posts about the beach, the kruger, and much more. I hope you enjoy ',
    SEOkeywords: 'kruger',
    themeColor: 'black',
    siteUrl: 'https://kheagan.com/',
    emailForFormSpree: 'kheagan.eckley@gmail.com',
    author: `@kheagan`,
    About:
      'This is a little blog about some of my holidays. I wanted to keep these memories in a accessable place thats easy to share with family, friends, and other blogers. I hope you enjoy!',
    twitterUsername: 'kheagan',
    image: '/cave.jpg',
    twitter: 'hello',
    facebook: 'hello',
    types: [
      {
        name: 'Siting',
      },
      {
        name: 'Blog',
      },
      {
        name: 'A beach kind of life',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kheagan.com',
        sitemap: 'https://kheagan.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'g1fw975wghdt',
        accessToken: '9iouJalbfzUJX-oqhUzaGP4xgUDq0nkksv3jWrop37o',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Old Standard TT' // serif
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kheagan`,
        short_name: `Kheagan`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `standalone`,
        icon: `src/images/kheaganIcon512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
