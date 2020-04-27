const navconf = require('./config/nav-config.js');
const headconf = require('./config/head-config.js');
const pluginsconf = require('./config/plugins-config.js');
module.exports = {
  //base: '/docs/',
  title: '91张先生',
  description: '到此一游',
  head: headconf,
<<<<<<< HEAD
  plugins: pluginsconf,
=======
 // plugins: pluginsconf,
>>>>>>> 3ec1334b1bd292c54f9b607bf81db5efdbbb45c5
  themeConfig: {
    logo: '/assets/img/logo.png',
    lastUpdated: '上次更新',
    repo: '91MrZhang',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: navconf,
  },
}
