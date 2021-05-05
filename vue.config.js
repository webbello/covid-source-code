module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/resource/'
      : '/dist/'
}