
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./simmer.js.cjs.production.min.js')
} else {
  module.exports = require('./simmer.js.cjs.development.js')
}
