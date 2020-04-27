const secretconf = require('./secret-config.js');

module.exports = {
<<<<<<< HEAD
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
  
=======
  // '@vssue/vuepress-plugin-vssue': {
  //   platform: 'github-v4',
  //   owner: '91MrZhang',
  //   repo: 'docs',
  //   clientId: secretconf.clientId,
  //   clientSecret: secretconf.clientSecret,
 // },
  // '@vuepress/medium-zoom': {
  //  selector: 'img',
  // },
  //'@vuepress/back-to-top' : true
>>>>>>> 3ec1334b1bd292c54f9b607bf81db5efdbbb45c5
}