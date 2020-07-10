module.exports = [
  { text: '主页', link: '/' },
  {
    text: '开发维护',
    ariaLabel: 'CODE Menu',
    items: [
      {
        text: '服务器',
        items: [
          { text: 'Linux', link: '/linux/' }
        ]
      },
      {
        text: 'Code',
        items: [
          { text: 'Java', link: '/java/' },
          { text: 'HTML', link: '/html/' }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'Oracle', link: '/oracle/' },
          { text: 'Mysql', link: '/mysql/' },
          { text: 'Sql Server', link: '/mssql/' }

        ]
      },

      {
        text: '其他',
        items: [
          { text: 'Nginx', link: '/nginx/' }
        ]
      },
    ],

  },

  {
    text: '云平台',
    items: [
      { text: '阿里云', link: '/aliyun/' },
      { text: '华为云', link: '/huaweiyun/' },
    ]
  },
  { text: '奇淫巧技', link: '/qyqj/' },
  { text: 'Blackboard', link: '/blackboard/' }
]

