# 使用官方的 Node.js 镜像作为基础镜像
FROM node:20-alpine

# 使用国内镜像源
RUN npm config set registry https://registry.npmmirror.com/

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 使用国内镜像源
RUN pnpm config set registry https://registry.npmmirror.com/

# 安装依赖
RUN pnpm install

# 复制项目的所有文件
COPY . .

# 构建项目
RUN pnpm run build

# 暴露应用运行的端口（例如：3000）
EXPOSE 3000

# 启动应用
CMD ["pnpm", "start"]
