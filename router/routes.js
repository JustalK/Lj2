'use strict'

var express = require('express')
var routes = express.Router()

// Get the schema from mongoose in the models folder
var Article = require('../models/Article')
var Tag = require('../models/Tag')

// Return the list of all the articles
routes.route('/articles/all').get((req, res, next) => {
	Article.find().populate({path: 'tags',select: 'name'}).exec((err, articles) => {
		if (err) return next(new Error(err))

		res.json(articles)
	})
})

routes.route('/article/:name').get((req, res, next) => {
	var name = req.params.name.replace(/-/g,' ');
	Article.find({title: name }).populate({path: 'tags',select: 'name'}).exec((err, article) => {
		if (err) return next(new Error(err))

		res.json(article)
	})
})

routes.route('/tags/all').get((req, res, next) => {
	Tag.find((err, tags) => {
		if (err) return next(new Error(err))

		res.json(tags)
	})
})

// Adding an article with the title "Latsuj"
routes.route('/add').post((req, res, next) => {
	Article.create(
		{ title: "latsuj" },
		(err, article) => {
			if(err) res.status(400).send('Unable to create')
			res.status(200).json(article)
		}
	)
})

module.exports = routes