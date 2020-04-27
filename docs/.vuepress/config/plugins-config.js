const secretconf = require('./secret-config.js');

module.exports = {
  '@vssue/vuepress-plugin-vssue': {
    platform: 'github-v4',
    owner: '91MrZhang',
    repo: 'docs',
    clientId: secretconf.clientId,
    clientSecret: secretconf.clientSecret,
    locale:'zh'
 },
  '@vuepress/back-to-top' : true,
  "vuepress-plugin-auto-sidebar": {
    //collapsable: true,
  }
  
}