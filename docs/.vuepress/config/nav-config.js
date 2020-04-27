module.exports = [
    { text: '主页', link: '/' },
    {
      text: '开发维护',
      ariaLabel: 'CODE Menu',
      items: [
        {
          text: '系统',
          items: [
            { text: 'CentOS', link: '/linux/' },
            { text: 'Windows Server', link: '/os/winserver3/' }
          ]
        },
        {
          text: 'Code',
          items: [
            { text: 'Java', link: '/os/winserver2/' },
            { text: 'Python', link: '/os/winserver33/' },
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
      text: '项目', items: [
        { text: 'Blackboard', link: '/os/winserver11/' },
        { text: '微信', link: '/os/winserver12/' },
      ]
    },
    {
      text: '奇淫巧技', items: [
        { text: '开发工具', link: '/os/winserver112/' },
        { text: '开发素材', link: '/os/winserver122/' },
        { text: '骚操作', link: '/os/winserver123/' },
      ]
    }
  ]

