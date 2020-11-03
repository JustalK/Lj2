'use strict';

const express = require('express');
const routes = express.Router();
const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);
const services = require('../services/' + filename)(dbs);

// Return the list of all the articles
routes.route('/').get(async (request, response) => {
	response.json(await services.get_all());
});

module.exports = routes;
