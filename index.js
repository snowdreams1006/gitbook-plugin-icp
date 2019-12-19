module.exports = {
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig['icp']);
        },
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig['icp']);
        }
    }
};