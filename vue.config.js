module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/covid-resources/'
      : '/dist/'
}