const navconf = require('./config/nav-config.js');
module.exports = {
  //base: '/docs/',
  title: '91张先生',
  description: '到此一游',
  themeConfig: {
    logo: '/assets/img/logo.png',
    lastUpdated: '上次更新',
    //smoothScroll: true,
    nav: navconf,
  },
}
