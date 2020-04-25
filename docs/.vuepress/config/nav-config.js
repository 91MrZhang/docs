module.exports = [
    { text: '主页', link: '/' },
    {
      text: '系统',
      ariaLabel: 'OS Menu',
      items: [
        {
          text: 'Linux',
          items: [
            { text: 'CentOS/RHEL', link: '/os/centos/' }
          ],
        },
        {
          text: 'Windows',
          items: [
            { text: 'Windows Server', link: '/os/winserver1/' }
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
            { text: 'Java', link: '/os/winserver2/' },
            { text: 'Python', link: '/os/winserver3/' },
            { text: 'Html', link: '/os/winserver4/' }
          ]
        },
        {
          text: '数据库',
          items: [
            { text: 'Oracle', link: '/os/winserver5/' },
            { text: 'SQLServer', link: '/os/winserver6/' },
            { text: 'Mysql', link: '/os/winserver7/' },
            { text: 'Redis', link: '/os/winserver8/' },

          ]
        },
        {
          text: '云平台',
          items: [
            { text: '阿里云', link: '/os/winserver9/' },
            { text: '华为云', link: '/os/winserver10/' },
          ]
        },
      ],
    },
    {
      text: '奇淫巧技', items: [
        { text: '开发工具', link: '/os/winserver11/' },
        { text: '工作常用', link: '/os/winserver12/' },
      ]
    },
    { text: 'GitHub', link: 'https://github.com/91MrZhang' },
];

