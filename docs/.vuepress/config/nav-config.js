module.exports = [
  { text: '主页', link: '/' },
  {
    text: '开发维护',
    ariaLabel: 'CODE Menu',
    items: [
      {
        text: '服务器',
        items: [
          { text: 'Linux', link: '/Linux/' }
        ]
      },
      {
        text: 'Java',
        items: [
          { text: 'Java基础', link: '/Java基础/' },
          { text: 'Tomcat', link: '/Tomcat/' },
          { text: 'Spring', link: '/Spring/' }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'Oracle', link: '/Oracle/' },
          { text: 'MySQL', link: '/MySQL/' },
          { text: 'SQL Server', link: '/SQLServer/' }

        ]
      },

      {
        text: '其他',
        items: [
          { text: 'Nginx', link: '/Nginx/' }
        ]
      },
    ],

  },

  {
    text: '云平台',
    items: [
      { text: '阿里云', link: '/阿里云/' },
      { text: '华为云', link: '/华为云/' },
    ]
  },
  { text: '奇淫巧技', link: '/奇淫巧技/' },
  { text: 'Blackboard', link: '/Blackboard/' }
]

