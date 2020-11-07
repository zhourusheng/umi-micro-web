import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  // qiankun 插件: https://umijs.org/zh-CN/plugins/plugin-qiankun
  qiankun: {
    master: {
      // 第一步：注册子应用信息
      apps: [
        {
          name: 'shop', // 唯一 id
          entry: 'http://localhost:8001', // html entry
        },
        {
          name: 'user',
          entry: 'http://localhost:8002',
        },
      ],
    },
  },
  // 第二部：装载子应用
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
        },
        // 使用路由绑定的方式 microApp:
        // 配置微应用 shop 关联的路由
        {
          path: '/shop',
          microApp: 'shop',
        },
        {
          path: '/user',
          microApp: 'user',
        },
      ],
    },
  ],
});
