var environmnts = {};

environmnts.staging = {
    'httpPort': 3333,
    'envName': 'staging',

};

environmnts.production = {
    'httpPort': 5555,
    'envName': 'production'
};

var currenEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

var environmntToExport = typeof (environmnts[currenEnvironment]) == 'object' ? environmnts[currenEnvironment] : environmnts.staging;

module.exports = environmntToExport;
