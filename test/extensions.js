// autocomplete the following extensions
global.options = {
  extensions: [ 'js', 'md' ]
}

// otherwise just the same as basic.
var basic = require('./basic.js')
var req = basic.req
var mount = basic.mount

// additional tests to ensure that it's actually not caching.
var test = require('tap').test

test('autocomplete extensions', function(t) {
  req('/test/st', function (er, res, body) {
    if (er)
      throw er

    t.equal(res.statusCode, 200)
    t.ok(body)
    t.end()
  })
})
