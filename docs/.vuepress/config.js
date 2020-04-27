const navconf = require('./config/nav-config.js');
const headconf = require('./config/head-config.js');
const pluginsconf = require('./config/plugins-config.js');
module.exports = {
  //base: '/docs/',
  title: '91张先生',
  description: '到此一游',
  head: headconf,
  plugins: pluginsconf,
  themeConfig: {
    logo: '/assets/img/logo.png',
    lastUpdated: '上次更新',
    repo: '91MrZhang',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: navconf,
  },
}
