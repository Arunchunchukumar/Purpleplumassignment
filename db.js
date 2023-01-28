const environment = 'development'
const config = require('../Purpleplumassignment/knexfile')[environment]

module.exports = require('knex')(config)
