
var config = require('./build');

let apiConfig = {
  sit: 'http://ehr.sit.ffan.com/api',
  uat: 'http://ehr.uat.ffan.com/api',
  ffan: 'http://ehr.ffan.com/api',
  lixin: 'http://www.lixin.com/api'
};

let url = '';
if (process.argv[2]) url = apiConfig[process.argv[2]];
else url = apiConfig.sit;

config.build(url);
