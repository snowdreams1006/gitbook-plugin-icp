require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind('start', function(e, config) {
        var conf = config['icp'];
        
        console.log(conf);
    });
});