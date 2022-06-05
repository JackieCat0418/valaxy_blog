import type { UserConfig } from 'valaxy'
import type { ThemeUserConfig } from 'valaxy-theme-yun'

/**
 * User Config
 * do not use export const
 */
const config: UserConfig<ThemeUserConfig> = {
  lang: 'zh-CN',
  title: 'Jackie的喵窝~',
  author: {
    name: 'Jackie',
    avatar: 'https://public.sunyz.net/persons/JackieCat.jpg/webp',
    email: 'j169880742@outlook.com',
    status: {
      emoji: '🏳️‍⚧️',
      message: '想要变成可爱的女孩子~',
    },
  },
  description: '想要变成可爱的女孩子~',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/JackieCat0418',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=1514103617',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/151191214',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/JackieCatawa',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:j169880742@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    algolia: {
      enable: true,
      appId: '9GNLKV237B',
      apiKey: '4f920d9b98c9771c696ec51d23ead889',
      indexName: 'jackiecat-blog',
      chunkSize: 5000,
    }
  },

  comment: {
    waline: {
      enable: true,
      serverURL: 'waline.jackiecat.top',
    }
  },

  theme: 'yun',

  themeConfig: {
    bg_image: {
      enable: true,
      url: 'https://public.sunyz.net/persons/JackieCat-Background.png/webp',
      opacity: 0.8,
    },
    banner: {
      enable: true,
      title: 'Jackie的喵窝~',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2022,
      powered: true,
    },
  },

  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },
}

/**
 * add your icon to safelist
 * if your theme is not yun, so you can add it by yourself
 */
config.themeConfig?.pages?.forEach((item) => {
  config.unocss?.safelist?.push(item?.icon)
})

export default config
