var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');



module.exports = {
    hooks: {
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig['icp']);

            var number = this.options.pluginsConfig['icp'] && this.options.pluginsConfig['icp'].number;
            var indexPath = path.join(process.cwd(), '_book', 'index.html');
            var multilingual = this.isLanguageBook();

            console.log("number="+number+",indexPath="+indexPath+",multilingual="+multilingual);

if (multilingual && number && fs.existsSync(indexPath)) {
    var indexText = fs.readFileSync(indexPath);
    indexText = indexText.toString();
console.log(indexText);

$ = cheerio.load(indexText);
var str ='<div style="position: absolute;bottom: 0;left: 50%;transform: translate(-50%, -50%);">ICP证：<a href="http://beian.miit.gov.cn/" target="_blank" style="color:#f72b07">浙ICP备18042346号</a></div>';
$('body').append(str);
indexText = $.html();

console.log(indexText);

fs.writeFileSync(indexPath,indexText);

            }
        }
    }
};