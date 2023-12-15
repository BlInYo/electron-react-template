# 介绍

### 这是一个还是毛胚房的模板，仅供娱乐，单纯只是为了解决react未定义的问题，目前仅能够 ```yarn run start``` 不报错其余未尝试

### todo： 
- 虽然下面用了pnpm 但是不要使用，会遇到奇怪的问题，具体原因还未查明，建议使用```yarn```或者试试```npm```
- 搞清楚forge.config

#### 基于 ```electron``` ```electron-forge``` ```react``` ```webpack``` ```typescript``` ```yarn```

#### 使用babel转义tsx，考虑到electron本身的原因，应该不用去把代码降级，所以只使用了 ```@babel/preset-react``` 和 ```@babel/preset-typescript```

#### 参考了 ```pnpm create electron-webpack```生成的模板和```pnpm create electron-app my-app --template=webpack-typescript``` forge提供的模板

#### webpack的配置请参考webpack官网


#### 目录结构
- src
  - web 视图层，所有的平时web前端代码存放的地方
    - App.tsx
    - index.html html模板
    - index.tsx react 入口文件
  - index.ts 无需改动
  - preload.ts
- .npmrc 不要随意改动，如果你在国内的话，这个文件能够帮你解决electron安装失败的问题 
- forge.config.ts forge的配置，里面使用了 WebpackPlugin 插件用来读取webpack的配置
- webpack.config.ts 前端代码打包的具体配置，叫什么名字都行，是提供给forge.config的不是直接给webpack
