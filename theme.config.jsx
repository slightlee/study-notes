import Image from "next/image"
import logoPng from './public/logo.png'

export default {
  docsRepositoryBase: 'https://github.com/slightlee/study-notes/tree/main',

  head: (
    <>
      <link rel="icon" href="/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
      <title>一点笔记</title>
    </>
  ),
  banner: {
    key: '1.0-release',
    text: (
      <span>每天进步一点点🎉🎉</span>
    ),
    dismissible: false
  },
  logo:  (
    <>
    <Image src={logoPng} alt="Logo" width={24} height={24} />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        一点笔记
      </span>
    </>
  ),
  search: {
    placeholder: '搜索文档...'
  },
  project: {
    link: 'https://github.com/slightlee/study-notes'
  },
  sidebar: {
    toggleButton: true
  },
  toc: {
    title: '内容目录',
    backToTop: true,
  },
  feedback: {
    content: '有疑问？给我们反馈→',
  },
  editLink: {
    text: '在 GitHub 上编辑此页→',
  },
  navigation: {
    prev: true,
    next: true
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '明亮',
        dark: '黑暗',
        system: '自动'
      }
    }
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://xxx.com" target="_blank">
          一点笔记
        </a>
      </span>
    )
  }
}
//   https://nextra.site/docs/docs-theme/theme-configuration