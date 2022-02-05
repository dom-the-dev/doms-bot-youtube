const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "SnkLfzHooxnfuOQN75d241rTO",
    appSecret: "KcrmNu8bd3Qvade3AG7EB1snN2EXL9M3ZmkRGUTx5yQm9kHCFT",
    accessToken: "4103823345-TczRa8INPIUwqsHWGOjg6GSSLSjFv2LYa5O7rhT",
    accessSecret: "CTvRl0gb2cyWy6XBcbENhIeEhlRciWXjTWqvmjjmvRfNf"
})

const rwClient = client.readWrite

module.exports = rwClient