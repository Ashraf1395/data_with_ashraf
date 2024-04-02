// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: 'Data With Ashraf',
  author: 'Ashraf',
  fullName: 'Ashraf Mohammad',
  headerTitle: 'Data With Ashraf',
  description: 'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://datawithashraf.com',
  analyticsURL:
    "https://analytics.us.umami.is/share/LwbQOMMcBOK9zcwU/Karhdo's%20Blog%20-%20Karhdo's%20Coding%20Adventure",
  siteRepo: 'https://github.com/Ashraf1395/data_with_ashraf',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/karhdo-blog.png',
  email: '1395ashraf@gmail.com',
  github: 'https://github.com/Ashraf1395',
  linkedin: 'https://www.linkedin.com/in/ashraf1395',
  locale: 'en-US',
  socialAccounts: {
    github: 'Ashraf1395',
    linkedin: 'ashraf1395',
  },
  analytics: {
    umamiWebsiteId: '7b7953a7-de2e-4e30-9a29-1a4aee05c627',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
