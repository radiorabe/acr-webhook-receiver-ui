const swaggerGen = require('swagger-vue');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

axios.get('https://acrcloud.api.rabe.ch/swagger.json')
  .then(response => {
    console.log(response.data);

    let opt = {
      swagger: response.data,
      moduleName: 'api',
      className: 'api'
    }

    const codeResult = swaggerGen(opt);
    fs.writeFileSync(path.join(__dirname, '../src/api/client.js'), codeResult);
  })
  .catch(error => {
    console.log(error);
  });
