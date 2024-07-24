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
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
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