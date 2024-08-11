import Image from "next/image"
import logoPng from '@public/logo.png'
import ScrollToTop from './components/global/ScrollToTop'

export default {
  docsRepositoryBase: 'https://github.com/slightlee/study-notes/tree/main',

  head: (
    <>
      <link rel="icon" href="/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
      <title>Y笔记</title>
    </>
  ),
  // banner: {
  //   key: '1.0-release',
  //   text: (
  //     <span>每天进步一点点🎉🎉</span>
  //   ),
  //   dismissible: false
  // },
  logo: (
    <>
      <Image src={logoPng} alt="Logo" width={24} height={24} />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Y笔记
      </span>
    </>
  ),
  search: {
    placeholder: '搜索文档...',
    emptyResult: <>
      <span class="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        未找到相关内容，请尝试其它关键词
      </span>
    </>
  },
  project: {
    link: 'https://github.com/slightlee/study-notes'
  },
  sidebar: {
    toggleButton: true,
    titleComponent({ title }) {
      const titles = ["开发工具", "SSL证书", "Mac"];
      if (titles.includes(title)) {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#87CEFA" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" />
            </svg>
            &nbsp;&nbsp;
            <span><b>{title}</b></span>
          </div>
        );
      }
      return <>{title}</>
    }
  },
  toc: {
    title: '内容目录',
    backToTop: false,
    extraContent: <ScrollToTop />
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
        Y笔记
      </span>
    )
  },
  gitTimestamp: ({ timestamp }) => {
    const date = new Date(timestamp);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    return `最后更新于 ${date.toLocaleDateString('zh-CN', options)}`;
  },
}
//   https://nextra.site/docs/docs-theme/theme-configuration