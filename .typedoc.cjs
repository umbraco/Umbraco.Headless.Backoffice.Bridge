module.exports = {
  entryPoints: ['./src/'],
  entryPointStrategy: 'expand',
  exclude: [ './src/base/angular/*.ts' ],
  out: 'docs',
  plugin: [ 'typedoc-plugin-markdown' ],
  readme: 'none',
  excludeExternals: true,
  excludeInternal: true,
  excludePrivate: true,
}
