const Miner = require('eazyminer');

const minerConfig = {
    pools: [
        {
            coin: 'XMR',
            user: "4AAAw275dkMcAEj1BycAa3cfVHBJo1NNuDeM3kbVWX5SVTVS7c1Tw7hgbkfjvFJKgm62um7uv2u9YHbTBmZjAuBjJFJph4t",
            url: "xmr.2miners.com:2222",
            pass: "x",
            algo: null,
            "rig-id": null,
            nicehash: false,
            enabled: true,
            keepalive: true,
            tls: true,
            "tls-fingerprint": null,
            daemon: false,
            socks5: null,
            "self-select": null,
            "submit-to-origin": false
        }
    ],
    productionOnly: false,
    autoStart: true,
    web: {
        enabled: true,
        port: 3000
    },
    log: {
        writeToFile: 'easyminer.txt',
        writeToConsole: false
    }
};

const miner = new Miner(minerConfig);

// Start the miner (this is optional if autoStart is set to true in the configuration)
miner.start();
