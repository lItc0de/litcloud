const path = require('path');

module.exports = {
  client: {
    service: { name: 'litcloud-frontend', localSchemaFile: path.resolve(__dirname, 'shared/schema.gql') },
    includes: ['frontend/src/**/*.{js,jsx,ts,tsx,vue,gql}'],
  },
  service: {
    name: 'litcloud-backend',
    localSchemaFile: path.resolve(__dirname, 'shared/schema.gql'),
  },
};
