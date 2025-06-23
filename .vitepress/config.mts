import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/2026/',
  srcDir: 'src',
  title: "計算物理春の学校 2026",
  description: "計算物理春の学校 2026は、大学院生や若手研究者を対象に、計算物理の基礎から最先端技術までを幅広く学ぶ場を提供します。モンテカルロ法、第一原理計算、テンソルネットワーク、機械学習、量子計算など、多彩なトピックを専門家の講義や参加者同士の交流を通じて深く理解します。分野を超えた議論や共同研究の機会を促進し、計算物理に関心のある皆様の研究発展をサポートします。皆様の積極的なご参加をお待ちしております。",

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '参加申し込み', link: '/application' },
      { text: '協賛', link: '/about-sponsorship'},
      { text: '過去の様子', items: [
          { text: '2025年度', link: 'https://compphysschool.github.io/homepage2025/index.html'},
          { text: '2024年度', link: 'https://compphysspringschool2024.github.io/homepage2024/'},
          { text: '2023年度', link: 'https://hohno0223.github.io/comp_phys_spring_school2023/'}
      ]},
      { text: 'お問い合わせ', link: 'https://forms.gle/bgMe27Dwzry9ARBP7'},
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      { text: '参加申し込み', link: '/application' },
      { text: '協賛', items: [
        { text: '協賛のお願い', link: '/about-sponsorship'},
      ]},
      { text: '過去の様子', items: [
          { text: '2025年度', link: 'https://compphysschool.github.io/homepage2025/index.html' },
          { text: '2024年度', link: 'https://compphysspringschool2024.github.io/homepage2024/'},
          { text: '2023年度', link: 'https://hohno0223.github.io/comp_phys_spring_school2023/'}
      ]},
      { text: 'お問い合わせ', link: 'https://forms.gle/bgMe27Dwzry9ARBP7'},
    ],
    socialLinks: [
      { icon: 'x', link: 'https://x.com/compphysschool' },
      { icon: 'github', link: 'https://github.com/CompPhysSchool/2026' }
    ],
    footer: {
      copyright: '© 2026 Spring School on Computational Physics',
    },
  },

  // https://vitepress.dev/guide/extending-default-theme#overriding-internal-components
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        }
      ]
    }
  },

})
