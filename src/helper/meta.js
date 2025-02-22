module.exports = {
	get_meta: (slug, meta_title, meta_description) => {
		return {
			title: meta_title,
			titleTemplate: '%s | Justal Kevin Portfolio',
			htmlAttrs: {
				lang: 'en-US'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'description', content: meta_description },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],
			link: [
				{rel: 'canonical', href: process.env.PROTOCOL + '://' + process.env.HOST + ':' + process.env.PORT + '/' + slug}
			],
			noscript: [
				{ innerHTML: 'This website requires JavaScript.' }
			]
		};
	}
};
