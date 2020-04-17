const nodeCmd = require('node-cmd');

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

nodeCmd.get(
    'net start w32time',
    (err, data, stderr) => console.log(data),
);

wait(10000).then(() => {
    nodeCmd.get(
        'w32time /resync',
        (err, data, stderr) => console.log(data),
    );
});
