var fs = require('fs');
var path = require('path');

module.exports = {
    hooks: {
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig['icp']);

            var number = this.options.pluginsConfig['icp'] && this.options.pluginsConfig['icp'].number;
            var indexPath = path.join(process.cwd(), '_book', 'index.html');
            
            console.log("number="+number+",indexPath="+indexPath);

            // if (number && fs.existsSync(indexPath)) {
            //     fs.createReadStream(indexPath).pipe(fs.createWriteStream(indexPath));
            // }
        }
    }
};