## demo3
### 1）代码
```jsx
const withNextra = require('nextra')({
  // 主题名称
  theme: 'nextra-theme-docs',
  // 主题配置，指定主题配置文件
  themeConfig: './theme.config.jsx'
})

const nextConfig = {
  // next 本身配置
}

// withNextra 的作用其实就是添加 next 配置。
module.exports = withNextra(nextConfig);
复制代码
```
