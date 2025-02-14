module.exports = {
  title: 'FaasJS',
  description: 'An atomic FaaS Application Framework based on Typescript and Node.js',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'FaasJS',
      description: 'An atomic FaaS Application Framework based on Typescript and Node.js'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'FaasJS',
      description: '一个基于 Typescript 和 Node.js 的原子化 FaaS 应用框架'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'English',
        editLinkText: 'Edit this page on GitHub',
        navbar: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Documents',
            link: '/doc/'
          },
          {
            text: 'Examples',
            link: 'https://github.com/faasjs/faasjs/blob/master/examples/'
          },
          {
            text: 'Tools',
            children: [
              {
                text: 'VS Code Plugin',
                link: 'https://marketplace.visualstudio.com/items?itemName=FaasJS.faasjs-snippets'
              },
              {
                text: 'Docker Images',
                link: 'https://github.com/faasjs/faasjs/blob/master/images/'
              },
            ]
          },
          {
            text: 'Changelog',
            link: 'https://github.com/faasjs/faasjs/blob/master/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/faasjs/faasjs/blob/master/CONTRIBUTING.md'
          },
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        selectLanguageName: '简体中文',
        navbar: [
          {
            text: '首页',
            link: '/zh/'
          },
          {
            text: '教程',
            link: '/zh/guide/'
          },
          {
            text: '文档',
            link: '/zh/doc/'
          },
          {
            text: '示例',
            link: 'https://github.com/faasjs/faasjs/blob/master/examples/'
          },
          {
            text: '工具',
            children: [
              {
                text: 'VS Code 插件',
                link: 'https://marketplace.visualstudio.com/items?itemName=FaasJS.faasjs-snippets'
              },
              {
                text: 'Docker 镜像',
                link: 'https://github.com/faasjs/faasjs/blob/master/images/'
              },
            ]
          },
          {
            text: '更新日志',
            link: 'https://github.com/faasjs/faasjs/blob/master/CHANGELOG.md'
          },
          {
            text: '支持 FaasJS',
            link: 'https://github.com/faasjs/faasjs/blob/master/CONTRIBUTING.md'
          },
        ],
        sidebar: {
          '/zh/guide/': [
            '',
            'tencentcloud',
            'auth',
            {
              title: '进阶学习',
              collapsable: false,
              children: [
                'excel/faas-yaml',
                'excel/plugin',
                'excel/http',
                'excel/db',
                'excel/request-spec',
                'excel/env',
                'excel/lint',
                'excel/vue',
                'excel/react',
                'excel/graphql-server',
              ]
            },
            'story'
          ],
          '/zh/doc/': [
            ['', '总览'],
            {
              title: '核心插件',
              collapsable: false,
              children: [
                'func',
                'cloud_function',
                'deployer',
                'test',
              ]
            },
            {
              title: '命令行插件',
              collapsable: false,
              children: [
                'cli',
                'create-faas-app'
              ]
            },
            {
              title: '工具插件',
              collapsable: false,
              children: [
                'deep_merge',
                'load',
                'logger',
                'request',
                'server',
              ]
            },
            {
              title: '代码风格插件',
              collapsable: false,
              children: [
                'eslint-config-react',
                'eslint-config-recommended',
                'eslint-config-vue',
              ]
            },
            {
              title: '网络插件',
              collapsable: false,
              children: [
                'http',
                'graphql-server',
              ]
            },
            {
              title: '数据库插件',
              collapsable: false,
              children: [
                'knex',
                'mongo',
                'redis',
              ]
            },
            {
              title: '服务商适配插件',
              collapsable: false,
              children: [
                'tencentcloud'
              ]
            },
            {
              title: '前端插件',
              collapsable: false,
              children: [
                'browser',
                'react',
                'vue-plugin',
              ]
            },
          ]
        },
        lastUpdatedText: '更新时间',
        editLinkText: '帮助我们改善此页面'
      }
    },
    repo: 'faasjs/faasjs',
    docsRepo: 'faasjs/faasjs',
    docsDir: 'docs',
    docsBranch: 'master',
    contributors: false
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-143006612-1'
      }
    ]
  ]
}
