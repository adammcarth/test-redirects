'use strict'

const forEach = require('lodash.foreach')
const request = require('request')
const async = require('async')
const chalk = require('chalk')
const tests = require('./test-redirects.json')
const concurrency = 4

const q = async.queue(function (task, callback) {
  request(task.from, function (error, response, body) {
      testRedirect(task.from, task.to, response.request.uri.href)
      callback()
  })
}, concurrency)

var errors = 0

q.drain = function () {
  if (errors > 0) {
    process.exit(1)
  }
}

function testRedirect (from, to, result) {
  if (to === result) {
    console.log(chalk.green('✓') + ' ' + from + ' → ' + to)
    return
  }
  errors++
  console.log(chalk.red('✘') + ' ' + from + ' → ' + to + chalk.gray(' : ' + result))
}

forEach(tests, function (value, key) {
  q.push({from: key, to: value})
})
