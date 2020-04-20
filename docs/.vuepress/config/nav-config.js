module.exports = [
    { text: '主页', link: '/' },
    {
      text: '系统',
      ariaLabel: 'OS Menu',
      items: [
        {
          text: 'Linux',
          items: [
            { text: 'CentOS', link: '/os/centos/' },
            { text: 'RHEL', link: '/os/rhel/' }
          ],
        },
        {
          text: 'Windows',
          items: [
            { text: 'Windows Server', link: '/os/winserver/' }
          ],
        },
      ],
    },

    {
      text: '开发维护',
      ariaLabel: 'CODE Menu',
      items: [
        {
          text: 'CODE',
          items: [
            { text: 'Java', link: '/os/winserver/' },
            { text: 'Python', link: '/os/winserver/' },
            { text: 'Html', link: '/os/winserver/' }
          ]
        },
        {
          text: '数据库',
          items: [
            { text: 'Oracle', link: '/os/winserver/' },
            { text: 'SQLServer', link: '/os/winserver/' },
            { text: 'Mysql', link: '/os/winserver/' },
            { text: 'Redis', link: '/os/winserver/' },

          ]
        },
        {
          text: '云平台',
          items: [
            { text: '阿里云', link: '/os/winserver/' },
            { text: '华为云', link: '/os/winserver/' },
          ]
        },
      ],
    },
    {
      text: '奇淫巧技', items: [
        { text: '开发工具', link: '/os/winserver/' },
        { text: '工作常用', link: '/os/winserver/' },
      ]
    },
    { text: 'GitHub', link: 'https://github.com/91MrZhang' },
];