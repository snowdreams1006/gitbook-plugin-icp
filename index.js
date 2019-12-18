var fs = require('fs');
var path = require('path');

module.exports = {
	book: {
        assets: "./assets",
        js: ["plugin.js"]
    },
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig['icp']);
        },
        "finish:before": function() {
            this.log.debug.ln('finish:before', this.options.pluginsConfig['icp']);
        },
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig['icp']);

            // var faviconPathFile = this.options.pluginsConfig['favicon-absolute'] && this.options.pluginsConfig['favicon-absolute'].favicon;
            // if (faviconPathFile.startsWith("/")) {
            //     faviconPathFile = faviconPathFile.substring(1, faviconPathFile.length);
            // }
            // var faviconAbsolutePath = path.join(process.cwd(), faviconPathFile);
            // var gitbookFaviconPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'favicon.ico');
            // if (faviconPathFile && fs.existsSync(faviconPathFile) && fs.existsSync(gitbookFaviconPath)) {
            //     fs.unlinkSync(gitbookFaviconPath);
            //     fs.createReadStream(faviconAbsolutePath).pipe(fs.createWriteStream(gitbookFaviconPath));
            // }

            // var appleTouchIconPrecomposed152PathFile = this.options.pluginsConfig['favicon-absolute'] && this.options.pluginsConfig['favicon-absolute'].appleTouchIconPrecomposed152;
            // if (appleTouchIconPrecomposed152PathFile.startsWith("/")) {
            //     appleTouchIconPrecomposed152PathFile = appleTouchIconPrecomposed152PathFile.substring(1, appleTouchIconPrecomposed152PathFile.length);
            // }
            // var appleTouchIconPrecomposed152 = path.join(process.cwd(), appleTouchIconPrecomposed152PathFile);
            // var gitbookAppleTouchPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'apple-touch-icon-precomposed-152.png');
            // if (appleTouchIconPrecomposed152PathFile && fs.existsSync(appleTouchIconPrecomposed152PathFile) && fs.existsSync(gitbookAppleTouchPath)) {
            //     fs.unlinkSync(gitbookAppleTouchPath);
            //     fs.createReadStream(appleTouchIconPrecomposed152).pipe(fs.createWriteStream(gitbookAppleTouchPath));
            // }
        }
    }
};