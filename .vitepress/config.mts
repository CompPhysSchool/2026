import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/2026/',
  srcDir: 'src',
  title: "計算物理春の学校 2026",
  description: "計算物理春の学校 2026は、大学院生や若手研究者を対象に、計算物理の基礎から最先端技術までを幅広く学ぶ場を提供します。モンテカルロ法、第一原理計算、テンソルネットワーク、機械学習、量子計算など、多彩なトピックを専門家の講義や参加者同士の交流を通じて深く理解します。分野を超えた議論や共同研究の機会を促進し、計算物理に関心のある皆様の研究発展をサポートします。皆様の積極的なご参加をお待ちしております。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About us', 
        items: [
          {text: 'About us', link: '/about' },
          { text: 'News', link: '/news' },
        ]
      },
      { text: 'Application', link: '/application' },
      { text: 'Contact', link: '/contact'},
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      { 
        text: 'About us',
        items: [
          { text: '計算物理 春の学校とは', link: '/about' },
          { text: 'News', link: '/news' }
        ]
      },
      {
        text: 'Contact',
        items: [
          { text: 'お申し込み', link: '/application' },
          { text: 'お問い合わせ', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/compphysschool' }
    ],

    footer: {
      copyright: '計算物理 春の学校2026',
    },
  }
})
