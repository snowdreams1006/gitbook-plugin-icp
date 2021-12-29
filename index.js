module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function(page) {

// "label": {
//         "type": "string",
//         "title": "icp label",
//         "required": false
//       },
//       "number": {
//         "type": "string",
//         "title": "icp number",
//         "required": true
//       },
//       "link": {
//         "type": "string",
//         "title": "link url",
//         "required": false,
//         "default": "https://beian.miit.gov.cn/"
//       },
//       "style": {
//         "type": "object",
//         "title": "icp number style",
//         "required": false
//       }

// <div class="ali-copyright-text" data-spm-anchor-id="5176.19720258.J_9220772140.i0.3fe22c4a52zKcd">© 2009-2021 Aliyun.com 版权所有 增值电信业务经营许可证： <a href="http://beian.miit.gov.cn/" target="_blank">浙 B2-20080101</a> 域名注册服务机构许可： <a href="http://阿里云计算有限公司.域名.信息/ " target="_blank">浙通网安【2019】94 号</a> <a href="http://北京万网志成科技有限公司.域名.信息/" target="_blank">信部电函【2005】374 号 </a></div>

// © 2009-2021 Aliyun.com 版权所有 ICP证： 
            this.log.debug.ln('page:before', this.options.pluginsConfig['icp']);

          _copy = ''
      if(this.options.pluginsConfig['icp']) {
        _label = this.options.pluginsConfig['icp']['modify_label'] || _label;
        _format = this.options.pluginsConfig['icp']['modify_format'] || _format;

        var _c = this.options.pluginsConfig['tbfed-pagefooter']['copyright'];
        _copy = _c ? _c + ' all right reserved，' + _copy : _copy;
      }
      var _copy = '<span class="copyright">'+_copy+'</span>'
      var str = ' \n\n<footer class="page-footer">' + _copy +
        '<span class="footer-modification">' +
        _label +
        '\n{{file.mtime | date("' + _format +
        '")}}\n</span></footer>'
      page.content = page.content + str;
      return page;
    }
  }
};
