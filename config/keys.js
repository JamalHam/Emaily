//figure out what set of creds to return

if (process.env.NODE_ENV === 'production') {
    //we are in production return prod keys
    module.exports = require('./prod');
} else {
    //return dev keys
    module.exports = require('./dev');
}