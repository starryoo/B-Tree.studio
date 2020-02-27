const pluginConf = require('./config/pluginConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
    title: 'B-Tree',
    description: '一个打从心底里想带给你美好的工作室',
    plugins: pluginConf,
    head: headConf,
    themeConfig: {
        author: 'moecopilot',
        logo: '/favicon.jpeg',
        smoothScroll: true,
        nextLinks: true,
        prevLinks: true,
        lastUpdated: '上次更新：',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'product',
                link: '/product/'
            },
            {
                text: 'doc',
                link: '/doc/'
            },
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: true,

    },

    locales: {
        '/': {
            lang: 'zh-CN'
        }
    }
}