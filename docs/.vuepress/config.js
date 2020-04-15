module.exports = {
    base:'/docs/',
    title: '91张先生',
    description: '到此一游',
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'OS', ariaLabel: 'OS Menu',
                items: [
                    { text: 'CentOS', link: '/os/centos/' },
                    { text: 'Windows Server', link: '/os/winserver/' },
                    { text: 'Ubuntu', link: '/language/chinese/' },
                ]
            },
            {
                text: '后端', ariaLabel: 'Backend Menu',
                items: [
                    { text: 'JAVA', link: '/language/chinese/' },
                    { text: '数据库', link: '/language/japanese/' },
                    { text: '云服务', link: '/language/chinese/' },
                ]
            },
            { text: '前端', link: '/guide/' },
            { text: '奇淫巧技', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/91MrZhang' },
        ]
    }
}