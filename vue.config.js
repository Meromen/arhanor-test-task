module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/arhanor-test-task.git/'
    : '/',
  productionSourceMap: false,
  filenameHashing: false,
  outputDir: 'docs',
  lintOnSave: process.env.NODE_ENV !== 'production'
}
