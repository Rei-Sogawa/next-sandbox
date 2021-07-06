// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  client: {
    service: {
      name: 'dummy',
      localSchemaFile: './schema.docs.graphql',
    },
    includes: ['components/**/*.tsx', 'pages/**/*.tsx'],
    excludes: ['lib/graphql/generated.ts'],
  },
}
