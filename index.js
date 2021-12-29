module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function(page) {
        var label = '&copy ' + location.hostname + ' 版权所有 ICP证： ';
        var icp = "<a href='https://beian.miit.gov.cn/' target='_blank'></a>";
        if(this.options.pluginsConfig['icp']) {
            label = this.options.pluginsConfig['icp']['label'];
            icp = "<a href='"+(this.options.pluginsConfig['icp']['link'])+"' target='_blank'>"+(this.options.pluginsConfig['icp']['number'])+"</a>";
        }
        var str = ' \n\n<footer class="page-footer">\n' + label +
        icp +
        '\n</footer>'
        page.content = page.content + str;
        return page;
    }
  }
};
